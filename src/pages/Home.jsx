import React from "react";
import { useRef } from "react";
import "./styles.css";

import bottomvideo from "../videos/video-section.mp4";
import test1 from "../images/test-1.jpg";
import test2 from "../images/test-2.jpg";
import test3 from "../images/test-3.jpeg";
import test5 from "../images/test-5.jpg";

import bindedevrialem from "../images/80bindedevrialem.jpg";
import akyokus from "../images/akyokus.jpg";
import etnografya from "../images/etnografya.jpg";

function Home() {
  const videoRef = useRef(null);

  // Function to play/pause the video
  const handlePlayPause = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <div>
      {/* Header */}
      <header className="flex">
        <div className="container">
          <div className="header-title">
            <h1>BELEDİYE SAYFAMIZA HOŞ GELDİNİZ!</h1>
            <p>
              Bu sayfada tarihi ve doğal güzellikleri ile Konya'yı ve bu güzel
              şehre hizmet eden belediyemizı tanıyacaksınız!
            </p>
          </div>
          <div className="header-form">
            <h2>"NE OLURSAN OL, YİNE GEL!"</h2>
            <h2>-Mevlana-</h2>
          </div>
        </div>
      </header>

      {/* Featured Section */}
      <section id="featured" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">
              MERAMDA YER ALAN BAZI TURİSTİK YERLER!
            </span>
            <h2 className="lg-title">İNCELEYİNİZ:</h2>
          </div>

          <div className="featured-row">
            {/* Repeat the featured items as needed */}
            {/* Example Featured Item */}
            <div className="featured-item my-2 shadow">
              <img src={akyokus} alt="featured place" />
              <div className="featured-item-content">
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                  Akyokuş
                </span>
                <div>
                  <p className="text">
                    Akyokuş Tabiat Parkı, Konya'nın Meram ilçesi, Akyokuş
                    mevkiinde bulunur. Yaklaşık 21,6 hektar alana yayılmıştır.
                    Dut, ters dut, badem, huş ağacı, karaçam, dişbudak gibi
                    birçok bitki türünün görülebileceği tabiat parkında sivri
                    fare, tarla faresi, domuz, tavşan, sincap, yılan, kertenkele
                    gibi çok sayıda canlıya rastlamak mümkündür.
                  </p>
                </div>
              </div>
            </div>
            <div className="featured-item my-2 shadow">
              <img src={bindedevrialem} alt="featured place" />
              <div className="featured-item-content">
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                  80 Binde Devri Alem
                </span>
                <div>
                  <p className="text">
                    80 binde devri alem parkı, Konya’nın Meram ilçesinde bulunan
                    bir tema parkıdır. Üç bölümden oluşuyor: 1. Cihan-ı Türk
                    Parkı 2. T-Rex Parkı 3. Pamuk Şekeri Parkı
                  </p>
                </div>
              </div>
            </div>
            <div className="featured-item my-2 shadow">
              <img src={etnografya} alt="featured place" />
              <div className="featured-item-content">
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                  Etnografya Müzesi
                </span>
                <div>
                  <p className="text">
                    İlkin eğitim amaçlı olarak inşa edilen bina 1975 yılında
                    Etnografya Müzesi olarak hizmete açılmıştır. Üç katlı
                    binanın bodrum katında fotoğrafhane, arşiv, ayniyat ve
                    etütlük eser depoları, kaloriferhane ile halen çalışmaları
                    devam etmekte olan 1998 yılı içerisinde açılması planlanan
                    halı-kilim seksiyonu bulunmaktadır.
                  </p>
                </div>
              </div>
            </div>
            {/* End of Featured Item */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">
              Meram Belediyesi, hizmetleri ile gönüllerin belediyesi!
            </span>
            <h2 className="lg-title">HİZMETLERİMİZ:</h2>
          </div>

          <div className="services-row">
            {/* Repeat the services items as needed */}
            {/* Example Services Item */}
            <div className="services-item">
              <span className="services-icon">
                <i className="fas fa-hotel"></i>
              </span>
              <h3>Yazılım Eğitimleri</h3>
              <p className="text">
                Üretken Akademi kapsamında oluşturulan MEGA Yazılım Akademisi
                gibi oluşumlar aracılığıyla bu teknoloji çağında gençlerimize
                ücretsiz yazılım eğitimleri vermekteyiz.
              </p>
              <a
                href="https://uretkenakademi.com/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Read more
              </a>
            </div>
            <div className="services-item">
              <span className="services-icon">
                <i className="fas fa-hotel"></i>
              </span>
              <h3>İyi ki Doğdun Bebek!</h3>
              <p className="text">
                İyi ki doğdun bebek uygulaması ile bebeği dünyaya gelen
                hemşehrilerimiz ziyaret ediliyor.
              </p>
              <a
                href="https://www.meram.bel.tr/iyiki-dogdun"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Read more
              </a>
            </div>
            <div className="services-item">
              <span className="services-icon">
                <i className="fas fa-hotel"></i>
              </span>
              <h3>Evlilik İşlemleri</h3>
              <p className="text">
                Evlendirme yasa ve yönetmeliği çerçevesinde evlenecek çiftlerin
                müracaatlarını almak, dosya açıp nikah gün ve tarihi için
                randevu vermek, verilen randevu günü ve saatinde nikah
                akidlerini gerçekleştirmek.
              </p>
              <a
                href="https://www.meram.bel.tr/evlilik-islemleri"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Read more
              </a>
            </div>

            {/* End of Services Item */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">Meram adres ve telefon rehberi:</span>
            <h2 className="lg-title">LİSTE</h2>
          </div>

          <div className="test-row">
            {/* Repeat the testimonials items as needed */}
            {/* Example Testimonial Item */}

            <div className="test-item">
              <p className="text">
                Sahibata Mahallesi Tevfikiye Caddesi No: 2 42040 Meram/KONYA 0
                332 310 20 10
              </p>
              <div className="test-item-info">
                <img src={test1} alt="testimonial" />
                <div>
                  <h3>Konya Valiliği</h3>
                  <p className="text"></p>
                </div>
              </div>
            </div>
            <div className="test-item">
              <p className="text">
                Sahibata Mahallesi Saitpaşa Caddesi No:26 Meram/KONYA 0 332 351
                88 30
              </p>
              <div className="test-item-info">
                <img src={test2} alt="testimonial" />
                <div>
                  <h3>Meram Kaymakamlığı</h3>
                  <p className="text"></p>
                </div>
              </div>
            </div>
            <div className="test-item">
              <p className="text">
                Konevi Mahallesi Feritpaşa Caddesi No:18 42040 Meram / KONYA 0
                332 280 28 00
              </p>
              <div className="test-item-info">
                <img src={test3} alt="testimonial" />
                <div>
                  <h3> KOP Bölge Kalkınma İdaresi</h3>
                  <p className="text"></p>
                </div>
              </div>
            </div>
            <div className="test-item">
              <p className="text">
                Konevi Mahallesi Vali Cemil Keleşoğlu Sokak No:17 Meram / KONYA
                0 332 353 25 61
              </p>
              <div className="test-item-info">
                <img src={test3} alt="testimonial" />
                <div>
                  <h3> Tüik Konya Bölge Müdürlüğü</h3>
                  <p className="text"></p>
                </div>
              </div>
            </div>

            <div className="test-item">
              <p className="text">
                Aydoğdu Mahallesi Mücahit Asker Caddesi Meram / KONYA 0 332 280
                44 97
              </p>
              <div className="test-item-info">
                <img src={test5} alt="testimonial" />
                <div>
                  <h3> Tapu ve Kadastro 5. Bölge Müdürlüğü</h3>
                  <p className="text"></p>
                </div>
              </div>
            </div>
            {/* End of Testimonial Item */}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video">
        <div className="video-wrapper flex">
          <video ref={videoRef} loop>
            <source src={bottomvideo} type="video/mp4" />
          </video>
          <button type="button" id="play-btn" onClick={handlePlayPause}>
            <i className="fas fa-play"></i>
          </button>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}

export default Home;
