import React from 'react';
import { TabContent } from '../TabContent';
import { TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, secondaryHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { CodeLink } from '@/data/CodeLink';
import { LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';

function VisualStudio() {
    const coverVidUrl = new URL('../assets/vid/visual_studio.mp4', import.meta.url).href;

    const tabContent: TabContentData = {
        media: {
          type: 'video',
          src: coverVidUrl,
          alt: 'Consulting project',
          dims: {h: 1920, w: 1080}
        },
        title: "InvestNMe Consulting Project",
        content: 
        <>
          <ContentCard>
            <p className={`${mainHeaderClasses}`}>
              Full-stack application in Visual Studio.
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
            For this project, our group had to develop an investing assistant application in Visual Studio. 
            The application takes user preferences, such as how risky they would like their portfolio to be, and builds a 10 year investment portfolio based on that information.
            </p>

            <p className={`${leftMainHeaderClasses}`}>
              Technology
            </p>
            {divider}


            <p className={`${paragraphClasses}`}>
              The project was coded in Visual Studio and connects to an <SB>Access</SB> database, which stores information about different kinds of stocks such as their expected return rate, riskiness value, and social equity. 
              <SB>Visual Basic</SB> code receives this data and uses Microsoft's <SB>Solver</SB> function to determine the optimal allocation of money based on user preferences.
            </p>


          </ContentCard>
          <ContentCard>
            <p className={`${leftMainHeaderClasses}`}>
              Source Code
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
              The source code is available <LinkWrapper url={`${CodeLink}DSSPortfolioOptimization`} text="here"/>.
            </p>
          </ContentCard>
        </>
    };
    
    return (
        <TabContent {...tabContent} />
    )
}
 
export default VisualStudio;