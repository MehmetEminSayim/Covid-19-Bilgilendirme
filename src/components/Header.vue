<template>
  <div>
    <header class="header_area">
      <div class="main_menu">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link  to="/" exact>
              <a class="navbar-brand" href="index.html"><img src="g"
                                                             srcset="src/assets/siteAssets/images/logo.png " alt="" /></a>
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav ml-auto">
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

    </header>
  </div>

</template>
