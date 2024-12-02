import { CoreTabContentData, TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { CodeLink } from '@/data/CodeLink';
import { LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';
import { FunctionWrapper } from '@/components/FunctionWrapper';
import pyDataManipulationImg from "../assets/img/py_data_manipulation.png";

export const PyDataManipulationCoreTabContent: CoreTabContentData = {
  media: {
    type: 'image',
    src: pyDataManipulationImg,
    alt: 'Code to populate weather data',
  },
  title: "Python Data Manipulation",
  subtitle: "Obtain detailed hourly weather data for NOVA.",
  link: "python-data-manipulation", 
}

export const PyDataManipulationTabContent: TabContentData = {
    ...PyDataManipulationCoreTabContent,
    content: 
    <>
      <ContentCard>
        <p className={`${mainHeaderClasses}`}>
            {PyDataManipulationCoreTabContent.subtitle}
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
            In order to utilize machine learning to find out when it will rain in NOVA, first I needed to gather years of weather data with as many attributes as possible so I could investigate which attributes contributed the most accuracy to the machine learning model.
            While looking for data online, I found that it was impossible to find one source with a long history of weather data, a ton of attributes, and live hourly updates.
            Due to this, I gathered my historical weather data from meteorological observational database MADIS and my daily data from <LinkWrapper url="https://www.wunderground.com/" text="Wunderground"/>.
            Each of these sources gives me data for the Reagan National Airport.
        </p>
        <p className={`${leftMainHeaderClasses}`}>
            Technology
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
            I requested access to the <LinkWrapper url="https://madis-data.ncep.noaa.gov/madis_api.shtml" text="MADIS API"/> via email and was granted authorization. 
            I then retrieved data from 2014 to 2019 in XML format and used the script <FunctionWrapper url={`${CodeLink}NovaRainBot/blob/master/GetRecentWeather/MadisXMLToPandas%20Daily.py`} text="MadisXMLToPandas Daily"/> to translate this data into a <SB>pandas</SB> dataframe and save it to a file.
        </p>
        <p className={`${paragraphClasses}`}>
        For the daily data, I scraped Wunderground's website with Firefox driven by <LinkWrapper url="https://www.selenium.dev/documentation/webdriver/" text="Selenium WebDriver"/>.
        The script that does this, <FunctionWrapper url={`${CodeLink}NovaRainBot/blob/master/getWeatherFromDay.py`} text="Get Weather From Day"/>, gets called repeatedly by the script <FunctionWrapper url={`${CodeLink}NovaRainBot/blob/master/getAllRecentDates.py`} text="Get All Recent Dates"/> until the main data file, <i>WeatherData.csv</i>, is up to date.
        This script runs once a day just before 12:00 AM on a <LinkWrapper url="https://www.raspberrypi.com/" text="Raspberry Pi"/> to gather the data required to make a prediction.
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
