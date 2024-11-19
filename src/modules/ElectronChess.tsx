import { TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { CodeLink } from '@/data/CodeLink';
import { LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';
import { CoreTabContentData } from '@/types/TabContentTypes';

const coverVidUrl = new URL('../assets/vid/chess_analytics.mp4', import.meta.url).href;

export const ElectronChessCoreTabContent: CoreTabContentData = {
  media: {
    type: 'video',
    src: coverVidUrl,
    alt: 'Electron Chess Analytics',
    dims: {h: 1920, w: 1080}
  },
  title: "Electron Chess Analytics",
  subtitle: "View analytics about your style of play.",
  link: "electron-chess-analytics",
};

export const ElectronChessTabContent: TabContentData = {
  ...ElectronChessCoreTabContent,
  content: 
  <>
    <ContentCard>
      <p className={`${mainHeaderClasses}`}>
        {ElectronChessCoreTabContent.subtitle}
      </p>
      {divider}
      <p className={`${paragraphClasses}`}>
        Chess Analytics is an <SB>Electron</SB>-based application that accepts a <i>Lichess</i> username, analyzes all of the games on the account, and displays the analysis through the libraries <SB>HighCharts</SB> and <SB>Chessground</SB>. 
        Each move is analyzed by <SB>Stockfish</SB> and uploaded to <SB>MongoDB</SB>. 
        I use this data to give interesting information about the games to the user, such as the percentage of games they won when they castled kingside compared to queenside.
      </p>
      <p className={`${paragraphClasses}`}>
        While I use <SB>JavaScript</SB> to display all frontend information, the backend analysis portion is written in <SB>Python</SB> - I analyze each move from the rated games on the account, then send the data to a MongoDB database. 
        From the database, HighCharts and Chessground are fed data to create charts and board states.
      </p>
    </ContentCard>
    <ContentCard>
      <p className={`${leftMainHeaderClasses}`}>
        Source Code
      </p>
      {divider}
      <p className={`${paragraphClasses}`}>
      The source code is available <LinkWrapper url={`${CodeLink}ChessAnalytics`} text="here"/>.
      </p>
    </ContentCard>
  </>
};
