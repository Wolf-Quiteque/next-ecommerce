import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: "url(/images/featured-1.jpg)" }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>cursos de qualidade</h3>
              <a href="#" className="btn btn--rounded">
                Ver Cursos
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-2.jpg)" }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>
                Equipamentos <br /> de Rede
              </h3>
              <a href="#" className="btn btn--rounded">
                Ver Mais
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>Computadores</h3>
              <a href="#" className="btn btn--rounded">
                Ver Todas
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Por que você deve escolher-nos?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Envio Grátis</h4>
                <p>
                  Todas as compras acima de 50.000 kz são elegíveis para frete
                  grátis via Correio de Primeira Classe USPS.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Pagamentos facilitados</h4>
                <p>
                  Todos os pagamentos são processados ​​instantaneamente através
                  de um pagamento seguro protocolo.{" "}
                </p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Garantia de devolução de dinheiro</h4>
                <p>
                  Se um item chegou danificado ou você mudou de ideia, você pode
                  enviá-lo de volta para um reembolso total.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Melhor qualidade</h4>
                <p>
                  Projetado para durar, cada um de nossos produtos foi elaborado
                  com os melhores materiais.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
