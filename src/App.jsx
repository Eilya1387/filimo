import Home from "./pages/home";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
