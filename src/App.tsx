import { useState, useRef, useEffect } from 'react';
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
  const [videoHQ, setVideoHQ] = useState(false);
  const orientationString = orientation;
  const [mobileShowMenu, setMobileShowMenu] = useState(false);
  const scrollableDivRef = useRef(null);

  // measure network performance on page load
  useEffect(() => {
    const measurePerformance = () => {
      const resources = performance.getEntriesByType("resource");
      let totalSizeInBits = 0;
      let totalDurationInSeconds = 0;
  
      resources.forEach((entry) => {
        // Check if the entry is a PerformanceResourceTiming object
        if ((entry as PerformanceResourceTiming).encodedBodySize !== undefined) {
          const resource = entry as PerformanceResourceTiming; // Type assertion
          totalSizeInBits += resource.encodedBodySize * 8; // Convert bytes to bits
          totalDurationInSeconds += (resource.responseEnd - resource.startTime) / 1000; // Convert ms to seconds
        }
      });
  
      if (totalDurationInSeconds > 0) {
        const speedMbps = totalSizeInBits / totalDurationInSeconds / (1024 * 1024); // Convert to Mbps
        console.log(`Estimated download speed: ${speedMbps.toFixed(2)} Mbps`);
  
        // Set videoHQ to true if speed is 3 Mbps or higher
        setVideoHQ(speedMbps >= 3);
      }
    };
  
    if (performance.getEntriesByType("resource").length > 0) {
      measurePerformance();
    } else {
      window.addEventListener("load", measurePerformance);
    }
  
    return () => {
      window.removeEventListener("load", measurePerformance);
    };
  }, []);
  

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
            bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200
           mb-0 col-start-2 w-full overflow-y-scroll custom-main-scrollbar `} >
            <ScrollToTop scrollTargetRef={scrollableDivRef}/>
            <Routes>
              {/* Data is exported from each component and passed to TabContent because we want to use their data to render a tab as well as a preview */}
              <Route path="/" element={<TabContent {...HomeTabContent} videoHQ={videoHQ} setVideoHQ={setVideoHQ}/>} />
              <Route path="/myfavoritesport-art-competition" element={<TabContent {...MFSFrontendTabContent} videoHQ={videoHQ} setVideoHQ={setVideoHQ}/>} />
              <Route path="/serverless-backend-api" element={<MFSBackend />} /> {/* uses state so has to be imported as a function rather than data */}
              <Route path="/icaf-responsive-design" element={<TabContent {...ICAFFrontendTabContent} videoHQ={videoHQ} setVideoHQ={setVideoHQ}/>} />
              <Route path="/tabletop-puzzle-game" element={<TabContent {...PuzzlrTabContent} videoHQ={videoHQ} setVideoHQ={setVideoHQ}/>} />
              <Route path="/electron-chess-analytics" element={<TabContent {...ElectronChessTabContent} videoHQ={videoHQ} setVideoHQ={setVideoHQ}/>} />
              <Route path="/python-data-manipulation" element={<TabContent {...PyDataManipulationTabContent} videoHQ={videoHQ} setVideoHQ={setVideoHQ}/>} />
              <Route path="/machine-learning" element={<TabContent {...MachineLearningTabContent} videoHQ={videoHQ} setVideoHQ={setVideoHQ}/>} />
              <Route path="/excel-formulas" element={<TabContent {...ExcelTabContent} videoHQ={videoHQ} setVideoHQ={setVideoHQ}/>} />
              <Route path="/powershell" element={<TabContent {...PowershellTabContent} videoHQ={videoHQ} setVideoHQ={setVideoHQ}/>} />
              <Route path="/flow" element={<TabContent {...FlowTabContent} videoHQ={videoHQ} setVideoHQ={setVideoHQ}/>} />
              <Route path="/sql-webcommerce" element={<TabContent {...SQLTabContent} videoHQ={videoHQ} setVideoHQ={setVideoHQ}/>} />
              <Route path="/webcommerce-project" element={<TabContent {...WebcommerceProjectTabContent} videoHQ={videoHQ} setVideoHQ={setVideoHQ}/>} />
              <Route path="/my-website" element={<TabContent {...MyWebsiteTabContent} videoHQ={videoHQ} setVideoHQ={setVideoHQ}/>} />
              <Route path="/visual-studio" element={<TabContent {...VisualStudioTabContent} videoHQ={videoHQ} setVideoHQ={setVideoHQ}/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;