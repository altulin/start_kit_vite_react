import { useDispatch } from "react-redux";

const useFetchToStore = (axs, reducer) => {
  const dispatch = useDispatch();

  const fetch = async () => {
    try {
      const response = await axs();
      dispatch(reducer(response.data));
    } catch (error) {
      //
    }
  };

  return fetch;
};

export default useFetchToStore;
