import React from 'react';
import NavigationMenu from "../navigation/navigation_menu";
import Skill from "../skills/skillset";

function HomePage() {
    return (
        <div>
            <section id="section1">
                <h2>Dovednosti</h2>
                {
                    <Skill/>
                }
            </section>
            <section id="section2">
                <h2>Sekce 2</h2>
                {<p>Sekce2</p>}
            </section>
            <section id="section3">
                <h2>Sekce 3</h2>
                {<p>Sekce3</p>}
            </section>
            <NavigationMenu/>
        </div>
    );
}
export default HomePage;
