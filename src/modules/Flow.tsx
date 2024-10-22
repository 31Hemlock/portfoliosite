import React from 'react';
import { TabContent } from '../TabContent';
import { TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { CodeLink } from '@/data/CodeLink';
import { LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';

function Flow() {
    const coverVidUrl = new URL('../assets/vid/flow.mp4', import.meta.url).href;

    const tabContent: TabContentData = {
        media: {
          type: 'video',
          src: coverVidUrl,
          alt: 'Flow',
          dims: {h: 1920, w: 1080}
        },
        title: "Flow",
        content: 
        <>
          <ContentCard>
            <p className={`${mainHeaderClasses}`}>
              Eliminate worry, strengthen focus.
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
                Flow is a productivity website aimed at keeping track of tasks within categories. 
                A user can create a new task by clicking the "Create new task" button and filling out information within the modal that appears. 
                Most time using the program is spent in the Main category which I use to contain all of my short-term goals.
            </p>
            <p className={`${paragraphClasses}`}>
                Each flow task contains four values: title, preferred completion date, deadline, and notes.
                While the user can edit the notes on the main page by scrolling down in a task window, there's also a detail view that gives the user more space to write out their thoughts.
                In this view, the user can click the button on the bottom of the view to download the task title and notes in a text file.
            </p>
            <p className={`${leftMainHeaderClasses}`}>
                Technology
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
                Flow is a simple application powered by <SB>JavaScript</SB> and <SB>jQuery</SB>. Its <SB>CSS</SB> is augmented by <SB>Bootstrap</SB>. Rather than using a database, it stores user information in a browser cookie.
            </p>
          </ContentCard>
          <ContentCard>
            <p className={`${leftMainHeaderClasses}`}>
              Source Code
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
            The source code is available <LinkWrapper url={`${CodeLink}Flow`} text="here"/>.
            </p>
          </ContentCard>
          
        </>
    };
    
    return (
        <TabContent {...tabContent} />
    )
}
 
export default Flow;