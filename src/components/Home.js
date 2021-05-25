import React from "react";
import '../css/styles.css';
import AboutSection from "./AboutSection";
import ArchitectOfTheDay from "./ArchitectOfTheDay";

function Home() {
    return (
        <div>
            <AboutSection/>
            <ArchitectOfTheDay/>
        </div>
    );
}

export default Home;
