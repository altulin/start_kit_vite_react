import style from "../Input.module.scss";
import clsx from "clsx";

const ErrorText = ({ formik, name }) => {
  return (
    <>
      {formik.errors[`${name}`] ? (
        <p className={clsx(style.error)}>{formik.errors[`${name}`]}</p>
      ) : null}
    </>
  );
};
export default ErrorText;
