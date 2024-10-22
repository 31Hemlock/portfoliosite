import React from 'react';
import { TabContent } from '../TabContent';
import { TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses, sourceCodeClasses } from '@/types/TabContentTypes';
import { CodeLink } from '@/data/CodeLink';
import { LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';

function MyWebsite() {
    const tabContent: TabContentData = {
        title: "My Website",
        content: 
        <>
          <ContentCard>
            <p className={`${mainHeaderClasses}`}>
              A website to display my coding portfolio.
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
                I made this website to house all of my coding projects. It's built to be fast, simple, and easy to maintain.
            </p>
            <p className={`${leftMainHeaderClasses}`}>
                Technology
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
                My website is a <SB>React</SB> app, developed and built with <SB>Vite</SB>. It's coded in <SB>Typescript</SB> and uses <SB>Tailwind CSS</SB>.
            </p>

          </ContentCard>
          <ContentCard>
            <p className={`${sourceCodeClasses}`}>
              Source Code
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
                The source code is available <LinkWrapper url={`${CodeLink}portfoliosite`} text="here"/>.
            </p>
          </ContentCard>
        </>
    };
    return (
        <TabContent {...tabContent} />
    )
}
 
export default MyWebsite;