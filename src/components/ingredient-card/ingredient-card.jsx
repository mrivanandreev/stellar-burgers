import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragPreviewImage, useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import styles from './ingredient-card.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { openDetailsModal } from '../../services/actions/details-modal';

export const IngredientCard = (props) => {
  const { data } = props;

  const dispatch = useDispatch();

  const { bun, filling } = useSelector((store) => store.burgerConstructor);

  const [{ isDragging }, dragRef, dragPreview] = useDrag({
    type: data.type,
    item: data,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  // подсчёт количества ингредиента в конструкторе
  const count = useMemo(() => {
    if (data.type !== 'bun') {
      return filling.reduce((acc, current) => {
        if (current._id === data._id) {
          return acc + 1;
        }
        return acc;
      }, 0);
    }
    return bun?._id === data._id ? 2 : 0;
  }, [bun, filling]);

  const handleDetailsModalOpen = () => {
    dispatch(openDetailsModal(data));
  };

  return (
    <>
      <DragPreviewImage src={data.image} connect={dragPreview} />
      <li ref={dragRef} className={`${styles.card} ${isDragging ? styles.draggingCard : ''}`} onClick={handleDetailsModalOpen}>
        <img src={data.image} alt={data.name} className="ml-4 mr-4" />
        <div className={`${styles.price} mt-1 mb-1`}>
          <span className="text text_type_digits-default">{data.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <div className={styles.name}>
          <span className="text text_type_main-default">{data.name}</span>
        </div>
        {count >= 1 && <Counter count={count} size="default" />}
      </li>
    </>
  );
};

IngredientCard.propTypes = {
  data: PropTypes.shape({
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

IngredientCard.displayName = 'IngredientCard';
