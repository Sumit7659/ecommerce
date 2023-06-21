import React from 'react'


const Website = () => {
  return (
    <>
      
  <header classname="header_wrapper">
    <nav classname="navbar navbar-expand-lg">
      <div classname="container">
        <a classname="navbar-brand" href="/" style={{ color: "black" }}>
          HEALTH-EASE
        </a>
        <button
          classname="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <i classname="fas fa-stream navbar-toggler-icon" />
        </button>
        <div
          classname="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul classname="navbar-nav  menu-navbar-nav">
            <li classname="nav-item">
              <a classname="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="/about">
                About
              </a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="/services">
                Services
              </a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="/team">
                Team
              </a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="/gallery">
                Gallery
              </a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="/testimonial">
                Testimonial
              </a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="/blog">
                Blog
              </a>
            </li>
            <li classname="nav-item mt-3 mt-lg-0">
              <a classname="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <section id="home" classname="home">
    <div classname="banner_wrapper wrapper">
      <div classname="container">
        <div classname="row align-items-center">
          <div classname="col-md-6 order-md-1 order-2">
            <h3>Better Health</h3>
            <h1>Better YOU!</h1>
            <p>
              Join us to a fun and friendly dental environment. Our
              professionals are working so hard to see smile on your face that
              you deserve! We are dedicated about our duties.
            </p>
            <a href="/" classname="main-btn mt-4 fill-btn">
              Appointment
            </a>
            <a href="/" classname="main-btn mt-4 ms-3">
              Learn More
            </a>
          </div>
          <div classname="col-md-6 order-md-2 order-1 mb-md-0 mb-5">
            <div classname="top-right-sec">
              <div classname="animate-img">
                <img
                  alt=" "
                  decoding="async"
                  classname="aimg1"
                  src="./images/top-banner-img/woman-brush.png"
                />
                <img
                  decoding="async"
                  classname="aimg2"
                  src="./images/top-banner-img/doctor.png"
                  alt=" "
                />
              </div>
              <img
                decoding="async"
                classname="img-fluid ms-xl-5"
                src="./images/top-banner-img/top-right-img-1.png"
                alt=" "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div classname="wrapper pb-0">
      <div classname="container">
        <div classname="row">
          <div classname="col-md-4 col-sm-6 mb-4">
            <div classname="card text-center">
              <div classname="icon-box">
                <img
                  decoding="async"
                  src="./images/top-banner-img/Appointment-icon.png"
                  alt=" "
                />
              </div>
              <div>
                <h4>Easy Appointment</h4>
                <p>
                  Lorem Ipsum is simply is very dummy text of the printings and
                  type setting
                </p>
              </div>
            </div>
          </div>
          <div classname="col-md-4 col-sm-6 mb-4">
            <div classname="card text-center">
              <div classname="icon-box">
                <img
                  decoding="async"
                  src="./images/top-banner-img/Emergency-icon.png"
                  alt=" "
                />
              </div>
              <div>
                <h4>Emergency Service</h4>
                <p>
                  Lorem Ipsum is simply is very dummy text of the printings and
                  type setting
                </p>
              </div>
            </div>
          </div>
          <div classname="col-md-4 col-sm-6 mb-4">
            <div classname="card text-center">
              <div classname="icon-box">
                <img
                  decoding="async"
                  src="./images/top-banner-img/7-Service-icon.png"
                  alt=" "
                />
              </div>
              <div>
                <h4>24/7 Service</h4>
                <p>
                  Lorem Ipsum is simply is very dummy text of the printings and
                  type setting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" classname="about_wrapper wrapper">
    <div classname="container">
      <div classname="row">
        <div classname="col-md-6 mb-mb-0 mb-5">
          <div classname="position-relative">
            <img
              decoding="async"
              src="./images/about/about-banner1.png"
              classname="img-fluid"
              alt=" "
            />
            <img
              decoding="async"
              src="./images/about/about-img2.png"
              classname="about-animate"
              alt=" "
            />
          </div>
        </div>
        <div classname="col-md-6 text-center text-md-start">
          <h2>Welcome to a Family</h2>
          <p>
            lorum luptatem quia voluptas sit aspernatur aut odit aut fugit, sed
            quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est.
          </p>
          <div classname="mt-5 card">
            <div classname="about-clinic">
              <h4>500+</h4>
              <p>Happy Patients</p>
            </div>
            <div classname="about-clinic">
              <h4>88+</h4>
              <p>Qualified Doctors</p>
            </div>
            <div classname="about-clinic">
              <h4>25+</h4>
              <p>Years Experience</p>
            </div>
            <div classname="about-clinic">
              <h4>55+</h4>
              <p>Medical Awards</p>
            </div>
            <span classname="line-1" />
            <span classname="line-2" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="services" classname="services_wrapper wrapper">
    <div classname="container">
      <div classname="row">
        <div classname="col-sm-12 text-center mb-5">
          <h3>Our Services</h3>
        </div>
      </div>
      <div classname="row">
        <div classname="col-md-4 col-sm-6 mb-4">
          <div classname="card">
            <div classname="icon-box">
              <img decoding="async" src="./images/services/1.svg" alt=" " />
            </div>
            <div>
              <h4>Emergency medicine</h4>
              <p>
                Lorem Ipsum is simply is very dummy text of the printings and
                type setting Lorem Ipsum is simply is very dummy text
              </p>
              <a href="/" classname="main-btn mt-4">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div classname="col-md-4 col-sm-6 mb-4">
          <div classname="card">
            <div classname="icon-box">
              <img decoding="async" src="./images/services/2.svg" alt=" " />
            </div>
            <div>
              <h4>Cardiology</h4>
              <p>
                Lorem Ipsum is simply is very dummy text of the printings and
                type setting Lorem Ipsum is simply is very dummy text
              </p>
              <a href="/" classname="main-btn mt-4">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div classname="col-md-4 col-sm-6 mb-4">
          <div classname="card">
            <div classname="icon-box">
              <img decoding="async" src="./images/services/3.svg" alt=" " />
            </div>
            <div>
              <h4>Anesthesiology</h4>
              <p>
                Lorem Ipsum is simply is very dummy text of the printings and
                type setting Lorem Ipsum is simply is very dummy text
              </p>
              <a href="/" classname="main-btn mt-4">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div classname="col-md-4 col-sm-6 mb-4">
          <div classname="card">
            <div classname="icon-box">
              <img decoding="async" src="./images/services/4.svg" alt=" " />
            </div>
            <div>
              <h4>Gastroenterology</h4>
              <p>
                Lorem Ipsum is simply is very dummy text of the printings and
                type setting Lorem Ipsum is simply is very dummy text
              </p>
              <a href="/" classname="main-btn mt-4">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div classname="col-md-4 col-sm-6 mb-4">
          <div classname="card">
            <div classname="icon-box">
              <img decoding="async" src="./images/services/5.svg" alt=" " />
            </div>
            <div>
              <h4>Radiology</h4>
              <p>
                Lorem Ipsum is simply is very dummy text of the printings and
                type setting Lorem Ipsum is simply is very dummy text
              </p>
              <a href="/" classname="main-btn mt-4">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div classname="col-md-4 col-sm-6 mb-4">
          <div classname="card">
            <div classname="icon-box">
              <img decoding="async" src="./images/services/6.svg" alt=" "/>
            </div>
            <div>
              <h4>Urology</h4>
              <p>
                Lorem Ipsum is simply is very dummy text of the printings and
                type setting Lorem Ipsum is simply is very dummy text
              </p>
              <a href="/" classname="main-btn mt-4">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="team" classname="team_wrapper wrapper">
    <div classname="container">
      <div classname="row">
        <div classname="col-sm-12 text-center mb-5">
          <h3 classname="text-black">Our Doctors</h3>
        </div>
      </div>
      <div classname="row">
        <div classname="col-md-4 col-sm-6 mb-4">
          <div classname="card rounded-3">
            <div classname="team-img">
              <img
                decoding="async"
                src="./images/team/team1.png"
                classname="img-fluid"
                alt=" "
              />
            </div>
            <div classname="team-info pt-4 text-center">
              <h5>Darry Milin</h5>
              <p>Surgeon</p>
              <ul classname="social-network">
                <li>
                  <a href="/">
                    <i classname="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i classname="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i classname="fab fa-google-plus-g" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i classname="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div classname="col-md-4 col-sm-6 mb-4">
          <div classname="card rounded-3">
            <div classname="team-img">
              <img
                decoding="async"
                src="./images/team/team2.png"
                classname="img-fluid"
                alt=" "
              />
            </div>
            <div classname="team-info pt-4 text-center">
              <h5>Salman Ahmed</h5>
              <p>Orthopedist</p>
              <ul classname="social-network">
                <li>
                  <a href="/">
                    <i classname="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i classname="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i classname="fab fa-google-plus-g" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i classname="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div classname="col-md-4 col-sm-6 mb-4">
          <div classname="card rounded-3">
            <div classname="team-img">
              <img
                decoding="async"
                src="./images/team/team3.png"
                classname="img-fluid"
                alt=" "
              />
            </div>
            <div classname="team-info pt-4 text-center">
              <h5>Santa Binte</h5>
              <p>Dermatologist</p>
              <ul classname="social-network">
                <li>
                  <a href="/">
                    <i classname="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i classname="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i classname="fab fa-google-plus-g" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i classname="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="gallery" classname="gallery_wrapper wrapper">
    <div classname="container">
      <div classname="row">
        <div classname="col-sm-12 text-center mb-5">
          <h3>Our Gallery</h3>
        </div>
      </div>
      <div classname="row">
        <div classname="col-md-4 col-sm-6 mb-4">
          <img
            decoding="async"
            src="./images/gallery/1.jpg"
            classname="w-100 h-100"
            alt=" "
          />
        </div>
        <div classname="col-md-4 col-sm-6 mb-4">
          <img
            decoding="async"
            src="./images/gallery/2.jpg"
            classname="w-100 h-100"
            alt=" "
          />
        </div>
        <div classname="col-md-4 col-sm-6 mb-4">
          <img
            decoding="async"
            src="./images/gallery/3.jpg"
            classname="w-100 h-100"
            alt=" "
          />
        </div>
        <div classname="col-md-4 col-sm-6 mb-4">
          <img
            decoding="async"
            src="./images/gallery/5.jpg"
            classname="w-100 h-100"
            alt=" "
          />
        </div>
        <div classname="col-md-8 col-sm-6 mb-4">
          <img
            decoding="async"
            src="./images/gallery/4.jpg"
            classname="w-100 h-100"
            alt=" "
          />
        </div>
      </div>
    </div>
  </section>

  <section id="testimonial" classname="testimonial_wrapper wrapper">
    <div classname="container">
      <div classname="row">
        <div classname="col-sm-12 text-center mb-4">
          <h3 classname="text-black">Testimonials</h3>
        </div>
      </div>
      <div classname="row align-items-center">
        <div classname="col-xl-3 col-md-4 col-sm-6">
          <div classname="card text-center">
            <img
              decoding="async"
              src="./images/testimonial/client1.png"
              classname="img-fluid"
              alt=" "
            />
            <h4 classname="pt-4 mb-0">Aliceano Colby</h4>
            <p>CEO of Prime IT</p>
          </div>
        </div>
        <div classname="col-xl-9 col-md-8 col-sm-6 ps-md-4 pt-sm-0 pt-4">
          <h4>Awesome Work</h4>
          <p>
            “They really took my individual case to heart. Their team is very
            helpful. They all work together in an impressive way to make sure
            that my needs were met and I walked out pain free.”
          </p>
        </div>
      </div>
    </div>
  </section>

  <section classname="appointment_wrapper wrapper">
    <div classname="container">
      <div classname="row">
        <div classname="col-lg-4 col-md-6 col-sm-8 col-10">
          <h3>Request your appointment in no time!</h3>
          <a href="/" classname="mt-5 main-btn fill-btn">
            Request Appointment
          </a>
        </div>
      </div>
    </div>
  </section>

  <section id="blog" classname="blog_wrapper wrapper">
    <div classname="container">
      <div classname="row">
        <div classname="col-sm-12 text-center mb-5">
          <h3 classname="text-black">Latest Blog</h3>
        </div>
      </div>
      <div classname="row">
        <div classname="col-md-4 col-sm-6 mb-4">
          <div classname="card p-0 border-0 rounded-0">
            <img decoding="async" src="./images/blog/1.jpg" alt=" "/>
            <div classname="blog-content">
              <h5 classname="text-white mb-4">
                Dental Insurance with Benefits
              </h5>
              <h6 classname="text-white">By Admin - February 18, 2018</h6>
              <p classname="mt-2 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, nostrum.
              </p>
              <a href="/" classname="main-btn mt-2">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div classname="col-md-4 col-sm-6 mb-4">
          <div classname="card p-0 border-0 rounded-0">
            <img decoding="async" src="./images/blog/2.jpg" alt=" "/>
            <div classname="blog-content">
              <h5 classname="text-white mb-4">
                Dental Insurance with Benefits
              </h5>
              <h6 classname="text-white">By Admin - February 18, 2018</h6>
              <p classname="mt-2 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, nostrum.
              </p>
              <a href="/" classname="main-btn mt-2">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div classname="col-md-4 col-sm-6 mb-4">
          <div classname="card p-0 border-0 rounded-0">
            <img decoding="async" src="./images/blog/3.jpg" alt=" "/>
            <div classname="blog-content">
              <h5 classname="text-white mb-4">
                Dental Insurance with Benefits
              </h5>
              <h6 classname="text-white">By Admin - February 18, 2018</h6>
              <p classname="mt-2 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, nostrum.
              </p>
              <a href="/" classname="main-btn mt-2">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" classname="footer_wrapper wrapper">
    <div classname="container pb-3">
      <div classname="row">
        <div classname="col-lg-3 col-md-6 mb-4">
          <h5>Clinic Location</h5>
          <p classname="ps-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dignissim erat ut laoreet pharetra....
          </p>
          <div classname="contact-info">
            <ul classname="list-unstyled p-0">
              <li>
                <a href="/">
                  <i classname="fa fa-home me-3" /> No. 96, South City, London
                </a>
              </li>
              <li>
                <a href="/">
                  <i classname="fa fa-phone me-3" />
                  +1 222 3333
                </a>
              </li>
              <li>
                <a href="/">
                  <i classname="fa fa-envelope me-3" />
                  info@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div classname="col-lg-3 col-md-6 mb-4">
          <h5>More Links</h5>
          <ul classname="link-widget p-0">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Our Office</a>
            </li>
            <li>
              <a href="/">Delivery</a>
            </li>
            <li>
              <a href="/">Our Store</a>
            </li>
            <li>
              <a href="/">Guarantee</a>
            </li>
            <li>
              <a href="/">Buy Gift Card</a>
            </li>
            <li>
              <a href="/">Return Policy</a>
            </li>
          </ul>
        </div>
        <div classname="col-lg-3 col-md-6 mb-4">
          <h5>More Links</h5>
          <ul classname="link-widget p-0">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Our Office</a>
            </li>
            <li>
              <a href="/">Delivery</a>
            </li>
            <li>
              <a href="/">Our Store</a>
            </li>
            <li>
              <a href="/">Guarantee</a>
            </li>
            <li>
              <a href="/">Buy Gift Card</a>
            </li>
            <li>
              <a href="/">Return Policy</a>
            </li>
          </ul>
        </div>
        <div classname="col-lg-3 col-md-6 mb-4">
          <h5>Newsletter</h5>
          <div classname="form-group mb-4">
            <input
              type="email"
              classname="form-control bg-transparent"
              placeholder="Enter Your Email Here"
            />
            <button
              type="submit"
              classname="main-btn rounded-2 mt-3 border-white text-white"
            >
              Subscribe
            </button>
          </div>
          <h5>Stay Connected</h5>
          <ul classname="social-network d-flex align-items-center p-0 ">
            <li>
              <a href="/">
                <i classname="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="/">
                <i classname="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="/">
                <i classname="fab fa-google-plus-g" />
              </a>
            </li>
            <li>
              <a href="/">
                <i classname="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div classname="container-fluid copyright-section">
      <p classname="p-0">
        Copyright <a href="/">© HEALTH-EASE.</a> All Rights Reserved
      </p>
    </div>
  </section>


    </>
  )
}

export default Website
