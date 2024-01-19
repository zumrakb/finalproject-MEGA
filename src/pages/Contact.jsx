import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <header className="flex header-sm">
        <div className="container">
          <div className="header-title">
            <h1>İletişim</h1>
            <p>
              Öneri, şikayet ve düşüncelerinizi aşağıdaki form aracılığıyla ya
              da telefon numarası veya eposta üzerinden bizlere
              ulaştırabilirsiniz!
            </p>
          </div>
        </div>
      </header>
      {/* End of Header */}

      {/* Contact Section */}
      <section id="contact" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">Bizimle iletişime geçin!</span>
            <h2 className="lg-title">Form:</h2>
          </div>

          <div className="contact-row">
            <div className="contact-left">
              <form className="contact-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Adınız - Soyadınız"
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Eposta adresiniz"
                />
                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Mesajınız"
                  style={{ resize: "none" }}
                ></textarea>
                <input type="submit" className="btn" value="Gönder" />
              </form>
            </div>
            <div className="contact-right">
              <div className="contact-item">
                <span className="contact-icon flex">
                  <i className="fa fa-phone-alt"></i>
                </span>
                <div>
                  <span>Telefon:</span>
                  <p className="text">(0332) 320 10 00</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon flex">
                  <i className="fa fa-map-marked-alt"></i>
                </span>
                <div>
                  <span>Adres:</span>
                  <p className="text">
                    Yenişehir Mahallesi, Azerbeycan Cd. No:5, 42010 Meram/Konya
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon flex">
                  <i className="fa fa-envelope"></i>
                </span>
                <div>
                  <span>Email:</span>
                  <p className="text">bizimmeram@meram.bel.tr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Contact Section */}

      {/* Footer */}

      {/* End of Footer */}
    </div>
  );
};

export default Contact;
