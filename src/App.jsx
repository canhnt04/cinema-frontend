import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import routes from "./routes";

export default function App() {
  return (
    <>
      <Toaster />
      <Routes>
        {routes.map((group, index) => (
          <Route key={index} element={group.layout}>
            {group.pages.map((page) => (
              <Route key={page.key} path={page.path} element={page.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </>
  );
}
