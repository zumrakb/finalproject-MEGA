import React from "react";
import "./styles.css";

import leftImg from "../images/about-img.jpg";

function About() {
  return (
    <div>
      {/* Header */}
      <header className="flex header-sm">
        <div className="container">
          <div className="header-title">
            <h1>Meram'ın Adı</h1>
            <p>
              Meram kelimesi, Konyalıca; “Amaç, arzu, hedef, gaye, tema”
              anlamlarında. Herkesin görmek, kavuşmak, gezmek, yaşamak için can
              attığı bu cennet mesireliğin özel adı olmuş. Böylece anıla gelmiş.
              Bu adla tarihlere, belgelere, vakfiyelere, seyahat-nâmelere,
              kitaplara, şiirlere geçmiş, dilden dile, gönülden gönüle yayılmış.
              Meram, şehir merkezinin batısında 8 km. mesâfede. Batıdaki Loras
              Dağı’nın dik meyilli çıplak yamaçları ile bu yamaçların doğu
              eteklerinde Konya yönüne doğru yelpaze gibi açılan bir yeşillikler
              armonisi. Bu yeşilliklerle kaplı yamaçların yanı sıra Konya
              ovasının bu taraftaki düzlüğünün bir kısmını da içine alır. Meram
              asıl güzelliğini, kişiliğini ve dillere destan ününü, Selçuklular
              zamanında alır. Bu güzellikler, Karamanoğulları, Osmanlılar ve
              Cumhuriyet dönemlerinde artan bir câzibe ve efsunkârlıkla devam
              eder gelir. Selçuklu Konyasını dışardan kuşatan surların oniki
              kapısından biri Meram’a giden yola açılıyordu ve adı da “Meram
              Kapısı” idi. Meram’ın Mevlâna’lı ve Mevlevîli asırları, Selçuklu
              başkenti Konya’nın kültür tarihine unutulmaz hatıralar
              kazandırmış. Akan suya, açan çiçeğe, kokan güle, yeşeren yaprağa
              sinen; esen melteme karışan; aşk, mânâ, marifet dolu tadına
              doyulmaz sohbetler, satırlarda ve dillerde yerini almış. Mimariye
              geçmiş, Meram’daki mescidlerin, türbelerin, daru’l-huffâzların
              (hâfız mektepleri), evlerin, konakların taşına, mermerine,
              ahşabına, harcına karışmış, bize kadar gelmiş.
            </p>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">Belediye Başkanı Mustafa Kavuş</span>
            <h2 className="lg-title">HAKKINDA</h2>
          </div>

          <div className="about-row">
            <div className="about-left my-2">
              <img src={leftImg} alt="about img" />
            </div>
            <div className="about-right">
              <h2>Başkanımız MUSTAFA KAVUŞ:</h2>
              <p className="text">
                Öğrenim hayatına Ali İhsan Dayıoğlugil İlkokulu'nda başlayan
                Mustafa KAVUŞ, orta ve lise öğrenimini ise Konya İmam Hatip
                Lisesi’nde bitirdi. 1995 yılında kazandığı Ankara Üniversitesi
                Siyasal Bilgiler Fakültesi İşletme Bölümü’nü başarıyla
                tamamlamasının ardından Selçuk Üniversitesi Yönetim Organizasyon
                Ana Bilim Dalı’nda yüksek lisans eğitimi aldı. Mustafa KAVUŞ,
                eğitim hayatının yanı sıra küçük yaştan itibaren iş hayatı
                tecrübesi kazanmaya çalıştı. Tekstil, yayınevi ve gıda
                sektörlerinde işletmecilik ve yöneticilik yaptı. Tüm bu
                çalışmalarının yanında siyasete de ilgi duyan Mustafa KAVUŞ, AK
                Parti ile başladığı siyasi yaşamında 2001-2003 yılları arasında
                AK Parti İl Gençlik Kolları Kurucu Teşkilatlanma Başkanı olarak
                görev yaptı. Siyasi tecrübesini 2003-2005 yıllarında İl
                Teşkilatı Yönetim Kurulu Üyesi olarak sürdüren KAVUŞ, 2011 genel
                seçimlerinde milletvekili aday adayı oldu. 2004 yılında Konya
                Büyükşehir Belediyesi Başkanlık danışmanlığına getirilen KAVUŞ,
                2006’da Teftiş Kurulu Müfettişliği’ne atandı. 2009 yılında
                getirildiği Teftiş Kurulu Başkanlığını 2018 yılına kadar
                sürdürdü. Çevre ve Şehircilik Bakanlığı’nda Bakan Müşaviri
                olarak görev yapmakta iken aday adaylığı başvurusu için istifa
                etti. 31 Mart 2019 yerel seçimlerinde Meram Belediye Başkanı
                seçilen Mustafa KAVUŞ evli ve iki çocuk babasıdır.
              </p>
              {/* <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique explicabo blanditiis quidem consequuntur qui quaerat
                fuga iste tenetur consequatur porro. Aliquam maiores alias
                doloribus at quisquam quo numquam perferendis. Odit!
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section id="facts" className="py-4 flex">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">Rakamlarla Bizim Meram</span>
            <h2 className="lg-title">Bir yılda Bizim Meram'da neler oldu?</h2>
          </div>

          <div className="facts-row">
            <div className="facts-item">
              <span className="fas fa-solid fa-user facts-icon "></span>

              <div className="facts-info">
                <strong>57200</strong>
                <p className="text">vatandaşımız belediyemizde işlem yaptı.</p>
              </div>
            </div>

            <div className="facts-item">
              <span className="fas fa-solid fa-baby  facts-icon"></span>
              <div className="facts-info">
                <strong>3,155</strong>
                <p className="text">Bebek Meram'da Dünyaya Gözlerini Açtı.</p>
              </div>
            </div>

            <div className="facts-item">
              <span className="fas fa-solid fa-wifi facts-icon"></span>
              <div className="facts-info">
                <strong>612,832</strong>
                <p className="text">Kişi Web Sitemizi Ziyaret Etti.</p>
              </div>
            </div>

            <div className="facts-item">
              <span className="fas fa-solid fa-trash facts-icon"></span>
              <div className="facts-info">
                <strong>139,828 m³</strong>
                <p className="text">
                  Çöp Toplanarak Ayırma ve İşleme Tesislerine Taşındı.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* JS script */}
      <script src="js/script.js"></script>
      {/* Additional React scripts can be added here */}
    </div>
  );
}

export default About;
