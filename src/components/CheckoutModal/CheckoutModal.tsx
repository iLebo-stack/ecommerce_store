import cn from 'classnames';
import './CheckoutModal.scss';

interface Props {
  checkedOut: boolean;
  hideCheckoutModal: () => void;
}

export const CheckoutModal: React.FC<Props> = ({ checkedOut, hideCheckoutModal }) => (
  <section
    className={cn(
      'checkout-modal',
      {'checkout-modal--active': checkedOut },
    )}
  >
    <h2 className="checkout-modal__title">Successful!</h2>

    <p className="checkout-modal__text">Thank you for buying from us!</p>

    <button type="button" className="checkout-modal__button" onClick={hideCheckoutModal}>OK</button>
  </section>
);
