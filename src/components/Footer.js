import React from "react";
import '../css/styles.css';

function Footer() {
    return (
        <footer className="footer text-center" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Alex Lapitsky</h4>
                        <img src="https://avatars.githubusercontent.com/u/44097249?v=4"
                             className="rounded-circle z-depth-0" alt="Alex" height="55" width="55"/>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/SLASHb1"><i
                            className="fab fa-fw fa-git"/></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://vk.com/kreket132"><i
                            className="fab fa-fw fa-vk"/></a>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Illia Kurbatskiy</h4>
                        <img src="https://sun9-46.userapi.com/impg/8O4jotYPONhE0WoYIvgqgAALDzKRcI4Wk01NCg/WnWPe4s5iYQ.jpg?size=736x920&quality=96&sign=530c875273ea68dc8eb41ff725156dab&type=album"
                             className="rounded-circle z-depth-0" alt="Illia" height="55" width="55"/>
                        <a className="btn btn-outline-light btn-social mx-1"
                           href="https://github.com/GrafGriffon"><i
                            className="fab fa-fw fa-git"/></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://vk.com/grafgriffon"><i
                            className="fab fa-fw fa-vk"/></a>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Igor Yanushkevich</h4>
                        <img src="https://sun9-5.userapi.com/impf/c855736/v855736659/139d1e/MSItt2-_7Lg.jpg?size=1214x2160&quality=96&sign=d41f25b565a6ab74815852a03387b081&type=album"
                             className="rounded-circle z-depth-0" alt="Igor" height="55" width="55"/>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/IharYsh"><i
                            className="fab fa-fw fa-git"/></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://vk.com/id377418062"><i
                            className="fab fa-fw fa-vk"/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
