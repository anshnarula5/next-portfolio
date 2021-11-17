import React from 'react'
import Skill from '../components/Skill';
import js from "../img/javascript.svg";
import {nodejs} from "../img/nodejs.svg";
import {express} from "../img/express.svg";
import {mongodb} from "../img/mongodb.svg";
import {html5} from "../img/html5.png";
import {css3} from "../img/css-3.png";
import {sass} from "../img/sass.svg";
import {materialui} from "../img/materialui.svg";
import {redux1} from "../img/redux1.svg";
import {bootstrap} from "../img/bootstrap.svg";
import {tailwindcss} from "../img/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg";
import {bulma} from "../img/bulma-seeklogo.com.svg";
import {ejs} from "../img/ejs.svg";
import {git} from "../img/git.svg";
import {github} from "../img/github.svg";
import {heroku} from "../img/heroku.png";
import {net} from "../img/net.svg";
import {json} from "../img/Papirus-Team-Papirus-Mimetypes-App-json.svg";
import {axios} from "../img/axios.svg";
import {jwt} from "../img/jwt-3.svg";
import {chartjs} from "../img/chartjs.svg";
import {postman} from "../img/postman.png";

const Tech = () => {
    return (
        <section id="tech">
                <div class="row text-center ">
                    <div class="col-md-7 order-md-1 px-3">
                        <h1 class="text-center display-4 my-5">My Tech Stack</h1>
                    <div class="stacks row ">
                        <Skill name="Javascript" img={js}/>
                            
                        </div>
                    </div>
                    
                    {/* <Image src="display/2.svg" alt="" class="col-md-5 order-md-12" /> */}

                </div>
            </section>
    )
}

export default Tech
