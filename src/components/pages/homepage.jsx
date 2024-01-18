import React from 'react';
import NavigationMenu from "../navigation/navigation_menu";
import Skill from "../skills/skillset";
import './homepage_style.css';
import Carousel from "../carousel/carousel";
import ButtonBootStrap from "../Button/buttons";
import Header from "../Header/header";
import FooterComponent from "../Footer/footer";

function HomePage() {
    return (
        <div className="homepage-container">
            <Header/>
            <section id="section1" className="section">
                    <Skill/>
            </section>
            <section id="section2" className="section">
                <h2>nevim</h2>
                {<p>nevim</p>}
            </section>
            <section id="section3" className="section">
                <h2>nevim</h2>
                {<p>nevim</p>}
            </section>
            <NavigationMenu/>
            {<Carousel/>}
            <FooterComponent/>
        </div>
    );
}

export default HomePage;