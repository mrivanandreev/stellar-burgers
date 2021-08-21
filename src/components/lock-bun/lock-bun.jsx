import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

export const LockBun = (props) => {
  const { type, bun } = props;

  return (
    <div className={`${type === 'top' ? 'mb-4' : 'mt-4'} ml-8 mr-4`}>
      <ConstructorElement
        type={type}
        isLocked={true}
        text={type === 'top' ? `${bun.name} (верх)` : `${bun.name} (низ)`}
        price={bun.price}
        thumbnail={bun.image}
      />
    </div>
  );
};

LockBun.propTypes = {
  type: PropTypes.oneOf(['top', 'bottom']),
  bun: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    __v: PropTypes.number,
    _id: PropTypes.string.isRequired,
  }),
};

LockBun.displayName = 'LockBun';
