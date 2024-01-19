import React from "react";
import "./styles.css";
import image1 from "../images/blog-1.jpg";
import image2 from "../images/blog-2.jpg";
import image3 from "../images/blog-3.jpg";
import image4 from "../images/blog-4.jpg";
import image5 from "../images/blog-5.jpg";
import image6 from "../images/blog-6.jpg";

const Blog = () => {
  function getImages() {
    return [image1, image2, image3, image4, image5, image6];
  }
  return (
    <div>
      {/* Header */}
      <header className="flex header-sm">
        <div className="container">
          <div className="header-title">
            <h1>Blog</h1>
            <p>
              Gezilen görülen yerler hakkında görüşlerini ve önerilerini
              gönderen Meramlıların blogu!
            </p>
          </div>
        </div>
      </header>
      {/* End of Header */}

      {/* Blog Section */}
      <section id="blog" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <h2 className="sm-title">
              Meram hakkında daha fazla bilgi almak için bloglara göz
              atabilirsiniz.
            </h2>
            <h3 className="lg-title">Bloglar</h3>
          </div>

          <div className="blog-row">
            {/* Map through your blog items here */}
            {console.log([...Array(8)])}
            {getImages().map((image, index) => (
              <div className="blog-item my-2 shadow" key={index}>
                <div className="blog-item-top">
                  <img src={image} alt="blog" />
                  <span className="blog-date">oct 28, 2021</span>
                </div>
                <div className="blog-item-bottom">
                  <span>geziler |zümra</span>
                  <b style={{ fontSize: "25px" }}>Meram Belediyesi</b>
                  <p className="text">
                    Meram, Konya’nın merkez ilçelerinden biridir. Konya’nın
                    güneybatısında kurulmuş bir yerleşim alanıdır. İslami birçok
                    tarihi esere ev sahipliği yapmaktadır. İlçe sınırları
                    içerisinde yer alan Roma İmparatorluğu Dönemi’nden kalan ve
                    Konya’nın son kilisesi olan Aziz Pavlus Kilisesi, kayalara
                    oyularak yapılmış olması sebebiyle ihtişamlı bir manzaraya
                    sahip olan Kilistra Antik Kenti, ilçenin önemli tarihi
                    yapıları arasında yer almaktadır.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End of Blog Section */}

      {/* Footer */}

      {/* End of Footer */}
    </div>
  );
};

export default Blog;
