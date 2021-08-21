import styles from './burger-constructor.module.css';
import { ConstructorDropzone } from '../constructor-dropzone/constructor-dropzone';
import { ConstructorFooter } from '../constructor-footer/constructor-footer';
import { OrderDetails } from '../order-details/order-details';

export const BurgerConstructor = () => (
  <section className={`${styles.wrapper} mt-25 ml-5 mr-5 mb-10`}>
    <ConstructorDropzone />
    <ConstructorFooter />
    <OrderDetails />
  </section>
);

BurgerConstructor.displayName = 'BurgerConstructor';
