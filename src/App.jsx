import { Routes, Route } from "react-router-dom";
import Template from "./templates_pages/Template";
import HomePage from "./pages/HomePage";
import ModalManager from "./components/modal/ModalManager";
import RequireAuth from "./hoc/RequireAuth";
import { useRenderCount } from "@uidotdev/usehooks";
import useFetchToStore from "./hooks/fetchToStore";
import { useEffect } from "react";
import { getTest } from "./api/axs/auth";
import { setPosts } from "./store/appSlice";

const App = () => {
  console.log("useRenderCount app: " + useRenderCount());
  const fetch = useFetchToStore(getTest, setPosts);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<HomePage />} />
          <Route
            path="/private"
            element={<RequireAuth>{/* <Private /> */}</RequireAuth>}
          />
        </Route>
      </Routes>
      <ModalManager />
      <div id="modal-root"></div>
    </>
  );
};

export default App;
