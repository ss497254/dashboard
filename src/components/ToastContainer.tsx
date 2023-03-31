import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useToastStore } from "src/global-stores/useToastStore";
import { Toast } from "src/ui/Toast";

const animationDuration = 400;

export const ToastContainer = () => {
  const { toasts, resume, pause, remove } = useToastStore();

  return (
    <TransitionGroup
      className="toast-container"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {toasts.map((toast, index) => (
        <CSSTransition key={toast.id} timeout={animationDuration}>
          <Toast
            {...toast}
            remove={remove}
            index={index}
            total={toasts.length}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
