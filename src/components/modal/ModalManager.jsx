import { useSelector } from "react-redux";
import ModalAuth1 from "./auth/ModalAuth1";
import useGetCurrentModal from "@/hooks/getCurrentModal";

const ModalManager = () => {
  const { modalState } = useSelector((state) => state.app);
  const modal = useGetCurrentModal(modalState);

  return (
    <>
      <ModalAuth1 open={modal === "auth-1"} />
    </>
  );
};

export default ModalManager;
