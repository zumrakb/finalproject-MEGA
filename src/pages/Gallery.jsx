import React, { useState } from "react";
import "./styles.css";

import place1 from "../images/80bindedevrialem.jpg";
import place2 from "../images/akyokus.jpg";
import place3 from "../images/etnografya.jpg";
import place4 from "../images/hadimi.jpg";
import place5 from "../images/kapucamii.jpg";
import place6 from "../images/sahipata.jpg";
import place7 from "../images/lkccami.jpg";
import place8 from "../images/evliyacelebiparki.jpg";

const Gallery = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const allGalleryItem = Array.from(document.querySelectorAll(".gallery-item")); // Convert NodeList to an array
  const imgModalDiv = document.getElementById("img-modal-box");

  const popularPlacesData = [
    {
      imageSrc: place1,
      placeName: "80 BİNDE DEVRİ ALEM",
      rating: 4.5,
      reviews: 400,
      description: "80 binde devri alem parkı 3 bölümden oluşur!",
    },
    {
      imageSrc: place2,
      placeName: "AKYOKUŞ",
      rating: 4.5,
      reviews: 400,
      description:
        "Akyokuş Tabiat Parkı, Konya'nın Meram ilçesi, Akyokuş mevkiinde bulunur.",
    },
    {
      imageSrc: place3,
      placeName: "ETNOGRAFYA MÜZESİ",
      rating: 4.5,
      reviews: 400,
      description: "Tarihimizin güzelliklerini yansıtan müzemiz.",
    },
    {
      imageSrc: place4,
      placeName: "KARAASLAN HADİMİ PARKI",
      rating: 4.5,
      reviews: 400,
      description:
        "Konya Büyükşehir Belediyesi tarafından yaptırılan, 186 bin m² alanı ile Konya'nın en büyük parkı olan Karaaslan Hadimi Parkı Yaylapınar Mahallesi'nde yer alıyor",
    },
    {
      imageSrc: place5,
      placeName: "KAPU CAMİİ",
      rating: 4.5,
      reviews: 400,
      description:
        "Cami adını, Konya Kalesi'nin girişlerinden birinin yanında kurulmuş olmasından almıştır.",
    },
    {
      imageSrc: place6,
      placeName: "SAHİPATA MÜZESİ",
      rating: 4.5,
      reviews: 400,
      description:
        "Sahip Ata Vakıf Müzesi - Konya. Anadolu Selçuklu Devleti vezirlerinden Sâhib Atâ Fahreddin Ali tarafından 1277 yılında yaptırılmıştır.",
    },
    {
      imageSrc: place7,
      placeName: "İPLİKÇİ CAMİİ",
      rating: 4.5,
      reviews: 400,
      description:
        "İplikçi Cami, Anadolu Selçuklu Devleti'nin başkenti olan Konya'nın ilk medresesiydi.",
    },
    {
      imageSrc: place8,
      placeName: "EVLİYA ÇELEBİ PARKI",
      rating: 4.5,
      reviews: 400,
      description: "Kültür ve eğlence parkı.",
    },

    // ... Repeat the structure for other places
  ];

  const showImageContent = (index) => {
    setImgIndex(index);
    imgModalDiv.querySelector(
      "#img-modal img"
    ).src = `images/gallery-${index}.jpg`;
  };

  const closeModal = () => {
    imgModalDiv.style.display = "none";
  };

  const openModal = (galleryItem) => {
    imgModalDiv.style.display = "block";
    let imgSrc = galleryItem.querySelector("img").src;
    const index = parseInt(imgSrc.split("-")[1].substring(0, 1));
    showImageContent(index);
  };

  const nextImage = () => {
    let nextIndex = imgIndex + 1;
    if (nextIndex > allGalleryItem.length) {
      nextIndex = 1;
    }
    showImageContent(nextIndex);
  };

  const prevImage = () => {
    let prevIndex = imgIndex - 1;
    if (prevIndex <= 0) {
      prevIndex = allGalleryItem.length;
    }
    showImageContent(prevIndex);
  };

  return (
    <div>
      {/* header */}
      <header className="flex header-sm">
        <div className="container">
          <div className="header-title">
            <h1>Galeri</h1>
            <p>
              Meram'ın turistik, tarihi ve kültürel zenginliğini resimler
              eşliğinde keşfedin!
            </p>
          </div>
        </div>
      </header>
      {/* end of header */}

      {/* gallery section */}
      <div id="gallery" className="  galeripadding">
        <div className="container">
          <div className="gallery-row">
            {allGalleryItem.map((galleryItem, index) => (
              <div
                key={index}
                className="gallery-item shadow"
                onClick={() => openModal(galleryItem)}
              >
                <img
                  src={`images/gallery-${index + 1}.jpg`}
                  alt={`gallery img ${index + 1}`}
                />
                <span className="zoom-icon">
                  <i className="fas fa-search-plus"></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end of gallery section */}

      {/* img modal */}
      <div id="img-modal-box">
        <div id="img-modal">
          <button
            type="button"
            id="modal-close-btn"
            className="flex"
            onClick={closeModal}
          >
            <i className="fas fa-times"></i>
          </button>
          <button
            type="button"
            id="prev-btn"
            className="flex"
            onClick={prevImage}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            type="button"
            id="next-btn"
            className="flex"
            onClick={nextImage}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <img
            src={`images/gallery-${imgIndex}.jpg`}
            alt={`gallery img ${imgIndex}`}
          />
        </div>
      </div>
      {/* end of img modal */}

      {/* ... (Include the rest of your components and sections) */}
      <section id="popular" className="py-4">
        <div className="title-wrap">
          <span className="sm-title">Aşağıda galeriyi gezebilirsiniz!</span>
          <h2 className="lg-title">Güzelliklerle dolu Meram:</h2>
        </div>

        <div className="popular-row gallery-popular-row">
          {popularPlacesData.map((place, index) => (
            <div key={index} className="popular-item itempiece shadow">
              <img src={place.imageSrc} alt={place.placeName} />
              <div>
                <span>{place.placeName}</span>
                <ul className="rating flex">
                  {[...Array(Math.floor(place.rating))].map((_, i) => (
                    <li key={i}>
                      <i className="fas fa-star"></i>
                    </li>
                  ))}
                  {place.rating % 1 !== 0 && (
                    <li>
                      <i className="fas fa-star-half-alt"></i>
                    </li>
                  )}
                  <li>&nbsp;{place.reviews} reviews</li>
                </ul>
                <p className="text">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* footer */}

      {/* end of footer */}
    </div>
  );
};

export default Gallery;
