import React from 'react';
import { TabContent } from '../TabContent';
import { TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, subheaderDivider, thinDivider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { CodeLink } from '@/data/CodeLink';
import { IntraSiteLinkWrapper, LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';
import { Link } from 'react-router-dom';

function ICAFFrontend() {
    const coverVidUrl = new URL('../assets/vid/icaf_frontend.mp4', import.meta.url).href;

    const tabContent: TabContentData = {
        media: {
          type: 'video',
          src: coverVidUrl,
          alt: 'Flow',
          dims: {h: 1020, w: 1000}
        },
        title: "ICAF Frontend Redesign",
        content: 
        <>
          <ContentCard>
            <p className={`${mainHeaderClasses}`}>
              A new look for icaf.org.
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
              Shortly after starting to volunteer with ICAF, I was assigned the task of implementing a new frontend design to make <LinkWrapper url={`https://www.icaf.org`} text="the ICAF website"/> fully responsive across all screen sizes.
            </p>
            <p className={`${paragraphClasses}`}>
              In addition to making the website responsive, I drastically reduced image sizes (using command-line tools like <LinkWrapper url={`https://www.ffmpeg.org/`} text="ffmpeg"/> and <LinkWrapper url={`https://imagemagick.org/index.php`} text="Imagemagick"/>) and prevented the preloading of videos upon page load, 
              drastically reducing load times and total data transferred. This is particularly significant in regions with slower internet speeds, especially considering the global reach of the organization.
            </p>
            <p className={`${leftMainHeaderClasses}`}>
              Technology
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
            To make <LinkWrapper url={`https://www.icaf.org`} text="Icaf.org" /> responsive, I worked with <SB>HTML</SB>, <SB>Javascript</SB>, and <SB>SCSS</SB>. 
            I also used <SB>FTP</SB> programs like <LinkWrapper url={`https://winscp.net/eng/index.php`} text="WinSCP"/> to push these changes to our server.
            </p>
          </ContentCard>
          <ContentCard>
            <p className={`${leftMainHeaderClasses}`}>
              Source Code
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
            The source code is available <LinkWrapper url={`https://github.com/international-child-art-foundation/arts-olympiad`} text="here"/>.
            </p>
          </ContentCard>
        </>
    };
    
    return (
        <TabContent {...tabContent} />
    )
}
 
export default ICAFFrontend;