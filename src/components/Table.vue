<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-md-offset-2">
        <div class="main_title text-center">
          <h2>Genel Korona Virüs Tablosu</h2>
        </div>

        <div class="fresh-table  toolbar-color-blue">
          <!--
            Available colors for the full background: full-color-blue, full-color-azure, full-color-green, full-color-red, full-color-orange
            Available colors only for the toolbar: toolbar-color-blue, toolbar-color-azure, toolbar-color-green, toolbar-color-red, toolbar-color-orange
          -->

          <table id="fresh-table" class="table ">
            <thead class="text-center">
            <th data-field="">Tarih</th>
            <th data-field="" data-sortable="true">Günlük Hasta</th>
            <th data-field="" data-sortable="true">Günlük vefat</th>
            <th data-field="">Günlük test</th>
            <th data-field="" data-formatter="operateFormatter" data-events="operateEvents">Günlük iyileşen</th>
            <th data-field="" data-formatter="operateFormatter" data-events="operateEvents">Toplam vaka </th>
            <th data-field="" data-formatter="operateFormatter" data-events="operateEvents">Toplam vefat </th>
            </thead>
            <tbody>
            <tr class="text-center" v-for="item in coronaverileri[0]">

              <td>{{item.date}}</td>
              <td>{{ item.patients | rakam}}</td>
              <td>{{ item.deaths  | rakam}}</td>
              <td>{{item.tests | rakam}}</td>
              <td>{{ item.recovered  | rakam}}8</td>
              <td>{{ item.totalPatients  | rakam}}</td>
              <td>{{item.totalDeaths | rakam}}</td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
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
  methods: {
    even: function(arr) {
      return arr.slice().sort(function(a, b) {
        return a.totalDeaths - b.totalDeaths;
      });
    }
  },
  created() {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    today = dd+'/'+mm+'/'+yyyy;
    console.log(today);
    this.otarih = today

    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
      .then(res=> {
        let data = res.data
        this.coronaverileri.push({...data})
      })
  }
}

</script>
