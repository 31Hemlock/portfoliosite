import { TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { CodeLink } from '@/data/CodeLink';
import { LinkWrapper } from '@/components/LinkWrapper';
import { CoreTabContentData } from '@/types/TabContentTypes';

const coverVidUrl = new URL('../assets/img/excel.png', import.meta.url).href;

export const ExcelCoreTabContent: CoreTabContentData = {
  media: {
    type: 'image',
    src: coverVidUrl,
    alt: 'Excel',
    dims: {h: 1357, w: 594}
  },
  title: "Excel",
  link: "excel-formulas",
  subtitle: "Excel macros and scripting."
}

export const ExcelTabContent: TabContentData = {
    ...ExcelCoreTabContent,
    content: 
    <>
      <ContentCard>
        <p className={`${mainHeaderClasses}`}>
          {ExcelCoreTabContent.subtitle}
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
            Attached to <LinkWrapper url={`${CodeLink}ExcelSheets`} text="this link"/> are some of my Excel spreadsheets that contain advanced formulas or macros.
        </p>
      </ContentCard>
      
    </>
};
