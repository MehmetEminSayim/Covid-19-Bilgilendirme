<template>
  <section class="world_wide_tracker pad_top">
    <div class="container">
      <div class="tracker_text">
        <h5>Onaylanmış Koronavirüs Vakaları</h5>
        <h2>Türkiye Covid 19 Verileri</h2>
        <p>Güncelleme Tarihi : {{otarih |moment("dddd,MMMM,YYYY")}}</p>
      </div>
      <div class="row tracker_inner">
        <div class="col-lg-3 col-6 wow fadeIn" data-wow-delay="600">
          <div class="media">
            <div class="d-flex">
              <img src="src/assets/siteAssets/images/icon/corona-yellow-1.png" alt="" />
            </div>
            <div class="media-body">
              <h2 v-if="coronaverileri[0].newCases">{{coronaverileri[0].newCases}}</h2>
              <h4 v-if="!coronaverileri[0].newCases">Güncel vakalar bekleniyor...</h4>
              <p>Vaka Sayısı</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6 wow fadeIn" data-wow-delay="400">
          <div class="media">
            <div class="d-flex">
              <img src="src/assets/siteAssets/images/icon/corona-black-1.png" alt="" />
            </div>
            <div class="media-body">
              <h2 v-if="coronaverileri[0].newDeaths">{{coronaverileri[0].newDeaths}}</h2>
              <h4 v-if="!coronaverileri[0].newDeaths">Güncel vakalar bekleniyor...</h4>
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
              <h2 v-if="coronaverileri[0].totalCases" >{{coronaverileri[0].totalCases}}</h2>
              <h4 v-if="!coronaverileri[0].totalCases">Güncel vakalar bekleniyor...</h4>
              <p>Toplam Hasta</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6 wow fadeIn" data-wow-delay="300">
          <div class="media">
            <div class="d-flex">
              <img src="src/assets/siteAssets/images/icon/corona-red-1.png" alt="" />
            </div>
            <div class="media-body">
              <h2>{{ coronaverileri[0].totalRecovered}}</h2>

              <p>Toplam İyileşen Hasta
              </p>
            </div>
          </div>
        </div>
        <br>


      </div>
      <p>{{lastItem}}</p>
      <div class="tracker_btn">
          <a class="green_btn wow text-white fadeInUp" data-wow-delay="500" data-toggle="modal" data-target="#exampleModal"><i class="linearicons-earth-lock"></i> Corona Virüs Nedir?</a>
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
      coronaverileri : [],
      otarih : null
    }
  },
  created() {
    axios.get("https://api.collectapi.com/corona/countriesData/Turkey").then(res => {
      let data = res.data.result[6]
      console.log(data)
      for (let key in data){
        this.coronaverileri.push(data)
      }
    })

    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    today = dd+'/'+mm+'/'+yyyy;
    console.log(today);
    this.otarih = today
    //
    //
    // axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    // .then(res=> {
    //   let data = res.data
    //   this.coronaverileri.push(data)
    //   console.log(this.coronaverileri[0])
    // })
  }
}

</script>
