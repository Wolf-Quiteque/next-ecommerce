import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo /> Gisetech
            </h6>
            <p>
              Garantimos criar soluções, de formas a apresentar uma séri e
              completa de serviços que ajudam as empresas iniciar as actividades
              e melhrar o seu desempenho.
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Comprar online</li>
              <li>
                <a href="#">Status do pedido</a>
              </li>
              <li>
                <a href="#">Envio e entrega</a>
              </li>
              <li>
                <a href="#">devoluções</a>
              </li>
              <li>
                <a href="#">Opções de pagamento</a>
              </li>
              <li>
                <a href="#">Contate-nos</a>
              </li>
            </ul>
            <ul>
              <li>Informação</li>
              <li>
                <a href="#">Cartões de presente</a>
              </li>
              <li>
                <a href="#">Encontre uma loja</a>
              </li>
              <li>
                <a href="#">Boletim de Notícias</a>
              </li>
              <li>
                <a href="#">Torne-se um membro </a>
              </li>
              <li>
                <a href="#">Site feedback</a>
              </li>
            </ul>
            <ul>
              <li>Contact</li>
              <li>
                <a href="#">store@uikit.com</a>
              </li>
              <li>
                <a href="#">Hotline: +1 131 138 138</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY RAGY - © 2019. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
