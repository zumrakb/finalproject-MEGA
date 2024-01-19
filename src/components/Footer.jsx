import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-4">
      <div className="container footer-row">
        <div className="footer-item">
          <Link to="/" className="site-brand">
            Meram<span>Bel</span>
          </Link>
          <p className="text">
            Meram kelimesi, Konyalıca; “Amaç, arzu, hedef, gaye, tema”
            anlamlarında. Herkesin görmek, kavuşmak, gezmek, yaşamak için can
            attığı bu cennet mesireliğin özel adı olmuş. Böylece anıla gelmiş.
            Bu adla tarihlere, belgelere, vakfiyelere, seyahat-nâmelere,
            kitaplara, şiirlere geçmiş, dilden dile, gönülden gönüle yayılmış.
          </p>
        </div>

        <div className="footer-item">
          <h2>Bizi takip edin:</h2>
          <ul className="social-links">
            <li>
              <a
                href="https://tr-tr.facebook.com/Meram.Belediyesi/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/meram.belediyesi/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/MeramBelediyesi"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
          <h2>Başkanımız Mustafa Kavuş Bey'i takip edin:</h2>
          <ul className="social-links">
            <li>
              <a
                href="https://www.facebook.com/mustafakavuss/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mustafakavuss/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/MustafaKavus"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-item">
          <h2>Popüler Yerler:</h2>
          <ul>
            <li>
              <p>80 Binde Devri Alem Parkı</p>
            </li>
            <li>
              <p>Sahip Ata Müzesi</p>
            </li>
            <li>
              <p>Akyokuş</p>
            </li>
            <li>
              <p>Kapu Camii</p>
            </li>
            <li>
              <p>Karaaslan Hadimi Parkı</p>
            </li>
            <li>
              <p>Tavusbaba Türbesi</p>
            </li>
          </ul>
        </div>

        <div className="subscribe-form footer-item">
          <h2>Bilgilendirmeler için abone ol!</h2>
          <form className="flex">
            <input
              type="email"
              placeholder="Email adresiniz"
              className="form-control"
            />
            <input type="submit" className="btn" value="Abone Ol!" />
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
