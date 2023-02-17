type ProductDescriptionType = {
  show: boolean;
}

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Detalhes do Produto</h4>
        <p>WLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in pretium erat. <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in pretium erat. Aliquam</p>
      </div>
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Detalhes do Produto</h4>
        <p>WLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in pretium erat. <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in pretium erat. Aliquam</p>
     
      </div>
    </section>
  );
};
  
export default Description;
    