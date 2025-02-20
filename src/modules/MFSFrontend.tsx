import { CoreTabContentData, TabContentData } from '@/types/TabContentTypes'
import { ContentCard } from '@/components/ContentCard'
import {
  mainHeaderClasses,
  divider,
  paragraphClasses,
  leftMainHeaderClasses,
} from '@/types/TabContentTypes'
import { IntraSiteLinkWrapper, LinkWrapper } from '@/components/LinkWrapper'
import { SB } from '@/components/utils/SB'
import mfsFrontendVideo from '../assets/vid/mfs_frontend.mp4'
import mfsFrontendLQVideo from '../assets/vid/lq/mfs_frontend.mp4'
import mfsFrontendPoster from '../assets/vid/poster/mfs_frontend.webp'

export const MFSFrontendCoreTabContent: CoreTabContentData = {
  media: {
    id: 'mfs-frontend',
    type: 'video',
    src: mfsFrontendVideo,
    lqsrc: mfsFrontendLQVideo,
    poster: mfsFrontendPoster,
    alt: 'Flow',
    dims: { h: 1920, w: 1000 },
  },
  title: 'MyFavoriteSport Art Competition',
  subtitle: 'An art competition for children all around the world.',
  link: 'myfavoritesport-art-competition',
}

export const MFSFrontendTabContent: TabContentData = {
  ...MFSFrontendCoreTabContent,
  content: (
    <>
      <ContentCard>
        <p className={`${mainHeaderClasses}`}>
          {MFSFrontendCoreTabContent.subtitle}
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
          I was tasked with leading the development of an application to host a
          global art competition administered by the{' '}
          <LinkWrapper
            url="https://www.icaf.org"
            text="International Child Art Foundation"
          />
          . This page demonstrates the work done on the frontend of this
          application. To learn more about how our team built the backend and
          API, click{' '}
          <IntraSiteLinkWrapper
            urlSuffix="serverless-backend-api"
            text="here"
          />
          .
        </p>
        <p className={`${paragraphClasses}`}>
          I was lucky to be working with a great team of volunteers, including a
          team of designers who carefully crafted the aesthetic image of the
          site, in addition to ensuring that up-to-date UX practices were used
          at all times.
        </p>
        <p className={`${leftMainHeaderClasses}`}>Methodology</p>
        {divider}
        <p className={`${paragraphClasses}`}>
          The development team would have a Zoom meeting with the design team
          once every two weeks. During this meeting, the design team would
          describe how the site had been envisioned, and the development team
          would inquire, consider, or request modifications to these plans.
        </p>
        <p className={`${paragraphClasses}`}>
          Once designs were finalized, I would assign the designs to be
          implemented by an individual developer, with additional instructions
          about how to e.g. handle particularly challenging designs or what data
          structures to use for API-returned content. Developers were then asked
          to submit Pull Requests to our GitHub repository with new changes, for
          which I would provide feedback via email or call.
        </p>
        <p className={`${paragraphClasses}`}>
          When challenges arose in implementing these designs, I would be
          responsible for answering developer questions, contacting the design
          team to request changes, or working through the specific development
          issue myself.
        </p>
        <p className={`${leftMainHeaderClasses}`}>Technology</p>
        {divider}
        <p className={`${paragraphClasses}`}>
          MyFavoriteSport is built with <SB>Next.js</SB>, <SB>TailwindCSS</SB>,
          and <SB>Typescript</SB>. It uses client-side rendering and is compiled
          with <SB>GitHub Actions</SB> before being hosted on{' '}
          <SB>AWS Amplify</SB>.
        </p>
      </ContentCard>
      <ContentCard>
        <p className={`${leftMainHeaderClasses}`}>Source Code</p>
        {divider}
        <p className={`${paragraphClasses}`}>
          The source code is available{' '}
          <LinkWrapper
            url={`https://github.com/international-child-art-foundation/arts-olympiad`}
            text="here"
          />
          .
        </p>
      </ContentCard>
    </>
  ),
}
