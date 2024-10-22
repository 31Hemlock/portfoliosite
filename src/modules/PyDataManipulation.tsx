import React from 'react';
import { TabContent } from '../TabContent';
import { TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { CodeLink } from '@/data/CodeLink';
import { LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';

function PyDataManipulation() {
    const coverImgUrl = new URL('../assets/img/py_data_manipulation.png', import.meta.url).href;

    const tabContent: TabContentData = {
        media: {
          type: 'image',
          src: coverImgUrl,
          alt: 'Code to populate weather data',
        },
        title: "Python Data Manipulation",
        content: 
        <>
          <ContentCard>
            <p className={`${mainHeaderClasses}`}>
                Obtain detailed hourly weather data for NOVA.
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
                In order to utilize machine learning to find out when it will rain in NOVA, first I needed to gather years of weather data with as many attributes as possible so I could investigate which attributes contributed the most accuracy to the machine learning model.
                While looking for data online, I found that it was impossible to find one source with a long history of weather data, a ton of attributes, and live hourly updates.
                Due to this, I gathered my historical weather data from meteorological observational database MADIS and my daily data from Wunderground.
                Each of these sources gives me data for the Reagan National Airport.
            </p>
            <p className={`${leftMainHeaderClasses}`}>
                Technology
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
                I requested access to the <SB>MADIS</SB> API via email and was granted authorization. 
                I then retrieved data from 2014 to 2019 in XML format and used the script 'MadisXMLToPandas Daily.py' to translate this data into a <SB>pandas</SB> dataframe and save it to a file.
            </p>
            <p className={`${paragraphClasses}`}>
            For the daily data, I scraped Wunderground's website with Firefox driven by <SB>Selenium WebDriver</SB>.
            The script that does this, <i>Get Weather From Day</i>, gets called repeatedly by the script <i>Get All Recent Dates</i> until the main data file, 'WeatherData.csv', is up to date.
            This script runs once a day just before 12:00 AM on a <SB>Raspberry Pi</SB> to gather the data required to make a prediction.
            </p>
          </ContentCard>
          <ContentCard>
            <p className={`${leftMainHeaderClasses}`}>
              Source Code
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
            The source code is available <LinkWrapper url={`${CodeLink}NovaRainBot`} text="here"/>.
            </p>
          </ContentCard>
          
        </>
    };
    
    return (
        <TabContent {...tabContent} />
    )
}
 
export default PyDataManipulation;