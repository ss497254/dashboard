import { WS_URL } from "src/data/constants";
import { IUser } from "src/types/IUser";
import { ApiClient, Connection } from "./api-client";

let client: ApiClient<Connection>;

export const getApiClient = () => {
  if (!client) throw new Error("client not intialized");

  return client;
};

export const initializeApiClient = (user: IUser, token: string) => {
  if (client) throw new Error("client is already intialized");

  return (client = new ApiClient(
    user,
    token,
    (token: string) => new WebSocket(`${WS_URL!}?access_token=${token}`)
  ));
};
