import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import constructorStyle from './burger-constructor.module.css';
import { LockBun } from '../lock-bun/lock-bun';
import { DragConstructorIngredient } from '../drag-consructor-ingredient/drag-consructor-ingredient';
// import { OrderDetails } from '../order-details/order-details';

export const BurgerConstructor = () => {
  // const [isOrderDetailsModalOpen, setOrderDetailsModalOpen] = useState(false);
  const { bun, burgerFilling } = useSelector(
    (store) => store.burgerConstructor,
  );

  // const handleOpenOrderDetailsModal = () => {
  //   setOrderDetailsModalOpen(true);
  // };

  const costOfBurger = useMemo(() => {
    const costOfIngredient = burgerFilling.reduce(
      (acc, item) => acc + item.price,
      0,
    );

    return bun.price * 2 + costOfIngredient;
  }, [burgerFilling, bun]);

  return (
    <section className="ml-5 mr-5">
      <div
        className={`${constructorStyle.constructorWrapper} mt-25 ml-4 mb-10`}
      >
        <LockBun type="top" bun={bun} />
        <div className={constructorStyle.dragWrapper}>
          {burgerFilling.map((item) => (
            <DragConstructorIngredient
              key={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        <LockBun type="bottom" bun={bun} />
      </div>
      <div className={constructorStyle.footer}>
        <div className="mr-10">
          <span className="text text_type_digits-medium">{costOfBurger}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          type="primary"
          size="large"
          // onClick={handleOpenOrderDetailsModal}
        >
          Оформить заказ
        </Button>
      </div>
      {/* <OrderDetails
        isOpen={isOrderDetailsModalOpen}
        setOpen={setOrderDetailsModalOpen}
      /> */}
    </section>
  );
};

BurgerConstructor.displayName = 'BurgerConstructor';
