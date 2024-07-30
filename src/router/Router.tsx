import { Route, Routes } from "react-router-dom";
import { navbar } from "../data/Dummy";

function Router() {
  return (
    <Routes>
      {navbar.map((item) => (
        <Route key={item.path} path={item.path} element={<div>{item.title}</div>} />
      ))}
    </Routes>
  );
}

export default Router;
