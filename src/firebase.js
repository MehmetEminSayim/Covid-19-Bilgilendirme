import firebase from "firebase/app";
import firestore from "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyBtwoXk5Sa6YrQr2bLV8vwGE6QGSmlhWoY",
  authDomain: "covid-19-bilgilendirme.firebaseapp.com",
  projectId: "covid-19-bilgilendirme",
  storageBucket: "covid-19-bilgilendirme.appspot.com",
  messagingSenderId: "301928442057",
  appId: "1:301928442057:web:e252e80acab2ee7d578518",
  measurementId: "G-E7DYWHKM14"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()
