import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (  
        <>
            <div className="container-foot">
                <div className="elements">
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
                <p>©private limited</p>
                <div className='Link-foot'>
                    <Link className='Link-foot-1' to={"/privacy"}>Privacy</Link>
                    <Link className='Link-foot-1' to={"/turms"}>Turms</Link>
                </div>
            </div>

        </>
    );
}

export default Footer;