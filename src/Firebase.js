 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBw5fjq0MgrBMI7zwgjDXeGqQxyV7ePTYg",
  authDomain: "my-first-project-c4e94.firebaseapp.com",
  databaseURL: "https://my-first-project-c4e94-default-rtdb.firebaseio.com",
  projectId: "my-first-project-c4e94",
  storageBucket: "my-first-project-c4e94.appspot.com",
  messagingSenderId: "571331674866",
  appId: "1:571331674866:web:4b132c940fef719f9c066b",
  databaseURL: "https://my-first-project-c4e94-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);