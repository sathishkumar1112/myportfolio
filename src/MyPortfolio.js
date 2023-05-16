import React from 'react';
const MyPortfolio = () => {
    return(
        <body className="theme-red">
  
  
  <div className="btn-back_to_top">
    <span className="ti-arrow-up"></span>
  </div>
  
  
  <div className="config">
    <div className="template-config">
      
      <div className="d-block">
        <button className="btn btn-fab btn-sm" id="sideel" title="Settings"><span className="ti-settings"></span></button>
      </div>
      
      <div className="d-block">
        <a href="https://macodeid.com/projects/virtual-folio/" className="btn btn-fab btn-sm" title="Get this template" data-toggle="tooltip" data-placement="left"><span className="ti-download"></span></a>
      </div>
      
      <div className="d-block">
        <a href="#" className="btn btn-fab btn-sm" title="Help" data-toggle="tooltip" data-placement="left"><span className="ti-help"></span></a>
      </div>
    </div>
    <div className="set-menu">
      <p>Select Color</p>
      <div className="color-bar" data-toggle="selected">
        <span className="color-item bg-theme-red selected" data-className="theme-red"></span>
        <span className="color-item bg-theme-blue" data-className="theme-blue"></span>
        <span className="color-item bg-theme-green" data-className="theme-green"></span>
        <span className="color-item bg-theme-orange" data-className="theme-orange"></span>
        <span className="color-item bg-theme-purple" data-className="theme-purple"></span>
      </div>
      <select className="custom-select d-block my-2" id="change-page">
        <option value="">Choose Page</option>
        <option value="index">Topbar</option>
        <option value="blog-topbar">Blog (Topbar)</option>
        <option value="index-2">Minibar</option>
        <option value="blog-minibar">Blog (Minibar)</option>
      </select>
    </div>
  </div>
  
  <div className="vg-page page-home" id="home" style={{"background-image": "url(../assets/img/bg_image_1.jpg"}}>
    
    <div className="navbar navbar-expand-lg navbar-dark sticky" data-offset="500">
      <div className="container">
        <a href="" className="navbar-brand">V-Folio</a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#main-navbar" aria-expanded="true">
          <span className="ti-menu"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="#home" className="nav-link" data-animate="scrolling">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" data-animate="scrolling">About</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link" data-animate="scrolling">Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="#blog" className="nav-link" data-animate="scrolling">Blog</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" data-animate="scrolling">Contact</a>
            </li>
          </ul>
          <ul className="nav ml-auto">
            <li className="nav-item">
              <button className="btn btn-fab btn-theme no-shadow">En</button>
            </li>
          </ul>
        </div>
      </div>
    </div> 
    
    <div className="caption-header text-center wow zoomInDown">
      <h5 className="fw-normal">Welcome</h5>
      <h1 className="fw-light mb-4">I'm <b className="fg-theme">Stephen</b> Doe</h1>
      <div className="badge">UI/UX & Web Designer</div>
    </div>
    <div className="floating-button"><span className="ti-mouse"></span></div>
  </div>
  
  <div className="vg-page page-about" id="about">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-4 py-3">
          <div className="img-place wow fadeInUp">
            <img src="../assets/img/person.jpg" alt=""/>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1 wow fadeInRight">
          <h1 className="fw-light">Stephen Doe</h1>
          <h5 className="fg-theme mb-3">UI/UX & Web Designer</h5>
          <p className="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form but the majority have suffered alteration in some</p>
          <ul className="theme-list">
            <li><b>From:</b> Texas, US</li>
            <li><b>Lives In:</b> Texas, US</li>
            <li><b>Age:</b> 25</li>
            <li><b>Gender:</b> Male</li>
          </ul>
          <button className="btn btn-theme-outline">Download CV</button>
        </div>
      </div>
    </div>
    <div className="container py-5">
      <h1 className="text-center fw-normal wow fadeIn">My Skills</h1>
      <div className="row py-3">
        <div className="col-md-6">
          <div className="px-lg-3">
            <h4 className="wow fadeInUp">Coding skills</h4>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">JavaScript</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{"width": "86%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">86%</div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">PHP</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style= {{"width": "80%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">HTML + CSS</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{"width": "100%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">100%</div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">Phyton</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{"width": "90%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">90%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="px-lg-3">
            <h4 className="wow fadeInUp">Design Skills</h4>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">UI / UX Design</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{"width": "92%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">92%</div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">Web Design</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{"width": "99%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">99%</div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">Logo Design</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{"width": "79%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">79%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-6 wow fadeInRight">
          <h2 className="fw-normal">Education</h2>
          <ul className="timeline mt-4 pr-md-5">
            <li>
              <div className="title">2010</div>
              <div className="details">
                <h5>Specialize of course</h5>
                <small className="fg-theme">University of Study</small>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
              </div>
            </li>
            <li>
              <div className="title">2009</div>
              <div className="details">
                <h5>Specialize of course</h5>
                <small className="fg-theme">University of Study</small>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
              </div>
            </li>
            <li>
              <div className="title">2008</div>
              <div className="details">
                <h5>Specialize of course</h5>
                <small className="fg-theme">University of Study</small>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms">
          <h2 className="fw-normal">Experience</h2>
          <ul className="timeline mt-4 pr-md-5">
            <li>
              <div className="title">2017 - Current</div>
              <div className="details">
                <h5>Specialize of course</h5>
                <small className="fg-theme">University of Study</small>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
              </div>
            </li>
            <li>
              <div className="title">2014</div>
              <div className="details">
                <h5>Specialize of course</h5>
                <small className="fg-theme">University of Study</small>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
              </div>
            </li>
            <li>
              <div className="title">2011</div>
              <div className="details">
                <h5>Specialize of course</h5>
                <small className="fg-theme">University of Study</small>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <div className="vg-page page-service">
    <div className="container">
      <div className="text-center wow fadeInUp">
        <div className="badge badge-subhead">Service</div>
      </div>
      <h1 className="fw-normal text-center wow fadeInUp">What can i do?</h1>
      <div className="row mt-5">
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card card-service wow fadeInUp">
            <div className="icon">
              <span className="ti-paint-bucket"></span>
            </div>
            <div className="caption">
              <h4 className="fg-theme">Web Design</h4>
              <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card card-service wow fadeInUp">
            <div className="icon">
              <span className="ti-search"></span>
            </div>
            <div className="caption">
              <h4 className="fg-theme">SEO</h4>
              <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card card-service wow fadeInUp">
            <div className="icon">
              <span className="ti-vector"></span>
            </div>
            <div className="caption">
              <h4 className="fg-theme">UI/UX Design</h4>
              <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card card-service wow fadeInUp">
            <div className="icon">
              <span className="ti-desktop"></span>
            </div>
            <div className="caption">
              <h4 className="fg-theme">Web Development</h4>
              <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="vg-page page-funfact" style={{"backgroundImage": "url(../assets/img/bg_banner.jpg)"}}>
    <div className="container">
      <div className="row section-counter">
        <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
          <h1 className="number" data-number="768">768</h1>
          <span>Clients</span>
        </div>
        <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
          <h1 className="number" data-number="230">230</h1>
          <span>Project Compleate</span>
        </div>
        <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
          <h1 className="number" data-number="97">97</h1>
          <span>Project Ongoing</span>
        </div>
        <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
          <h1 className="number" data-number="699">699</h1>
          <span>Client Satisfaction</span>
        </div>
      </div>
    </div>
  </div>
  
  
  <div className="vg-page page-portfolio" id="portfolio">
    <div className="container">
      <div className="text-center wow fadeInUp">
        <div className="badge badge-subhead">Portfolio</div>
      </div>
      <h1 className="text-center fw-normal wow fadeInUp">See my work</h1>
      <div className="filterable-button py-3 wow fadeInUp" data-toggle="selected">
        <button className="btn btn-theme-outline selected" data-filter="*">All</button>
        <button className="btn btn-theme-outline" data-filter=".apps">Apps</button>
        <button className="btn btn-theme-outline" data-filter=".template">Template</button>
        <button className="btn btn-theme-outline" data-filter=".ios">IOS</button>
        <button className="btn btn-theme-outline" data-filter=".ui-ux">UI/UX</button>
        <button className="btn btn-theme-outline" data-filter=".graphic">Graphic</button>
        <button className="btn btn-theme-outline" data-filter=".wireframes">Wireframes</button>
      </div>

      <div className="gridder my-3">
        <div className="grid-item apps wow zoomIn">
          <div className="img-place" data-src="../assets/img/work/work-1.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Mobile Travel App</h5> <p>Travel, Discovery</p>">
            <img src="../assets/img/work/work-1.jpg" alt=""/>
            <div className="img-caption">
              <h5 className="fg-theme">Mobile Travel App</h5>
              <p>Travel, Discovery</p>
            </div>
          </div>
        </div>
        <div className="grid-item template wireframes wow zoomIn">
          <div className="img-place" data-src="../assets/img/work/work-2.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Music App</h5> <p>Musics</p>">
            <img src="../assets/img/work/work-2.jpg" alt=""/>
            <div className="img-caption">
              <h5 className="fg-theme">Music App</h5>
              <p>Musics</p>
            </div>
          </div>
        </div>
        <div className="grid-item apps ios wow zoomIn">
          <div className="img-place" data-src="../assets/img/work/work-3.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Gaming Dashboard</h5> <p>Games, Streaming</p>">
            <img src="../assets/img/work/work-3.jpg" alt=""/>
            <div className="img-caption">
              <h5 className="fg-theme">Gaming Dashboard</h5>
              <p>Games, Streaming</p>
            </div>
          </div>
        </div>
        <div className="grid-item graphic ui-ux wow zoomIn">
          <div className="img-place" data-src="../assets/img/work/work-4.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Drugs Delivery App</h5> <p>Health, Drugs</p>">
            <img src="../assets/img/work/work-4.jpg" alt=""/>
            <div className="img-caption">
              <h5 className="fg-theme">Drugs Delivery App</h5>
              <p>Health, Drugs</p>
            </div>
          </div>
        </div>
        <div className="grid-item apps ios wow zoomIn">
          <div className="img-place" data-src="../assets/img/work/work-5.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Musics Discover</h5> <p>Musics, Dashboard</p>">
            <img src="../assets/img/work/work-5.jpg" alt=""/>
            <div className="img-caption">
              <h5 className="fg-theme">Musics Discover</h5>
              <p>Musics, Dashboard</p>
            </div>
          </div>
        </div>
        <div className="grid-item graphic ui-ux wireframes wow zoomIn">
          <div className="img-place" data-src="../assets/img/work/work-6.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Game Streaming</h5> <p>Games, Streaming</p>">
            <img src="../assets/img/work/work-6.jpg" alt=""/>
            <div className="img-caption">
              <h5 className="fg-theme">Game Streaming</h5>
              <p>Games, Streaming</p>
            </div>
          </div>
        </div>
      </div> 
      <div className="text-center wow fadeInUp">
        <a href="#" className="btn btn-theme">Load More</a>
      </div>
    </div>
  </div> 
  
  
  <div className="vg-page page-testimonial">
    <div className="container">
      <h1 className="text-center fw-normal wow fadeInUp">What Clients are Saying</h1>
      <div className="row justify-content-center mt-5 wow fadeInUp">
        <div className="col-md-9">
          <div className="owl-carousel testi-carousel">
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <div className="img-place">
                    <img src="../assets/img/testimonials/testimonials_1.jpg" alt=""/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="caption">
                    <div className="testi-content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</div>
                    <div className="testi-info">
                      <div className="thumb-profile">
                        <img src="../assets/img/testimonials/testimonials_1.jpg" alt=""/>
                      </div>
                      <div className="tagline">
                        <h5 className="mb-0">Satria Nugraha</h5>
                        <span className="text-muted">CEO Nutshell</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <div className="img-place">
                    <img src="../assets/img/testimonials/testimonials_2.jpg" alt=""/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="caption">
                    <div className="testi-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe natus expedita ab facilis ut, animi explicabo amet. Voluptatibus possimus iste enim, doloremque, fugiat accusamus nisi optio fugit ratione expedita harum?</div>
                    <div className="testi-info">
                      <div className="thumb-profile">
                        <img src="../assets/img/testimonials/testimonials_2.jpg" alt=""/>
                      </div>
                      <div className="tagline">
                        <h5 className="mb-0">Selena Arrini</h5>
                        <span className="text-muted">CEO BigTree</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  
  <div className="vg-page page-client">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            <img src="../assets/img/logo/company_1.svg" alt=""/>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            <img src="../assets/img/logo/company_2.svg" alt=""/>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            <img src="../assets/img/logo/company_3.svg" alt=""/>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            <img src="../assets/img/logo/company_4.svg" alt=""/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            <img src="../assets/img/logo/company_5.svg" alt=""/>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            <img src="../assets/img/logo/company_6.svg" alt=""/>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            <img src="../assets/img/logo/company_7.svg" alt=""/>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            <img src="../assets/img/logo/company_8.svg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div> 
  
  
  <div className="vg-page page-blog" id="blog">
    <div className="container">
      <div className="text-center">
        <div className="badge badge-subhead wow fadeInUp">Blog</div>
      </div>
      <h1 className="text-center fw-normal wow fadeInUp">Latest Post</h1>
      <div className="row post-grid">
        <div className="col-md-6 col-lg-4 wow fadeInUp">
          <div className="card">
            <div className="img-place">
              <img src="../assets/img/work/work-9.jpg" alt=""/>
            </div>
            <div className="caption">
              <a href="#" className="post-category">Technology</a>
              <a href="#" className="post-title">Invision design forward fund</a>
              <span className="post-date"><span className="sr-only">Published on</span> May 22, 2018</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp">
          <div className="card">
            <div className="img-place">
              <img src="../assets/img/work/work-6.jpg" alt=""/>
            </div>
            <div className="caption">
              <a href="javascript:void(0)" className="post-category">Business</a>
              <a href="#" className="post-title">Announcing a plan for small teams</a>
              <span className="post-date"><span className="sr-only">Published on</span> May 22, 2018</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp">
          <div className="card">
            <div className="img-place">
              <img src="../assets/img/work/work-1.jpg" alt=""/>
            </div>
            <div className="caption">
              <a href="javascript:void(0)" className="post-category">Design</a>
              <a href="#" className="post-title">5 basic tips for illustrating</a>
              <span className="post-date"><span className="sr-only">Published on</span> May 22, 2018</span>
            </div>
          </div>
        </div>
        <div className="col-12 text-center py-3 wow fadeInUp">
          <a href="blog-fullbar.html" className="btn btn-theme">See All Post</a>
        </div>
      </div>
    </div>
  </div> 
  

  <div className="vg-page page-contact" id="contact">
    <div className="container-fluid">
      <div className="text-center wow fadeInUp">
        <div className="badge badge-subhead">Contact</div>
      </div>
      <h1 className="text-center fw-normal wow fadeInUp">Get in touch</h1>
      <div className="row py-5">
        <div className="col-lg-7 px-0 pr-lg-3 wow zoomIn">
          <div className="vg-maps">
            <div id="google-maps" style={{"width": "100%", "height": "100%"}}></div>
          </div>
        </div>
        <div className="col-lg-5">
          <form className="vg-contact-form">
            <div className="form-row">
              <div className="col-12 mt-3 wow fadeInUp">
                <input className="form-control" type="text" name="Name" placeholder="Your Name"/>
              </div>
              <div className="col-6 mt-3 wow fadeInUp">
                <input className="form-control" type="text" name="Email" placeholder="Email Address"/>
              </div>
              <div className="col-6 mt-3 wow fadeInUp">
                <input className="form-control" type="text" name="Subject" placeholder="Subject"/>
              </div>
              <div className="col-12 mt-3 wow fadeInUp">
                <textarea className="form-control" name="Message" rows="6" placeholder="Enter message here.."></textarea>
              </div>
              <button type="submit" className="btn btn-theme mt-3 wow fadeInUp ml-1">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> 
  
  
  <div className="vg-footer">
    <h1 className="text-center">Virtual Folio</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 py-3">
          <div className="footer-info">
            <p>Where to find me</p>
            <hr className="divider"/>
            <p className="fs-large fg-white">1600 Amphitheatre Parkway Mountain View, California 94043 US</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 py-3">
          <div className="float-lg-right">
            <p>Follow me</p>
            <hr className="divider"/>
            <ul className="list-unstyled">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Youtube</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 py-3">
          <div className="float-lg-right">
            <p>Contact me</p>
            <hr className="divider"/>
            <ul className="list-unstyled">
              <li>info@virtual.com</li>
              <li>+8890234</li>
              <li>+813023</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-12 mb-3">
          <h3 className="fw-normal text-center">Subscribe</h3>
        </div>
        <div className="col-lg-6">
          <form className="mb-3">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Email address"/>
              <input type="submit" className="btn btn-theme no-shadow" value="Subscribe"/>
            </div>
          </form>
        </div>
        <div className="col-12">
          <p className="text-center mb-0 mt-4">Copyright &copy;2020. All right reserved | This template is made with <span className="ti-heart fg-theme-red"></span> by <a href="https://www.macodeid.com/">MACode ID</a></p>
        </div>
      </div>
    </div>
  </div> 
</body>
    )
}
export default MyPortfolio;