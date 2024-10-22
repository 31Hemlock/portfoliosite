import React from 'react';
import { TabContent } from '../TabContent';
import { TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { CodeLink } from '@/data/CodeLink';
import { LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';

function Excel() {
    const coverVidUrl = new URL('../assets/img/excel.png', import.meta.url).href;

    const tabContent: TabContentData = {
        media: {
          type: 'image',
          src: coverVidUrl,
          alt: 'Excel',
          dims: {h: 1357, w: 594}
        },
        title: "Excel",
        content: 
        <>
          <ContentCard>
            <p className={`${mainHeaderClasses}`}>
                Excel macros and scripting.
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
                Attached to <LinkWrapper url={`${CodeLink}ExcelSheets`} text="this link"/> are some of my Excel spreadsheets that contain advanced formulas or macros.
            </p>
          </ContentCard>
          
        </>
    };
    
    return (
        <TabContent {...tabContent} />
    )
}
 
export default Excel;