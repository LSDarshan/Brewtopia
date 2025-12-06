import Banner1 from './component/images/banner.jpg';
import './App.css';
import Navbar from './component/navbar';
import Home from './component/home';
import Drinks from './component/drink';
import Snacks from './component/snacks';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Navbar stays common */}
      <Navbar />

      {/* Routes section */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Banner only for Home */}
              <div
                style={{
                  position: "relative",
                  height: "100vh",
                  width: "100%",
                  backgroundImage: `url(${Banner1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.4)",
                  }}
                ></div>
              </div>

              {/* Home content */}
              <div style={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
                <Home />
              </div>
            </>
          }
        />

        {/* Other pages without banner */}
        <Route
          path="/drinks"
          element={
            <div style={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
              <Drinks />
            </div>
          }
        />
          {/* Other pages without banner */}
        <Route
          path="/Snacks"
          element={
            <div style={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
              <Snacks />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
