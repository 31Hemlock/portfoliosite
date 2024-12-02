import { CoreTabContentData, TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';
import icafFrontendVideo from "../assets/vid/icaf_frontend.mp4";
import icafFrontendPoster from "../assets/vid/poster/icaf_frontend.webp" 

export const ICAFFrontendCoreTabContent: CoreTabContentData = {
  media: {
    type: 'video',
    src: icafFrontendVideo,
    poster: icafFrontendPoster,
    alt: 'Flow',
    dims: {h: 1020, w: 1000}
  },
  title: "ICAF Frontend Redesign",
  subtitle: "A new look for icaf.org.",
  link: "icaf-responsive-design",
}

export const ICAFFrontendTabContent: TabContentData = {
    ...ICAFFrontendCoreTabContent,
    content: 
    <>
      <ContentCard>
        <p className={`${mainHeaderClasses}`}>
          {ICAFFrontendCoreTabContent.subtitle}
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
