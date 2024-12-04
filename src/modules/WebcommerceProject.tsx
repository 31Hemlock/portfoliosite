import { CoreTabContentData, TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { CodeLink } from '@/data/CodeLink';
import { LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';
import webcommerceProjectVideo from "../assets/vid/webcommerce_project.mp4";
import webcommerceProjectLQVideo from "../assets/vid/lq/webcommerce_project.mp4";
import webcommerceProjectPoster from "../assets/vid/poster/webcommerce_project.webp";

export const WebcommerceProjectCoreTabContent: CoreTabContentData = {
  media: {
    id: 'webcommerce-project',
    type: 'video',
    src: webcommerceProjectVideo,
    lqsrc: webcommerceProjectLQVideo,
    poster: webcommerceProjectPoster,
    alt: 'Webcommerce Project',
    dims: {h: 1920, w: 1080},
  },
  title: "Webcommerce Project",
  subtitle: "Buy and rent games over the internet.",
  link: "webcommerce-project",
}

export const WebcommerceProjectTabContent: TabContentData = {
    ...WebcommerceProjectCoreTabContent,
    content: 
    <>
      <ContentCard>
        <p className={`${mainHeaderClasses}`}>
          {WebcommerceProjectCoreTabContent.subtitle}
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
            In college I worked on a three person group project to create an e-commerce website complete with <SB>PHP</SB> scripting and an <SB>SQL</SB> backend. 
            My personal contributions to the project are shown in the video. 
            The website allows users to log in, find games to purchase or rent, and order them. 
            It maintains their cart and purchase history in the SQL database, and also allows admins to edit game information natively without touching SQL code. 
            Each of the forms has error-checking and submits to the database.
        </p>
      </ContentCard>
      <ContentCard>
        <p className={`${leftMainHeaderClasses}`}>
          Source Code
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
        The source code is available <LinkWrapper url={`${CodeLink}WebcommerceProject`} text="here"/>.
        </p>
      </ContentCard>
      
    </>
};
