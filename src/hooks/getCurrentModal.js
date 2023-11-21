const useGetCurrentModal = (modalState) => {
  const modalName = Object.keys(modalState).filter((item) => {
    return modalState[`${item}`].step !== 0;
  });

  if (modalName.length !== 0) {
    const name = modalName[0];
    const numStep = modalState[`${modalName}`].step;

    return `${name}-${numStep}`;
  } else {
    return null;
  }
};

export default useGetCurrentModal;
