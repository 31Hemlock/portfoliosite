import React from 'react'
import { TabContent } from '../TabContent'
import { CoreTabContentData, TabContentData } from '@/types/TabContentTypes'
import { ContentCard } from '@/components/ContentCard'
import {
  mainHeaderClasses,
  secondaryHeaderClasses,
  divider,
  paragraphClasses,
  leftMainHeaderClasses,
} from '@/types/TabContentTypes'
import { CodeLink } from '@/data/CodeLink'
import { LinkWrapper } from '@/components/LinkWrapper'
import { SB } from '@/components/utils/SB'
import visualStudioVideo from '../assets/vid/visual_studio.mp4'
import visualStudioLQVideo from '../assets/vid/lq/visual_studio.mp4'
import visualStudioPoster from '../assets/vid/poster/visual_studio.webp'

export const VisualStudioCoreTabContent: CoreTabContentData = {
  media: {
    id: 'visual-studio',
    type: 'video',
    src: visualStudioVideo,
    lqsrc: visualStudioLQVideo,
    poster: visualStudioPoster,
    alt: 'Consulting project',
    dims: { h: 1920, w: 1080 },
  },
  title: 'InvestNMe Consulting Project',
  subtitle: 'Full-stack application in Visual Studio.',
  link: 'visual-studio',
}

export const VisualStudioTabContent: TabContentData = {
  ...VisualStudioCoreTabContent,
  content: (
    <>
      <ContentCard>
        <p className={`${mainHeaderClasses}`}>
          {VisualStudioCoreTabContent.subtitle}
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
          For this project, our group had to develop an investing assistant
          application in{' '}
          <LinkWrapper
            url="https://visualstudio.microsoft.com/#vs-section"
            text="Visual Studio"
          />
          . The application takes user preferences, such as how risky they would
          like their portfolio to be, and builds a 10 year investment portfolio
          based on that information.
        </p>

        <p className={`${leftMainHeaderClasses}`}>Technology</p>
        {divider}

        <p className={`${paragraphClasses}`}>
          The project was coded in{' '}
          <LinkWrapper
            url="https://visualstudio.microsoft.com/#vs-section"
            text="Visual Studio"
          />{' '}
          and connects to an{' '}
          <LinkWrapper
            url="https://www.microsoft.com/en-us/microsoft-365/access"
            text="Access"
          />{' '}
          database, which stores information about different kinds of stocks
          such as their expected return rate, riskiness value, and social
          equity. <SB>Visual Basic</SB> code receives this data and uses
          Microsoft's{' '}
          <LinkWrapper url="https://math.microsoft.com/en" text="Solver" />{' '}
          function to determine the optimal allocation of money based on user
          preferences.
        </p>
      </ContentCard>
      <ContentCard>
        <p className={`${leftMainHeaderClasses}`}>Source Code</p>
        {divider}
        <p className={`${paragraphClasses}`}>
          The source code is available{' '}
          <LinkWrapper
            url={`${CodeLink}DSSPortfolioOptimization`}
            text="here"
          />
          .
        </p>
      </ContentCard>
    </>
  ),
}
