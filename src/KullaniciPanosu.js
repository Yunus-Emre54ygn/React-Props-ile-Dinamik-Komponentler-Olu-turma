//Çekmesi gereken bileşenleri yazıyoruz
import React from "react";
import KullaniciKart from "./KullaniciKart";

//değişkenleri tanımlıyoruz(stringleri yazıyoruz)
const kullanicilar = [
  {
    ad: "Yunus Emre YIĞIN",
    yas: 21,
    aktif: true,
    hobiler: ["Futbol", "Yüzme", "Kitap Okumak","Müzik Yapmak","react ödevini yapmak"]
  },
  {
    ad: "Kodlamacı Ayşe",
    yas: 30,
    aktif: false,
    hobiler: ["Müzik", "Sinema", "Yemek Yapmak"]
  },
  {
    ad: "Sakarya Fırat",
    yas: 22,
    aktif: true,
    hobiler: ["Kodlama", "Basketbol"]
  }
];

const KullaniciPanosu = () => {
  return (
    <div>
      <h2>Kullanıcılar</h2>
      {kullanicilar.map((kullanici, index) => (
        <KullaniciKart key={index} {...kullanici} />
      ))}
    </div>
  );
};

//Aktarılan bileşenin normal olarak ayarlıyoruz
export default KullaniciPanosu;
