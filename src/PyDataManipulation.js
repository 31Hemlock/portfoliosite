import React, { Component } from 'react';
import './PyDataManipulation.css';

import cover_img from './img/py_data_manipulation.png'




function PyDataManipulation(props) {
    // Populate the main page.
    return (
        <div className="mainContent">
            <h1 style={{padding:"3%", margin_bottom:"0px"}}> Python Data Manipulation </h1>
            <img src={cover_img} style={{width:"90%", height:'auto'}}></img>
            <div className="block">
                <h3 style={{paddingBottom:'2%', border_bottom: "10px solid black"}}>Obtain detailed hourly weather data for NOVA. </h3>
                <p style={{textAlign:"left", padding:'3%', paddingBottom:'2%'}}> In order to utilize machine learning to find out when it will rain in NOVA, first I needed to gather years of weather data with as many attributes as possible so I could investigate which attributes contributed the most accuracy to the machine learning model. While looking for data online, I found that it was impossible to find one source with a long history of weather data, a ton of attributes, and live hourly updates. Due to this, I gathered my historical weather data from meteorological observational database <i>MADIS</i> and my daily data from <i>Wunderground</i>. Each of these sources gives me data for the Reagan National Airport.
                </p>
                <h4>Technology</h4>
                <p>
                    I requested access to the <b>MADIS</b> API in an email and was given the lowest level of authorization (all I needed). I then retrieved data from 2014 to 2019 in XML format and used the script 'MadisXMLToPandas Daily.py' to translate this data into a <b>pandas</b> dataframe and save it to a file.

                </p>
                <p>
                    For the daily data, I scrape <i>Wunderground's</i> website with Firefox driven by <b>Selenium WebDriver</b>. The script that does this, <i>Get Weather From Day</i>, gets called repeatedly by the script <i>Get All Recent Dates</i> until the main data file, 'WeatherData.csv', is up to date. This script runs once a day just before 12:00 AM on a <b>Raspberry Pi</b> to gather the data required to make a prediction.</p>

                <h4 style={{marginBottom:'2%', border_bottom: "10px solid black"}}>Source Code </h4>
                <p style={{textAlign:"left", padding:'3%', paddingBottom:'2%'}}> The source code is available <a target="_blank" href="https://github.com/31Hemlock/NovaRainBot">here.</a></p>

            </div>
            
        </div>
    )
}
 
export default PyDataManipulation;

