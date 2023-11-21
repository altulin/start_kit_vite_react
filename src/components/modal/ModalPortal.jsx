import ReactDOM from "react-dom";

const ModalPortal = ({ children, open = false }) => {
  if (!open) return null;

  return ReactDOM.createPortal(children, document.body);
};
export default ModalPortal;
