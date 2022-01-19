import React from "react";
import './styles.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'

const   Header = () => {
    return (
        <div id="home" className="header section__padding">
            <div className="header-content">
                <h1 className="gradient-text">
                    Let's Building Something amazing with GPT-3 OpenAI
                </h1>

                <p>
                        Traveling and discoverd the news of technologie with us. Let's may the future together.
                </p>

                <div className="header-content__input">
                    <input type="email" placeholder="your best e-mail address" />
                    <button type="button">Get started</button>
                </div>

                <div className="header-content-people">
                    <img src = {people} alt="people" />
                    <p>
                        1.200 new users requested acess in last 24 hours.
                    </p>
                </div>     
            </div>
            <div className="header-image">
                    <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header;