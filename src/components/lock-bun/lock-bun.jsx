import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

export const LockBun = (props) => {
  const { type, bun } = props;

  return (
    <div className="ml-8 mr-4">
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
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }),
};
