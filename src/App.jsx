import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./PrivateRoute";
import routes from "./routes";
import { AuthProvider } from "./provider/AuthProvider";

const NotFound = () => {
  window.location.href = "http://localhost:5000";
  return null;
};

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
      <AuthProvider>
        <Routes>
          {routes.map((group, index) => (
            <Route key={index} element={group.layout}>
              {group.pages.map((page) => (
                <Route
                  key={page.key}
                  path={page.path}
                  element={
                    <PrivateRoute
                      requireAuth={page.requireAuth}
                      roles={page.roles}
                      guestOnly={page.guestOnly}
                    >
                      {page.element}
                    </PrivateRoute>
                  }
                />
              ))}
            </Route>
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}
