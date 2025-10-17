import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import routes from "./routes";

export default function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          success: { duration: 1000 },
          error: { duration: 1000 },
        }}
        containerStyle={{ top: "36px", right: "30px" }}
      />
      <Routes>
        {routes.map((group, index) => (
          <Route key={index} path={group.path} element={group.layout}>
            {group.pages.map((page) => (
              <Route key={page.key} path={page.path} element={page.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </>
  );
}
