import React from 'react'
import "./Banner.css"

const Banner = () => {
    return (
      <section className="banner">
      <div className="container">
          <div className="flex-item-4">
              <h1 className="focus">Focus On What Matters</h1>
              <p className="fc-def">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis cum recusandae eum laboriosam voluptatem 
                  repudiandae odio, vel exercitationem officiis provident minima.</p>
              <div className="start">
                <a className="button">Get Started</a>
                <a href="#" className="watch-video">
                <i class="fa fa-play-circle-o" aria-hidden="true"></i>
                 <span>Watch Video</span> 
                 
              </a>    
              </div>    


          </div>

      </div>

    </section>
        
          ) 
    }
    
    export default Banner