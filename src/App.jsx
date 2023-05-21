import "./App.css";

// React Router Dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Layouts from "./components/Layouts";

// Import Pages
import { DetailSurah, Home } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layouts />}>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="detail-surah/:id">
          <Route index element={<DetailSurah />} />
        </Route>
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
