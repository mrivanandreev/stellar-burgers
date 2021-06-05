import React from "react";
import constructorStyle from "./burger-constructor.module.css";
import { LockBun } from "../lock-bun/lock-bun";
import { DragConstructorIngredient } from "../drag-consructor-ingredient/drag-consructor-ingredient";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from '../../utils/data';

export const BurgerConstructor = () => {

  const fillingBurger = data.filter(item => item.type === 'main' || item.type === 'sauce');

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
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};
