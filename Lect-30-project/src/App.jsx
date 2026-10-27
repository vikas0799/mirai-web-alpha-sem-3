import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router";

import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";

function About() {
  return <h1>About Student Portal</h1>;
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/students">Students</Link>{" | "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/students/:id"
          element={<StudentDetails />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;