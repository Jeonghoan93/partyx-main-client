import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "src/layouts/RootLayout";
import Home from "src/pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* For RootLayout routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
