import { TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';
import { ComponentPreview } from '@/components/ComponentPreview';
import { ICAFFrontendCoreTabContent } from './ICAFFrontend';
import MFSBackend from './MFSBackend';
import { MFSFrontendCoreTabContent } from './MFSFrontend';
import { PuzzlrCoreTabContent } from './Puzzlr';
import { MFSBackendCoreTabContent } from './MFSBackend';

export const HomeTabContent: TabContentData = {
    content: 
    <>
      <ContentCard>
        <p className={`${mainHeaderClasses}`}>
          Welcome!
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
          This website is a portfolio of my technological experience. 
          The bulk of my experience is in web development, but I also enjoy handling data with Python and working with databases like MongoDB and MySQL. 
          Please click through the links in the menu and direct any questions or comments to 31Hemlock@gmail.com.
        </p>
      </ContentCard>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
        <ComponentPreview {...MFSFrontendCoreTabContent}/>
        <ComponentPreview {...MFSBackendCoreTabContent}/>
        <ComponentPreview {...PuzzlrCoreTabContent}/>
        <ComponentPreview {...ICAFFrontendCoreTabContent}/>
      </div>
      
    </>
};