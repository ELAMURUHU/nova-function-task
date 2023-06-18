import React from 'react'
import "./Blogs.css"
import imgUrl from '../images/blog-1.jpg';
import imgUrl1 from '../images/blog-2.jpg';
import imgUrl2 from '../images/blog-3.jpg';
import imgUrl3 from '../images/blog-4.jpg';

const Blogs = () => {
    return (
     <section className="blog">
     <div className="container">
     <div className="blog-header">
         <h2>Recent Blog Posts</h2>

      </div>
         <div className="blog-cont">

            <div className="flex-item-3">
                 <div className="blogger-1">
                      <img src={imgUrl}/>
                 </div>

                 <div className="meta">
                 <span className="post-date">Tue, December 12</span>
                 <span className="post-author"> / Julia Parker</span>

                 </div>

                 <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>
                 <p className="post-para">Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium.
                      Asperiores eum ipsa est officiis. Modi qui magni est...</p>

                  <a href="#" className="forward">
                  <span>Read More</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>    
                 </a>    
            </div>


            <div className="flex-item-3">
                 <div className="blogger-1">
                      <img src={imgUrl1}/>
                 </div>

                 <div className="meta">
                 <span className="post-date">Fri, September 05</span>
                 <span className="post-author"> / Mario Douglas</span>

                 </div>

                 <h3 className="post-title">Et repellendus molestiae qui est sed omnis</h3>
                 <p className="post-para">Voluptatem nesciunt omnis libero autem tempora enim ut ipsam id. Odit quia ab eum assumenda. 
                     Quisquam omnis doloribus...
                 </p>

                  <a href="#" className="forward">
                  <span>Read More</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>    
                 </a>    
            </div>


            <div className="flex-item-3">
                 <div className="blogger-1">
                      <img src={imgUrl2}/>
                 </div>

                 <div className="meta">
                 <span className="post-date">Tue, July 27</span>
                 <span className="post-author"> / Lisa Hunter</span>

                 </div>

                 <h3 className="post-title">Quia assumenda est et veritati</h3>
                 <p className="post-para">Quia nam eaque omnis explicabo similique eum quaerat similique laboriosam. 
                    Quis omnis repellat sed quae consectetur magnam...</p>

                  <a href="#" className="forward">
                  <span>Read More</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>    
                 </a>    
            </div>


            <div className="flex-item-3">
                 <div className="blogger-1">
                      <img src={imgUrl3}/>
                 </div>

                 <div className="meta">
                 <span className="post-date">Tue, Sep 16</span>
                 <span className="post-author"> / Mario Douglas</span>

                 </div>

                 <h3 className="post-title">Pariatur quia facilis similique deleniti</h3>
                 <p className="post-para">Et consequatur eveniet nam voluptas commodi cumque ea est ex. Aut quis omnis sint ipsum 
                 earum quia eligendi...</p>

                  <a href="#" className="forward">
                  <span>Read More</span>
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>    
                 </a>    
            </div>
            

         </div>
     </div>

 </section>
        ) 
}

export default Blogs