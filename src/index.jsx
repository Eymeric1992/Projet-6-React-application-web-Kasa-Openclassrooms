import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import Home from './pages/Home/Home.jsx';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Survey from './pages/Home/Survey';
import Apropos from './pages/Apropos/Apropos';
import PageErreur from './pages/404/PageErreur';
import FicheLogement from './pages/FicheLogement/FicheLogement';
import PlantItem from './components/PlantItem';

/* CE QUI MARCHAIT JUSQUA PRESENT*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FicheLogement/:id" element={<FicheLogement />} />
   

      <Route path="/Survey" element={<Survey />} title='Questionnaire'/>
      <Route path="/Apropos" element={<Apropos />} />
      <Route path="/*" element={<PageErreur />} />

    </Routes>
  </BrowserRouter>
);


//import reportWebVitals from './reportWebVitals';
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/">
       <Home />
       </Route>
       <Route exact path="/Survey">
        <Survey />
       </Route>
    </Router>
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
