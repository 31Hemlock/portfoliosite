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
        sections: [
          {
            title: 'Main Title',
            titleStyle: 'header',
            content: <p>This is the main content with <b>bold text</b> and <a href="#">links</a>.</p>,
          },
          {
            title: 'Secondary Section',
            titleStyle: 'body',
            content: <p>This is another section with different styling.</p>,
          },
        ],
        sourceCode: 'const example = "This is some sample code";',
    };
    
    return (
        <TabContent {...tabContent} />
    )
}
 
export default ElectronChess;