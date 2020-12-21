<template>
  <header class="header_area">
    <ul class="nav menu_social flex-column">
      <li>
        <a href="#"><i class="fab fa-facebook"></i></a>
      </li>
      <li>
        <a href="#"><i class="fab fa-twitter"></i></a>
      </li>
      <li>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </li>
    </ul>
    <div class="main_menu">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="index.html"><img src="src/assets/siteAssets/images/logo.png"
                                                         srcset="assets/images/logo-2x.png 2x" alt="" /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">
              <li class="active"><a href="index.html">Home</a></li>
              <li class="dropdown submenu">
                <a class="dropdown-toggle" data-toggle="dropdown" href="prevention.html" role="button"
                   aria-haspopup="true" aria-expanded="false">Prevention </a>
                <i class="linearicons-chevron-down mobile_dropdown" aria-hidden="true" data-toggle="dropdown"></i>
                <ul class="dropdown-menu">
                  <li class="dropdown submenu">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="symptom.html" role="button"
                       aria-haspopup="true" aria-expanded="false">Symptoms
                      <i class="linearicons-chevron-right mobile_dropdown" aria-hidden="true"
                         data-toggle="dropdown"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a href="symptom.html">Typical Symptoms</a></li>
                      <li><a href="symptom-checker.html">Symptom Checker</a></li>
                      <li><a href="prevention.html">Prevention</a></li>
                      <li><a href="virus-checker.html">Coronavirus Checker</a></li>
                      <li><a href="tracker.html">Tracker</a></li>
                    </ul>
                  </li>
                  <li><a href="maintenance.html">Maintenance</a></li>
                  <li><a href="faq.html">FAQS</a></li>
                </ul>
              </li>
              <li><a href="appointment.html">Appointment</a></li>
              <li class="dropdown submenu">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                   aria-expanded="false">Pages</a>
                <i class="linearicons-chevron-down mobile_dropdown" aria-hidden="true" data-toggle="dropdown"></i>
                <ul class="dropdown-menu">
                  <li><a href="about.html">About</a></li>
                  <li><a href="doctors.html">Doctors</a></li>
                  <li><a href="sample-right-sidebar.html">Simple Sidebar</a></li>
                  <li><a href="typography.html">Typhography</a></li>
                  <li class="dropdown submenu">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="search.html" role="button"
                       aria-haspopup="true" aria-expanded="false">Search
                      <i class="linearicons-chevron-right mobile_dropdown" aria-hidden="true"
                         data-toggle="dropdown"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a href="search.html">Search</a></li>
                      <li><a href="search-nothing.html">Not Found</a></li>
                    </ul>
                  </li>
                  <li><a href="comingsoon.html">Coming Soon</a></li>
                  <li><a href="404.html">Error</a></li>
                </ul>
              </li>
              <li class="dropdown submenu">
                <a class="dropdown-toggle" data-toggle="dropdown" href="blog.html" role="button" aria-haspopup="true"
                   aria-expanded="false">Blog
                </a>
                <i class="linearicons-chevron-down mobile_dropdown" aria-hidden="true" data-toggle="dropdown"></i>
                <ul class="dropdown-menu">
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="single-blog.html">Blog Details</a></li>
                </ul>
              </li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li class="checker_btn">
                <a href="#"><i class="linearicons-pulse"></i> Symptom Checker</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="right_burger">
        <ul class="nav">
          <li>
            <div class="search_btn" data-toggle="modal" data-target="#exampleModal">
              <img src="assets/images/icon/search.png" alt="" />
            </div>
          </li>
          <li>
            <div class="menu_btn">
              <img src="assets/images/icon/burger.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
