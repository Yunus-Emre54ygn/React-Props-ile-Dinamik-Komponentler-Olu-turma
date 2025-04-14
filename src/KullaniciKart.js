// React ten bileşeni çekiyoruz
import React, { useState } from "react";

//kartlarda ki değişkenleri tanımlıyoruz
const KullaniciKart = ({ ad, yas, aktif, hobiler }) => {
  const [gosterHobiler, setGosterHobiler] = useState(false);

  const toggleHobiler = () => {
    setGosterHobiler(!gosterHobiler);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{ad}</h3>
      <p>Yaş: {yas}</p>
      <p>
        Durum:{" "}
        <span style={{ color: aktif ? "green" : "red" }}>
          {aktif ? "Aktif" : "Aktif Değil"}
        </span>
      </p>
      <button onClick={toggleHobiler}>GösterDetay</button>
      {gosterHobiler && (
        <ul>
          {hobiler.map((hobi, index) => (
            <li key={index}>{hobi}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
//bileşeni tanımlıyoruz
export default KullaniciKart;
