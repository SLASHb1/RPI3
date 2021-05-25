import React from "react";
import '../css/styles.css';
import {Link} from "react-router-dom";
import useLanguage from "../hooks/Language";

function AboutSection() {
    const {t} = useLanguage();
    return (
        <section className="page-section bg-primary text-white mt-5" id="about">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">{t("landing.about")}</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"/>
                    <div className="divider-custom-icon"><i className="fas fa-star"/></div>
                    <div className="divider-custom-line"/>
                </div>
                <div className="row text-center">

                    <div className="col-lg-12"><p className="lead">{t("landing.description")}</p></div>
                </div>
                <div className="text-center mt-4">
                    <Link className="btn btn-xl btn-outline-light" to="/architects">
                        {t("landing.button")}
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
