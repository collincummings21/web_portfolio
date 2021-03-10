import React from 'react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I'm<br></br>
                    <span>Collin Cummings</span>
                </h1>
                <p className="h-sub-text">
                "Currently enrolled in in SUNY Cortland College studying Buisness Economics with a minor in computer application. Passionate about using new and upcoming technolgy to change the world for the better.
                </p>
                <div className="icons">
              
                   <Link rel="stylesheet" href="https://www.linkedin.com/in/collin-cummings-4b29151b7/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt" />
                    </Link>
                  </div>
            </header> 
        </div>
    )
}

 export default HomePage;