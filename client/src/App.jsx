import { useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
//import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import AddEditCard from "./pages/AddEditCard";
import SingleCard from "./pages/SingleCard";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import TagCards from "./pages/TagCards";

import styles from "./style";
import {
  Technique,
  CTA,
  Footer,
  Navbar,
  Stats,
  Hero,
  Engineering,
} from "./components";
import Home from "./components/Home";
import News from "./components/News";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tecnicatura" element={<Technique />} />
        <Route path="/ingenieria" element={<Engineering />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/cards/tag/:tag" element={<TagCards />} />
      </Routes>
    </div>
  );
}

export default App;

{
  /* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <BrowserRouter>
              <div className="App">
                <ToastContainer />
                <Routes>
                  <Route path="/" element={<Home />} />

                  <Route path="/tecnicatura" element={<Technique />} />
                  <Route path="/ingenieria" element={<Engineering />} />

                  <Route path="/cards/search" element={<Home />} />
                  <Route path="/cards/tag/:tag" element={<TagCards />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route
                    path="/addCard"
                    element={
                      <PrivateRoute>
                        <AddEditCard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/editCard/:id"
                    element={
                      <PrivateRoute>
                        <AddEditCard />
                      </PrivateRoute>
                    }
                  />
                  <Route path="/card/:id" element={<SingleCard />} />
                  <Route
                    path="/dashboard"
                    element={
                      <PrivateRoute>
                        <Dashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </BrowserRouter>

            
            <Footer />
          </div>
        </div> */
}
