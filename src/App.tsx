import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './modules/Sidebar';
import Home from './modules/Home';
import MFSBackend from './modules/MFSBackend';
import ElectronChess from './modules/ElectronChess';
import PyDataManipulation from './modules/PyDataManipulation';
import MachineLearning from './modules/MachineLearning';
import Excel from './modules/Excel';
import Powershell from './modules/Powershell';
import Flow from './modules/Flow';
import SQL from './modules/SQL';
import ICAFFrontend from './modules/ICAFFrontend';
import VisualStudio from './modules/VisualStudio';
import WebcommerceProject from './modules/WebcommerceProject';
import MyWebsite from './modules/MyWebsite';
import useWindowDimensions from './components/utils/useWindowDimensions';
import MobileSidebar from './modules/MobileSidebar';
import MFSFrontend from './modules/MFSFrontend';
import ScrollToTop from './components/utils/ScrollToTop';
import { PuzzlrTabContent } from './modules/Puzzlr';
import { TabContent } from './TabContent';

function App() {
  const { orientation } = useWindowDimensions();
  const orientationString = orientation;
  const [mobileShowMenu, setMobileShowMenu] = useState(false);
  const scrollableDivRef = useRef(null);
  console.log(orientationString);
  return (
    <Router>
      <div className="grid grid-cols-1 grid-rows-1 w-full h-full object-cover overflow-hidden   bg-gray-800  "> {/*  bg-base-pattern   bg-gradient-to-r from-violet-500 to-fuchsia-500 */}
        {/* <img src={bg} className="col-start-1 row-start-1 w-full h-full object-cover relative" alt="bg" /> */}
        <div className={`
          ${orientationString === "landscape" ? "flex-row  md:max-h-[90vh]" : "flex-col"} 
          max-h-[95%] flex-grow relative m-auto w-[95%] md:w-[80%] max-w-[1400px] flex row-start-1 col-start-1 h-full justify-center`
        }>
          <div className={`
            ${orientationString === "landscape" ? " w-full lg:max-w-[325px] xl:max-w-[400px] md:max-w-[300px] custom-side-scrollbar" : "w-full py-6"} 
            flex-shrink-0 overflow-y-auto bg-sidebar-base overflow-auto custom-main-scrollbar max-h-full `
          }>
            {orientationString === "landscape" ? <Sidebar /> : <MobileSidebar mobileShowMenu={mobileShowMenu} setMobileShowMenu={setMobileShowMenu} />}
          </div>
          <div ref={scrollableDivRef} className={`${orientationString == "landscape" ? "col-start-1 row-start-1" : "col-start-1 row-start-2"} 
           bg-gradient-to-r from-cyan-50 to-cyan-100 mb-0 col-start-2 w-full overflow-y-scroll custom-main-scrollbar `} >
            <ScrollToTop scrollTargetRef={scrollableDivRef}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfoliosite" element={<Home />} />
              <Route path="/portfoliosite/myfavoritesport-art-competition" element={<MFSFrontend />} />
              <Route path="/portfoliosite/serverless-backend-api" element={<MFSBackend />} />
              <Route path="/portfoliosite/icaf-responsive-design" element={<ICAFFrontend />} />
              <Route path="/portfoliosite/tabletop-puzzle-game" element={<TabContent {...PuzzlrTabContent} />} />
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