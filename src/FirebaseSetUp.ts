
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
const firebaseConfig = {

  apiKey: "AIzaSyDqHYCqETci5H_X7vIsbFLWFMlWfyGwr1E",

  authDomain: "gfg-react-project-01.firebaseapp.com",

  projectId: "gfg-react-project-01",

  storageBucket: "gfg-react-project-01.appspot.com",

  messagingSenderId: "392147220836",

  appId: "1:392147220836:web:fef733b88dd408c8802271",

  measurementId: "G-HM3PSZTQYY"

};


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const auth = getAuth(app);
  
