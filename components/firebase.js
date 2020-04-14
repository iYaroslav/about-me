import firebase from 'firebase/app'
import 'firebase/analytics'

if (!firebase.apps.length) {
  firebase.initializeApp({
    projectId: "yaroslav-uz",
    appId: "1:939744958657:web:c205bf7c21373a3b95dc40",
    databaseURL: "https://yaroslav-uz.firebaseio.com",
    storageBucket: "yaroslav-uz.appspot.com",
    apiKey: "AIzaSyC968MPmoOY32dBe3msQ4bdNskaG7APKhE",
    authDomain: "yaroslav-uz.firebaseapp.com",
    messagingSenderId: "939744958657",
    measurementId: "G-QC2VL7CDS3"
  })
}

const analytics = () => firebase.analytics()

export {
  analytics
}
