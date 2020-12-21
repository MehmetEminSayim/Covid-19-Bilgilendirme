<template>
  <div>
    <div class="mobile_canvus_menu">
      <div class="close_btn">
        <img src="assets/images/icon/close-dark.png" alt="">
      </div>
      <div class="menu_part_lux">
        <ul class="menu_list wd_scroll">
          <router-link tag="li" to="/" active-class="active" exact>
            <a href="index.html">Anasayfa</a>
          </router-link>
          <router-link tag="li" to="/about" active-class="active" exact>
            <a href="index.html">Corona Nedir?</a>
          </router-link>
        </ul>
      </div>
      <div class="menu_btm">
        <a class="green_btn" href="#"><i class="linearicons-pulse"></i> Symptom Checker</a>
      </div>
    </div>
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

                <router-link tag="li" to="/" active-class="active" exact>
                  <a href="index.html">Anasayfa</a>
                </router-link>
                <router-link tag="li" to="/about" active-class="active" exact>
                  <a href="index.html">Corona Nedir?</a>
                </router-link>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li class="checker_btn">
                  <a href="tel:112"><i class="linearicons-pulse"></i> Semptom Gösteriyorum</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
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
              <img src="src/assets/siteAssets/images/icon/burger.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </header>
  </div>

</template>
