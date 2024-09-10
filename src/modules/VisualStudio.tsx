import React from 'react';
import { TabContent } from '../TabContent';
import { TabContentData } from '@/types/TabContentTypes';

function VisualStudio() {
    const coverVidUrl = new URL('../assets/vid/visual_studio.mp4', import.meta.url).href;

    const tabContent: TabContentData = {
        media: {
          type: 'video',
          src: coverVidUrl,
          alt: 'Consulting project',
        },
        title: "InvestNMe Consulting Project",
        sections: [
          {
            title: 'Full-stack application in Visual Studio.',
            titleStyle: 'header',
            content: 
            [<p>
              For this project, our group had to develop an investing assistant application in Visual Studio. 
              The application takes user preferences, such as how risky they would like their portfolio to be, and builds a 10 year investment portfolio based on that information.
            </p>]
          },
          {
            title: 'Technology',
            titleStyle: 'body',
            content: [<p>
                The project was coded in Visual Studio and connects to an <b className="font-semibold">Access database</b>, which stores information about different kinds of stocks such as their expected return rate, riskiness value, and social equity.
                <b className="font-semibold">Visual Basic</b> code receives this data and uses Microsoft's <b className="font-semibold">Solver</b> function to determine the optimal allocation of money based on user preferences.


            </p>
            ],
          },
          {
            title: 'Source Code',
            titleStyle: 'body',
            content: [<p>The source code is available <a href="https://github.com/31Hemlock/VisualStudio" target="_blank" rel="noopener noreferrer" className="text-blue-300">here</a>.</p>],
          },
        ]
    };
    
    return (
        <TabContent {...tabContent} />
    )
}
 
export default VisualStudio;