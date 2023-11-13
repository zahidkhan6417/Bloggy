import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import "../Styles/Footer/footer.css"
import { IconBrandGithub, IconBrandLinkedin, IconBrandX,IconBrandFacebook } from "@tabler/icons-react";


function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="column">
                        <h4 className="contact">Follow us</h4>
                        <ul className="social-icons">
                            <li>
                                <a href="#">
                                    {/* <FontAwesomeIcon icon={faFacebook} /> */}
                                    {/* <IconBrandFacebook width={30} height={30} />0 */}
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {/* <FontAwesomeIcon icon={faTwitter} /> */}
                                    <IconBrandX width={30} height={30} />

                                </a>
                            </li>
                            <li>
                                <a href="instagram.com">
                                    {/* <FontAwesomeIcon icon={faInstagram} /> */}
                                    <IconBrandLinkedin width={30} height={30} />

                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {/* <FontAwesomeIcon icon={faLinkedin} /> */}
                                    <IconBrandGithub width={30} height={30} />

                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="column2">
                        <h4 className="contact">Contact us</h4>
                        <ul className="contact-info">
                            <li>
                                {/* <i className="fas fa-map-marker-alt"></i> */}
                                <span>Viman Nagar, Pune</span>
                            </li>
                            <li>
                                {/* <i className="fas fa-phone"></i> */}
                                <span>(+91) 9097*****5</span>
                            </li>
                            <li>
                                {/* <i className="fas fa-envelope"></i> */}
                                <span>bloggy@gmmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="column3">
                        <h4 className="contact">About us</h4>
                        <p className="about">
                        Bloggy is a platform where users can share their thoughts, experiences, and expertise through written content. 
                        Explore a diverse range of blog posts, create your own, and engage with a community of writers and readers.
                        </p>
                    </div>
                </div>
                <hr />
            </div>
        </footer>
    );
}

export default Footer;