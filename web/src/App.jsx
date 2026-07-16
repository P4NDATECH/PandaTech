import { BrowserRouter, Routes, Route } from "react-router-dom";


import Background from "./components/Background";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Jarvis from "./pages/Jarvis";
import Projects from "./pages/Projects";
import Tutorials from "./pages/Tutorials";
import Downloads from "./pages/Downloads";
import Optimizer from "./pages/Optimizer";
import Products from "./pages/Products";



function App() {


  return (


    <BrowserRouter>


      <Background />


      <Navbar />



      <main className="page">


        <Routes>


          <Route
          path="/"
          element={<Home />}
          />



          <Route
          path="/jarvis"
          element={<Jarvis />}
          />



          <Route
          path="/productos"
          element={<Products />}
          />



          <Route
          path="/proyectos"
          element={<Projects />}
          />



          <Route
          path="/optimizer"
          element={<Optimizer />}
          />



          <Route
          path="/tutoriales"
          element={<Tutorials />}
          />



          <Route
          path="/descargas"
          element={<Downloads />}
          />



        </Routes>


      </main>



      <Footer />


    </BrowserRouter>


  );

}



export default App;