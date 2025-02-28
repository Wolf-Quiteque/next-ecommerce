import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
  return (
    <section className="page-intro">
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-1.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>
                  GARANTE O <br />
                  FUTURO.
                </h2>
                <a href="#" className="btn-shop">
                  <i className="icon-right"></i>Compre agora
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-2.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>
                  INSISTE NA <br /> PERFEIÇÃO.
                </h2>
                <a href="#" className="btn-shop">
                  <i className="icon-right"></i>Compre agora
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Frete grátis</h4>
                <p>Nas compras acima de 50mil KZ</p>
              </div>
            </li>

            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Clientes 99% Satisfeitos</h4>
                <p>As opiniões dos nossos clientes falam por si</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Originalidade garantida</h4>
                <p>30 dias de garantia para cada produto de nossa loja</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
