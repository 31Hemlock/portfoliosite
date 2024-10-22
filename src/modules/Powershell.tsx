import React from 'react';
import { TabContent } from '../TabContent';
import { TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { CodeLink } from '@/data/CodeLink';
import { LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';

function Powershell() {
    const coverVidUrl = new URL('../assets/vid/powershell.mp4', import.meta.url).href;

    const tabContent: TabContentData = {
        media: {
          type: 'video',
          src: coverVidUrl,
          alt: 'Powershell',
          dims: {h: 1920, w:1080}
        },
        title: "Powershell Downloader Script",
        content: 
        <>
          <ContentCard>
            <p className={`${mainHeaderClasses}`}>
                Download audio files from YouTube.
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
                This script downloads audio files from YouTube using <SB>youtube-dl</SB> and <SB>ffmpeg</SB>, renames them, and places them under my music directory in the proper folder.
            </p>
          </ContentCard>
          <ContentCard>
            <p className={`${leftMainHeaderClasses}`}>
              Source Code
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
            The source code is available <LinkWrapper url={`${CodeLink}DLYoutubeMP3`} text="here"/>.
            </p>
          </ContentCard>
          
        </>
    };
    
    return (
        <TabContent {...tabContent} />
    )
}
 
export default Powershell;