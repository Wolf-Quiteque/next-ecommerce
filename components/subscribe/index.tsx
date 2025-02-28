const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div
          style={{ backgroundImage: "url(/images/subscribe.jpg)" }}
          className="subscribe__content"
        >
          <h4>
            Assine nossa newsletter e receba ofertas exclusivas toda semana
          </h4>

          <form className="subscribe__form">
            <input type="email" placeholder="Email" />
            <button type="submit" className="btn btn--rounded btn--yellow">
              Se inscrever
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
