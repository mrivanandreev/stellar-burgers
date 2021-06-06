import React, { useState } from "react";
import PropTypes from 'prop-types';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import constructorStyle from "./burger-constructor.module.css";
import { LockBun } from "../lock-bun/lock-bun";
import { DragConstructorIngredient } from "../drag-consructor-ingredient/drag-consructor-ingredient";
import { OrderDetails } from '../order-details/order-details';

export const BurgerConstructor = ({ ingredients }) => {
  const [isOrderDetailsModalOpen, setOrderDetailsModalOpen] = useState(false);

  const fillingBurger = ingredients.filter(item => item.type === 'main' || item.type === 'sauce');

  const handleOpenOrderDetailsModal = () => {
    setOrderDetailsModalOpen(true);
  }

  return (
    <section className="ml-5 mr-5">
      <div
        className={`${constructorStyle.constructorWrapper} mt-25 ml-4 mb-10`}
      >
        <LockBun
          type="top"
          text="Флюоресцентная булка R2-D3"
          price={988}
          image="https://code.s3.yandex.net/react/code/bun-01.png"
        />
        <div className={constructorStyle.dragWrapper}>
          {fillingBurger.map((item) => (
            <DragConstructorIngredient
              key={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        <LockBun
          type="bottom"
          text="Краторная булка N-200i"
          price={1255}
          image="https://code.s3.yandex.net/react/code/bun-02.png"
        />
      </div>
      <div className={constructorStyle.footer}>
        <div className='mr-10'>
          <span className="text text_type_digits-medium">610</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={handleOpenOrderDetailsModal}>
          Оформить заказ
        </Button>
      </div>
      <OrderDetails isOpen={isOrderDetailsModalOpen} setOpen={setOrderDetailsModalOpen} />
    </section>
  );
};

BurgerConstructor.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
    image: PropTypes.string,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    proteins: PropTypes.number,
    type: PropTypes.string,
    __v: PropTypes.number,
    _id: PropTypes.string,
  })
);
