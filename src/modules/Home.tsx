import React, { Component } from 'react';

function Home(props) {

    // Populate the main page.
    return (
        <div className="mainContent">
            <div className="block">
                <h3 style={{marginBottom:'2%', border_bottom: "10px solid black"}}>Home </h3>
                <p style={{textAlign:"left", padding:'3%', paddingBottom:'2%'}}> This website is a portfolio of my technological experience. The bulk of my experience is in web development, but I also enjoy handling data with Python and working with databases like MongoDB and MySQL. Please click through the links on the left and direct any questions or comments to 31Hemlock@gmail.com.</p>

            </div>
        </div>
    )
}
 
export default Home;

