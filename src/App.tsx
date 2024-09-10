import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './assets/img/background.png';
import Sidebar from './modules/Sidebar';
import Home from './modules/Home';
import ElectronChess from './modules/ElectronChess';
import PyDataManipulation from './modules/PyDataManipulation';
import MachineLearning from './modules/MachineLearning';
import Excel from './modules/Excel';
import Powershell from './modules/Powershell';
import Flow from './modules/Flow';
import SQL from './modules/SQL';
import VisualStudio from './modules/VisualStudio';
import WebcommerceProject from './modules/WebcommerceProject';
import MyWebsite from './modules/MyWebsite';
import useWindowDimensions from './components/utils/useWindowDimensions';
import { Dimensions } from './components/utils/useWindowDimensions';
import MobileSidebar from './modules/MobileSidebar';

function App() {
  const { orientation } = useWindowDimensions();
  const orientationString = orientation;
  console.log(orientationString);
  return (
    <Router>
      <div className="grid grid-cols-1 grid-rows-1 w-full h-full object-cover overflow-hidden">
        <img src={logo} className="col-start-1 row-start-1 w-full h-full object-cover relative" alt="logo" />
        <div className={`flex-grow relative m-auto w-[90%] md:w-[80%] max-w-[1400px] max-h-[95vh] md:max-h-[90vh] flex  row-start-1 col-start-1 ${orientationString === "landscape" ? "flex-row" : "flex-col"}`}>
            <div className={`${orientationString === "landscape" ? " w-full max-w-[400px] custom-side-scrollbar" : "w-full"} flex-shrink-0 flex-grow overflow-y-auto  bg-sidebar-grey`}>
              {orientationString === "landscape" ? <Sidebar /> : <MobileSidebar />}
          </div>
          <div className={`${orientationString == "landscape" ? "col-start-1 row-start-1" : "col-start-1 row-start-2"} flex-grow bg-main-content-white mb-0 col-start-2 w-full overflow-y-scroll custom-main-scrollbar`} >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfoliosite" element={<Home />} />
              <Route path="/portfoliosite/electron-chess-analytics" element={<ElectronChess />} />
              <Route path="/portfoliosite/python-data-manipulation" element={<PyDataManipulation />} />
              <Route path="/portfoliosite/machine-learning" element={<MachineLearning />} />
              <Route path="/portfoliosite/excel-formulas" element={<Excel />} />
              <Route path="/portfoliosite/powershell" element={<Powershell />} />
              <Route path="/portfoliosite/flow" element={<Flow />} />
              <Route path="/portfoliosite/sql-webcommerce" element={<SQL />} />
              <Route path="/portfoliosite/webcommerce-project" element={<WebcommerceProject />} />
              <Route path="/portfoliosite/my-website" element={<MyWebsite />} />
              <Route path="/portfoliosite/visual-studio" element={<VisualStudio />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;