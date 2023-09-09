import { EventEmitter2 } from "eventemitter2";
import { IUser } from "src/types/IUser";

export interface Connection extends EventTarget {
  onerror: ((ev: Event) => void) | null;
  onmessage: ((ev: MessageEvent) => void) | null;
  onclose: ((ev: CloseEvent) => void) | null;
  close(code?: number, reason?: string): void;
  send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
}

export class ApiClient<T extends Connection> extends EventEmitter2 {
  private token: string;
  user: IUser;
  connection?: T;
  isConnecting = false;
  isResolved = false;
  getConnection: (token: string) => T;

  constructor(user: IUser, token: string, getConnection: (token: string) => T) {
    super({
      wildcard: true,
      verboseMemoryLeak: true,
      delimiter: ".",

      // This will ignore the "unspecified event" error
      ignoreErrors: true,
    });

    this.token = token;
    this.user = user;
    this.getConnection = getConnection;
  }

  async connect() {
    if (this.isConnecting || this.connection) return;

    try {
      this.isConnecting = true;
      this.emit("state.connecting");
      this.connection = this.getConnection(this.token);
      this.emit("state.connected");

      this.connection.onmessage = this.onmessage.bind(this);
      this.connection.onerror = this.onerror.bind(this);
      this.connection.onclose = this.onclose.bind(this);
      this.isConnecting = false;
    } finally {
      this.emit("state.failed");
      this.isConnecting = false;
      this.reconnect();
    }
  }

  reconnect() {
    if (this.isConnecting || this.connection) return;

    setTimeout(this.connect.bind(this), 1000 * 60);
  }

  disconnect() {
    this.connection?.close();
    this.connection = undefined;
  }

  private onmessage: NonNullable<Connection["onmessage"]> = (e) => {
    if (typeof e.data === "string") {
      const { type, ...data } = JSON.parse(e.data);

      this.emit(type, data);
    } else console.warn(`invalid event data type ${typeof e.data}`);
  };

  private onerror: NonNullable<Connection["onerror"]> = (e) => {
    this.emit("state.error", e);
    this.reconnect();
  };

  private onclose: NonNullable<Connection["onclose"]> = (e) => {
    this.emit("state.close", e);
    this.reconnect();
  };
}
