import style from "./Modal.module.scss";
import clsx from "clsx";
import ModalPortal from "../ModalPortal";
// import { ReactComponent as Icon } from "../../../images/svg/close.svg";
import { useDispatch } from "react-redux";
import { clearAllStep } from "../../../store/appSlice";
import { useClickAway } from "@uidotdev/usehooks";
import useLockBodyScroll from "../../../hooks/lockBodyScroll ";

const Modal = ({ children, open = false }) => {
  const dispatch = useDispatch();

  useLockBodyScroll(open);

  const ref = useClickAway(() => {
    dispatch(clearAllStep());
  });

  return (
    <ModalPortal open={open}>
      <div tabIndex={0} className={clsx(style.modal)}>
        <div ref={ref} className={clsx(style.modal__inner)}>
          <button
            className={clsx(style.modal__close)}
            onClick={() => dispatch(clearAllStep())}
          >
            {/* <Icon /> */}
          </button>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};
export default Modal;