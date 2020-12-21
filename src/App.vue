<template>
<div>
  <app-header></app-header>
  <app-main></app-main>
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
    appMain : Main,
    appFooter : Footer
  }
}
</script>

<style>

</style>
