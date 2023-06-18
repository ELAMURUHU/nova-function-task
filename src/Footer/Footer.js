import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="container">
                    <div className="last-contanier">

                        <div className="flex-item-5">
                            <p className="foo-logo">Nova</p>
                            <p className="foo-para">Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita
                                 valies darta donna mare fermentum iaculis eu non diam phasellus.
                            </p>
                            <div className="social-links">
                                <a href="#">
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="#">
                                     <i class="fa fa-facebook-official" aria-hidden="true"></i>
                                </a>
                                <a href="#">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                                <a href="#">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                            </div>

                        </div>


                        <div className="flex-item-2 footer-news">

                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <a href="#">Home</a>
                                </li>
                                <li>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <a href="#">About Us</a>
                                </li>
                                <li>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <a href="#">Services</a>
                                </li>
                                <li>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <a href="#">Terms of service</a>
                                </li>
                                <li>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <a href="#">Privacy policy</a>
                                </li>
                                
                            </ul>

                        </div>
                        <div className="flex-item-2 footer-news-1">

                        <h4>Our Services</h4>
                            <ul>
                                <li>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <a href="#">Web Design</a>
                                </li>
                                <li>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <a href="#">Web Development</a>
                                </li>
                                <li>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <a href="#">Skill Management</a>
                                </li>
                                <li>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <a href="#">Marketing</a>
                                </li>
                                <li>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <a href="#">Graphic Design</a>
                                </li>
                                
                            </ul>


                        </div>
                        <div className="flex-item-3 address">

                        <h4>Contact Us</h4>
                        <p>
                             A108 Adam Street <br></br>
                             New York, NY 535022<br></br>
                             United States 
                        </p>
                        <div className="phone">
                        <strong>Phone:</strong>
                        +1 5589 55488 55<br></br>
                        <strong>Email:</strong>
                        info@example.com
                        </div>

                        </div>

                    </div>
                </div>


            </div>

            <div className="footer-legal">
                <div className="container">
                <div className="copyright">
                <i class="fa fa-copyright" aria-hidden="true"></i> Copyright <strong><span>Nova</span></strong>. All Rights Reserved
                </div>

                <div className="credits">
                    <span>Designed by</span> <a href="#">BootstrapMade</a>
                </div>

                </div>


            </div>

        </footer>
        ) 
}

export default Footer