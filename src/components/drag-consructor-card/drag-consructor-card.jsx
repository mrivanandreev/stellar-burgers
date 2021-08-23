import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import styles from './drag-consructor-card.module.css';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { swapFillings } from '../../services/actions/burger-constructor';

export const DragConstructorCard = (props) => {
  const { index, data, handleRemove } = props;

  const dispatch = useDispatch();

  const ref = useRef(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: 'drag-constructor-card',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isHovered }, dropRef] = useDrop({
    accept: 'drag-constructor-card',
    collect: (monitor) => ({
      isHovered: monitor.isOver(),
    }),
    hover: (item) => {
      if (!ref.current) return;

      const [dragIndex, hoverIndex] = [item.index, index];

      if (dragIndex === hoverIndex) return;

      dispatch(swapFillings({ from: dragIndex, to: hoverIndex }));

      item.index = hoverIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <div
      ref={ref}
      className={`mr-2 ${styles.wrapper} ${isDragging ? styles.dragging : ''}`}
      style={{ opacity: isHovered ? .1 : 1 }}
    >
      <div className={`${styles.dragIcon} mr-2`}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={data.name}
        price={data.price}
        thumbnail={data.image}
        handleClose={() => handleRemove(data)}
      />
    </div>
  );
};

DragConstructorCard.propTypes = {
  index: PropTypes.number.isRequired,
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
  handleRemove: PropTypes.func.isRequired,
};

DragConstructorCard.displayName = 'DragConstructorCard';
