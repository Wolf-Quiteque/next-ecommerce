import Layout from '../../layouts/Main';
import { useSelector } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import CheckoutItems from '../../components/checkout/items';
import { RootState } from 'store';

const CheckoutPage = () => {

  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if(cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }

    return totalPrice;
  })

  return (
    <Layout>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Pagamento</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="checkout__btns">
                <button className="btn btn--rounded btn--yellow">Iniciar sessão </button>
                <button className="btn btn--rounded btn--border">Inscrever-se</button>
              </div>

              <div className="block">
                <h3 className="block__title">Informação de Entrega</h3>
                <form className="form">
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Email" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Endereço" />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Nome" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Cidade" />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Ultimo Nome" />
                    </div>

                   
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Nº Telefone" />
                    </div>

              
                  </div>
                </form>
              </div>
            </div>
            
            <div className="checkout__col-4">
              <div className="block">
                <h3 className="block__title">Forma de pagamento</h3>
                <h4>GISTECH</h4>
                <h5>AO06 0000.0004.2323.2334.2</h5>
                <ul className="round-options round-options--three">
                  
                  <li className="round-item">
                    <img src="/images/logos/paypal.png" alt="Paypal" />
                  </li>
                  
                </ul>
      
              </div>

              <div style={{color:"black"}}><h6><span style={{color:"red"}}>OBS:</span>Todo comprovativo dever ser enviado em uma das opções:</h6><br/> <h6>-comercial@gisetech.co.ao</h6> 
              <br/>
              
              <h6>-whatsapp <br/>  948 833 276 <br/> 990 762 193</h6>
              </div>
         
            </div>
            
            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Teu Carrinho</h3>
                <CheckoutItems />
                
                <div className="checkout-total">
                  <p>Total cost</p>
                  <h3>{(Math.round(priceTotal * 100) / 100).toFixed(2)} kz</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cart-actions cart-actions--checkout">
            <a href="/cart" className="cart__btn-back"><i className="icon-left"></i> Voltar</a>
            <div className="cart-actions__items-wrapper">
              <button type="button" className="btn btn--rounded btn--border">Loja</button>
              <button type="button" className="btn btn--rounded btn--yellow">Confirmar</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
};

  
export default CheckoutPage