import { TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { CodeLink } from '@/data/CodeLink';
import { LinkWrapper } from '@/components/LinkWrapper';
import { CoreTabContentData } from '@/types/TabContentTypes';
import powershellVideo from "../assets/vid/powershell.mp4";
import powershellPoster from "../assets/vid/poster/powershell.webp";

export const PowershelLCoreTabContent: CoreTabContentData = {
  media: {
    type: 'video',
    src: powershellVideo,
    poster: powershellPoster,
    alt: 'Powershell',
    dims: {h: 1920, w:1080}
  },
  title: "Powershell Downloader Script",
  subtitle: "Download audio files from YouTube.",
  link: "powershell",
}

export const PowershellTabContent: TabContentData = {
    ...PowershelLCoreTabContent,
    content: 
    <>
      <ContentCard>
        <p className={`${mainHeaderClasses}`}>
          {PowershelLCoreTabContent.subtitle}
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
          This script downloads audio files from YouTube using <LinkWrapper url="https://github.com/ytdl-org/youtube-dl" text="youtube-dl"/> and <LinkWrapper url="https://www.ffmpeg.org/" text="ffmpeg" />, renames them, and places them under my music directory in the proper folder.
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
