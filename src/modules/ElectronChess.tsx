import React from 'react';
import { TabContent } from '../TabContent';
import { TabContentData } from '@/types/TabContentTypes';

function ElectronChess() {
    const coverVidUrl = new URL('../assets/vid/chess_analytics.mp4', import.meta.url).href;

    const tabContent: TabContentData = {
        media: {
          type: 'video',
          src: coverVidUrl,
          alt: 'Chess analytics video',
        },
        title: "Chess Analytics",
        sections: [
          {
            title: 'View analytics about your style of play.',
            titleStyle: 'header',
            content: 
            [<p>
              <i>Chess Analytics</i> is an <b className="font-medium">Electron</b>-based application that accepts a Lichess username, analyzes all of the games on the account, and displays the analysis through the libraries HighCharts and Chessground. 
              Each move is analyzed by Stockfish and uploaded to MongoDB. 
              I use this data to give interesting information about the games to the user, such as the percentage of games they won when they castled kingside compared to queenside.
            </p>, 
            <p>
              While I use <b className="font-medium">JavaScript</b> to display all frontend information, the backend analysis portion is written in <b className="font-medium">Python</b> - I analyze each move from the rated games on the account, then send the data to a MongoDB database. 
              From the database, <b className="font-medium">HighCharts</b> and <b className="font-medium">Chessground</b> are fed data to create charts and board states.
            </p>],
          },
          {
            title: 'Source Code',
            titleStyle: 'body',
            content: [<p>The source code is available <a href="https://github.com/31Hemlock/ChessAnalytics" target="_blank" rel="noopener noreferrer" className="text-blue-300">here</a>.</p>],
          },
        ]
    };
    
    return (
        <TabContent {...tabContent} />
    )
}
 
export default ElectronChess;