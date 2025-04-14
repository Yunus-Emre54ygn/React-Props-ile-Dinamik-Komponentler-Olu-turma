// App.js te tüm bileşenleri bir araya getiriyoruz 
import React from "react";
import KullaniciPanosu from "./KullaniciPanosu";

const App = () => {
  return (
    <div>
      <h1>Dinamik Kullanıcı Panosu</h1>
      <KullaniciPanosu />
    </div>
  );
};

export default App;
