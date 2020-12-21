<template>
  <section class="world_wide_tracker pad_top">
    <div class="container">
      <img class="tracker_map" src="src/assets/siteAssets/images/tracker-map-bg.png" alt="" />
      <div class="tracker_text">
        <h5>Türkiye Bazlı Corona Tablosu</h5>
        <h2>Onaylanmış Koronavirüs Vakaları</h2>
        <p>Güncelleme Tarihi : {{gtarih |moment("dddd,MMMM,YYYY")}}</p>
      </div>
      <div class="row tracker_inner">
        <div class="col-lg-3 col-6 wow fadeIn" data-wow-delay="600">
          <div class="media">
            <div class="d-flex">
              <img src="src/assets/siteAssets/images/icon/corona-yellow-1.png" alt="" />
            </div>
            <div class="media-body">
              <h2 >{{coronaverileri[0].newCases}}</h2>
              <p>Yeni Vaka Sayısı</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-6 wow fadeIn" data-wow-delay="400">
          <div class="media">
            <div class="d-flex">
              <img src="src/assets/siteAssets/images/icon/corona-black-1.png" alt="" />
            </div>
            <div class="media-body">
              <h2 >{{coronaverileri[0].newDeaths}}</h2>
              <p>Günlük Ölüm</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6 wow fadeIn" data-wow-delay="500">
          <div class="media">
            <div class="d-flex">
              <img src="src/assets/siteAssets/images/icon/corona-green-1.png" alt="" />
            </div>
            <div class="media-body">
              <h2 >{{coronaverileri[0].totalRecovered}}</h2>
              <p>Toplam İyileşen Hasta </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6 wow fadeIn" data-wow-delay="300">
          <div class="media">
            <div class="d-flex">
              <img src="src/assets/siteAssets/images/icon/corona-red-1.png" alt="" />
            </div>
            <div class="media-body">
              <h2 id="">{{ coronaverileri[0].totalCases }}</h2>
              <p>Toplam Hasta</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tracker_btn">
        <router-link tag="div" to="/about" exact>
          <a class="green_btn wow fadeInUp" data-wow-delay="500" href="#"><i class="linearicons-earth-lock"></i> Corona Virüs Nedir?</a>
        </router-link>
      </div>
    </div>
  </section>
</template>


<script>
import axios from  "axios"
export default {
  data(){
    return {
      gtarih : new Date().getTime(),
      coronaverileri : []
    }
  },
  methods : {

  },
  created() {
    axios.get("https://api.collectapi.com/corona/countriesData/Turkey").then(res => {
      console.log(res.data.result[6])
      let data = res.data.result[6]
      for (let key in data){
        this.coronaverileri.push(data)
      }
    })
  }
}

</script>
