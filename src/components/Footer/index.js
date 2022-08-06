import React from "react";
import linkedInImage from '../../assets/images/linked-in.png';
import gitHubImage from '../../assets/images/github.png'

function Footer() {
    return (
        <div>
        <ul>
        <li class="is-size-4">
            Phone: <a href="tel:385.321.6033">385-321-6033</a> <br />
        </li>
        <li class="is-size-4">
            Email: <a href="mailto:vatuvei.bryson@yahoo.com">vatuvei.bryson@yahoo.com</a>
        </li>    
        <li class="is-size-4">
            GitHub: <a href="https://github.com/Bvatuvei" target="_blank">
                <img className="nav-logo-image" src={gitHubImage} alt="" />
            </a>
        </li>
        <li class="is-size-4">
            LinkedIn: <a href="https://www.linkedin.com/in/bryson-vatuvei-935aa0100/" target="_blank">
                <img className="nav-logo-image" src={linkedInImage} alt="" />
            </a>
        </li>
    </ul>
    </div>
    )
}

export default Footer;