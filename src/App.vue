<template>
<div>
  <app-header></app-header>
  <router-view></router-view>
  <app-footer></app-footer>
</div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from  "./components/Main"
export default {
  components : {
    appHeader : Header,
    appFooter : Footer
  }
}
</script>

<style>

</style>
