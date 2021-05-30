import React from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

export const LockBun = ({ type, text, price, image }) => {
  return (
    <div className='ml-8 mr-4'>
      <ConstructorElement
        type={type}
        isLocked={true}
        text={type === 'top' ? `${text} (верх)` : `${text} (низ)`}
        price={price}
        thumbnail={image}
      />
    </div>
  );
};

LockBun.propTypes = {
  type: PropTypes.oneOf(['top', 'bottom']).isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
