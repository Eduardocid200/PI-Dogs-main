import React from 'react';
import {Link} from 'react-router-dom';
import './landingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LandingPage(){
    return (
        <div className='landing_page'>

                <div className="content">

                <p> Hello</p>
                <nav className='tittle1'>
                <ul>
                    <p> Humans</p>
                    <p> Dogs</p>
                </ul>
                </nav>
                </div>
           <h4 className='subtitle_landing'>Search breeds of dogs or create one</h4>

                <Link to = '/home'>
                    <button className='button_landing'>Welcome</button>
                </Link>
                <h2 className='Nombre'>Proyecto individual de Eduardo Cid </h2>
                <li>
                <a className='githublanding' href="https://github.com/Eduardocid200">
                  <i class="bi bi-github">Eduardo Cid</i>
                </a>
              </li>
        </div>
    )
}
