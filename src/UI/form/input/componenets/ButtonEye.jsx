import IconEye from "@/images/svg/eye.svg";
import IconEyeOff from "@/images/svg/eye-off.svg";

const ButtonEye = ({ isTypeText, setType }) => {
  return (
    <button
      type="button"
      className="input-block__eye"
      onClick={() => setType(!isTypeText)}
    >
      {!isTypeText && <IconEye stroke="red" />}
      {isTypeText && <IconEyeOff />}
    </button>
  );
};
export default ButtonEye;
