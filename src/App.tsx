import { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './modules/Sidebar';
import { HomeTabContent } from './modules/Home';
import MFSBackend from './modules/MFSBackend';
import { ElectronChessTabContent } from './modules/ElectronChess';
import { PyDataManipulationTabContent } from './modules/PyDataManipulation';
import { MachineLearningTabContent } from './modules/MachineLearning';
import { ExcelTabContent } from './modules/Excel';
import { PowershellTabContent } from './modules/Powershell';
import { FlowTabContent } from './modules/Flow';
import { SQLTabContent } from './modules/SQL';
import { ICAFFrontendTabContent } from './modules/ICAFFrontend';
import {VisualStudioTabContent} from './modules/VisualStudio';
import { WebcommerceProjectTabContent } from './modules/WebcommerceProject';
import {MyWebsiteTabContent} from './modules/MyWebsite';
import useWindowDimensions from './components/utils/useWindowDimensions';
import MobileSidebar from './modules/MobileSidebar';
import { MFSFrontendTabContent } from './modules/MFSFrontend';
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
      
      <div className="grid grid-cols-1 grid-rows-1 w-full h-full object-cover overflow-hidden bg-gradient-to-bl from-slate-800 via-slate-900 to-slate-800"> {/*  bg-base-pattern   bg-gradient-to-r from-violet-500 to-fuchsia-500  */}
      {/* <GrainTexture/> */}
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
            bg-gradient-to-r from-cyan-50 to-cyan-100
           mb-0 col-start-2 w-full overflow-y-scroll custom-main-scrollbar `} >
            <ScrollToTop scrollTargetRef={scrollableDivRef}/>
            <Routes>
              {/* Data is exported from each component and passed to TabContent because we want to use their data to render a tab as well as a preview */}
              <Route path="/" element={<TabContent {...HomeTabContent} />} />
              <Route path="/portfoliosite" element={<TabContent {...HomeTabContent} />} />
              <Route path="/portfoliosite/myfavoritesport-art-competition" element={<TabContent {...MFSFrontendTabContent} />} />
              <Route path="/portfoliosite/serverless-backend-api" element={<MFSBackend />} /> {/* uses state so has to be imported as a function rather than data */}
              <Route path="/portfoliosite/icaf-responsive-design" element={<TabContent {...ICAFFrontendTabContent} />} />
              <Route path="/portfoliosite/tabletop-puzzle-game" element={<TabContent {...PuzzlrTabContent} />} />
              <Route path="/portfoliosite/electron-chess-analytics" element={<TabContent {...ElectronChessTabContent} />} />
              <Route path="/portfoliosite/python-data-manipulation" element={<TabContent {...PyDataManipulationTabContent} />} />
              <Route path="/portfoliosite/machine-learning" element={<TabContent {...MachineLearningTabContent} />} />
              <Route path="/portfoliosite/excel-formulas" element={<TabContent {...ExcelTabContent} />} />
              <Route path="/portfoliosite/powershell" element={<TabContent {...PowershellTabContent} />} />
              <Route path="/portfoliosite/flow" element={<TabContent {...FlowTabContent} />} />
              <Route path="/portfoliosite/sql-webcommerce" element={<TabContent {...SQLTabContent} />} />
              <Route path="/portfoliosite/webcommerce-project" element={<TabContent {...WebcommerceProjectTabContent} />} />
              <Route path="/portfoliosite/my-website" element={<TabContent {...MyWebsiteTabContent} />} />
              <Route path="/portfoliosite/visual-studio" element={<TabContent {...VisualStudioTabContent} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;