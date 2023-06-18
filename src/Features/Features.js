import React from 'react'
import "./Features.css"
import imgUrl from '../images/iphone.png';


const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="our-feature">
                    <div className="flex-item-7 business">
                        <h3>
                        Powerful Features for <br></br>
                        Your Business
                        </h3>
                        <div className="bus-col">
                            <div className="bus-col-1">
                                <div className="new-feat">
                                <i className="fa fa-archive" aria-hidden="true"></i>
                                <span>Easy Cart Features</span>

                                </div>

                            </div>
                            <div className="bus-col-1">
                                <div className="new-feat cool">
                                <i class="fa fa-caret-square-o-right" aria-hidden="true"></i>
                                <span>Sit amet consectetur adipisicing</span>

                                </div>

                            </div>
                            <div className="bus-col-1 space">
                                <div className="new-feat">
                                <i class="fa fa-calendar-minus-o" aria-hidden="true"></i>
                                <span>Ipsum Rerum Explicabo</span>

                                </div>

                            </div>
                            <div className="bus-col-1 space">
                                <div className="new-feat cool-3">
                                <i class="fa fa-paint-brush" aria-hidden="true"></i>
                                <span>Sit amet consectetur adipisicing</span>

                                </div>

                            </div>
                            <div className="bus-col-1 space">
                                <div className="new-feat">
                                <i class="fa fa-database" aria-hidden="true"></i>
                                <span>Easy Cart Features</span>

                                </div>

                            </div>
                            <div className="bus-col-1 space">
                                <div className="new-feat cool-2">
                                <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                                <span>Easy Cart Features</span>

                                </div>

                            </div>
                            <div className="bus-col-1 space">
                                <div className="new-feat">
                                <i class="fa fa-list-alt" aria-hidden="true"></i>
                                <span>Ipsum Rerum Explicabo</span>

                                </div>

                            </div>
                            <div className="bus-col-1 space">
                                <div className="new-feat bar-feat">
                                <i class="fa fa-signal" aria-hidden="true"></i>
                                <span>Easy Cart Features</span>

                                </div>

                            </div>
                           
                           

                        </div>

                    </div>

                  

                </div>

            </div>

            <div className="phone-wrap">
            <img src={imgUrl}/>
            </div>

            <div className="detailed-feature">
                <div className="container">
                    <div className="flex-item-6 extra-feat">
                        <h4>
                        Labore Sdio Lidui<br></br>Bonde Naruto
                        </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nostrum molestias doloremque quae delectus
                             odit minima corrupti blanditiis quo animi!
                        </p>
                        <a href="#" className="btn-get-started">Get Started</a>

                    </div>
                </div>
           </div>
            
        </section>
        ) 
    }
    
    export default Features

    