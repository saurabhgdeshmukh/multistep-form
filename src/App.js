import ProgressBar from "./components/progressBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageA from "./components/pageA";
import PageB from "./components/pageB";
import PageC from "./components/pageC";
import PageD from "./components/pageD";
import PageE from "./components/pageE";
import PageF from "./components/pageF";
import PageG from "./components/pageG";
import React, { useState } from "react";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageA />} />
          <Route path="/pageB" element={<PageB />} />
          <Route path="pageB/pageC" element={<PageC />} />
          <Route path="pageB/pageC/pageD" element={<PageD />} />
          <Route path="pageB/pageC/pageD/pageE" element={<PageE />} />
          <Route path="pageB/pageC/pageD/pageE/pageF" element={<PageF />} />
          <Route
            path="pageB/pageC/pageD/pageE/pageF/pageG"
            element={<PageG />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
