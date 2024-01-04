import React from 'react';
import NavigationMenu from "../navigation/navigation_menu";
import Skill from "../skills/skillset";
import './homepage_style.css';
import Carousel from "../carousel/carousel";
import ButtonBootStrap from "../Button/buttons";

function HomePage() {
    return (
        <div className="homepage-container">
            <section id="section1" className="section">
                <h2>Dovednosti</h2>
                {
                    <Skill/>
                }
            </section>
            <section id="section2" className="section">
                <h2>Sekce 2</h2>
                {<p>Sekce2</p>}
            </section>
            <section id="section3" className="section">
                <h2>Sekce 3</h2>
                {<p>Sekce3</p>}
            </section>
            <NavigationMenu/>
            {<Carousel/>}
            <div className="button-container">
                <ButtonBootStrap/>
            </div>
        </div>
    );
}

export default HomePage;