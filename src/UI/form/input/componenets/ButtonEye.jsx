import IconEye from "@/images/svg/eye.svg";
import IconEyeOff from "@/images/svg/eye-off.svg";
import style from "../Input.module.scss";
import clsx from "clsx";

const ButtonEye = ({ isTypeText, setType }) => {
  return (
    <button
      type="button"
      onClick={() => setType(!isTypeText)}
      className={clsx(style.button)}
    >
      {!isTypeText && <IconEye stroke="red" />}
      {isTypeText && <IconEyeOff stroke="red" />}
    </button>
  );
};
export default ButtonEye;
