import React, { Component } from 'react';
import { TabContent } from '@/TabContent';
import { Section, titleStyle } from '@/types/TabContentTypes';

function Home() {

    const HomeParagraph1 = (
        <div>
          <p>
            This website is a portfolio of my technological experience. 
            The bulk of my experience is in web development, but I also enjoy handling data with Python and working with databases like MongoDB and MySQL. 
            Please click through the links on the left and direct any questions or comments to 31Hemlock@gmail.com.
          </p>
        </div>
      );

    const homeSection1: Section = {
        title: "Home",
        titleStyle: "header",
        content: HomeParagraph1
    }      

    const homeSections = [homeSection1]

    // Populate the main page.
    return (
        <TabContent sections={homeSections}/>

    )
}
 
export default Home;

