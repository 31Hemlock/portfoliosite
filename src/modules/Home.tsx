import React from 'react';
import { TabContent } from '../TabContent';
import { TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';

function Home() {
    const tabContent: TabContentData = {
        content: 
        <>
          <ContentCard>
            <p className={`${mainHeaderClasses}`}>
              Welcome!
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
              This website is a portfolio of my technological experience. 
              The bulk of my experience is in web development, but I also enjoy handling data with Python and working with databases like MongoDB and MySQL. 
              Please click through the links in the menu and direct any questions or comments to 31Hemlock@gmail.com.
            </p>
          </ContentCard>
          
        </>
    };
    
    return (
        <TabContent {...tabContent} />
    )
}
 
export default Home;