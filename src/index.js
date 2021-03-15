import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/performance";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyA0gRYStTr12wLxaOZNeZsUtXyAvthPtik",
  authDomain: "filara-propject.firebaseapp.com",
  databaseURL: "https://filara-propject-default-rtdb.firebaseio.com",
  projectId: "filara-propject",
  storageBucket: "filara-propject.appspot.com",
  messagingSenderId: "1063291075481",
  appId: "1:1063291075481:web:ed3cc97e15a3e4a0d87108",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
