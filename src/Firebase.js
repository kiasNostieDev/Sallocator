import firebase from 'firebase'
import React from 'react'

export default function Firebase() {
      return (null)
}

let firebaseConfig = {
      apiKey: "AIzaSyA0Xc4ARPylQ1Fmqv5Yc0Ihm1HLBn-20iI",
      authDomain: "suballoc.firebaseapp.com",
      projectId: "suballoc",
      storageBucket: "suballoc.appspot.com",
      messagingSenderId: "65247681670",
      appId: "1:65247681670:web:b642175fb5b11b45a74507",
      measurementId: "G-56469VNHXH"
};

export const fbref = firebase.initializeApp(firebaseConfig)