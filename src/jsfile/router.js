import Vue from "vue"
import VueRouter from "vue-router"
import Main from "../components/Main";
import About from  "../components/About"

Vue.use(VueRouter)

 export const router = new VueRouter({
   routes : [
     {
       path : "/",
       component : Main,
     },
     {
       path : "/about",
       component : About,
     },
     {
       path : "/hakkimda",
       component : About,
     },
     {
       path : "*",
       redirect : "/"
     }
   ],
   mode : "history"
 })
