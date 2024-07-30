import React, { Component } from 'react';


// import cover_img from './assets/img/machine_learning.png'
import PyDataManipulation from './PyDataManipulation';

import { BrowserRouter as Router, Link, Route} from 'react-router-dom'





function MachineLearning() {
    // Populate the main page.
    return (
        <Router>

        <div className="mainContent">
            <h1 style={{padding:"3%", margin_bottom:"0px"}}> Machine Learning </h1>
            {/* <img src={cover_img} style={{width:"90%", height:'auto'}}></img> */}
            <div className="block">
                <h3>Predict whether it will rain in Northern Virginia. </h3>
                <p style={{marginBottom:'0px'}}> I feed the data I gather from <a href="python-data-manipulation">Python Data Manipulation</a> to a machine learning algorithm that I am still developing.</p>
                <p style={{marginBottom:'0px'}}> The machine learning algorithm is a binary classification model that was trained by my script <i>OverUnderSampling</i>, which utilizes the high-level <b>Keras</b> API through <b>Tensorflow</b>. I use a sequential model that outputs to a single-node sigmoid activation layer in order to make my binary ('yes it will rain' or 'no it will not rain') prediction. While developing the algorithm I noticed it had a tendency to predict the null hypothesis, so I oversampled and undersampled the dataset using <b>SMOTETomek</b> from <b>Imblearn</b> to create a balanced training set.</p>
                <p> When I finish tweaking the algorithm, I will be sending tweets from my Raspberry Pi to Twitter each morning with my prediction.</p>
                <h4>Source Code</h4>
                <p>The source code is available <a target="_blank" href="https://github.com/31Hemlock/NovaRainBot">here.</a></p>

            </div>
            
        </div>
        </Router>
    )
}
 
export default MachineLearning;

