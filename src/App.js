import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Todo = lazy(() => import("./pages/Todo/index"));
const Error = lazy(() => import("./pages/Error"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/*" element={<Login />} />
            {/* <Route path="/*" element={<Error />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
