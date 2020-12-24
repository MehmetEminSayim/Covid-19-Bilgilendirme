import Vue from 'vue'
import App from './App.vue'
import {router} from "./jsfile/router";
import axios from "axios";
import moment from "vue-moment"
import vmodal from  "vue-js-modal"

Vue.use(vmodal)
Vue.use(moment)

Vue.filter ("rakam",(value) =>{
  return parseFloat(value).toLocaleString(undefined,{minimumFractionDigits : 0})

})


axios.defaults.headers.common["authorization"] ="apikey 086SRq2aKCvnPFcQCitIgx:3dvTIBtPammLYg5Q5TxreZ"
axios.defaults.headers.get["accept"] = "application/json";

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
