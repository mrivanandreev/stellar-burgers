import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import styles from './constructor-dropzone.module.css';
import { addBun, addFilling, removeFilling } from '../../services/actions/burger-constructor';
import { LockBun } from '../lock-bun/lock-bun';
import { DragConstructorCard } from '../drag-consructor-card/drag-consructor-card';
import { updateCurrentOrderContent } from '../../services/actions/order';

export const ConstructorDropzone = () => {
  const dispatch = useDispatch();

  const { bun, filling } = useSelector((store) => store.burgerConstructor);

  const [{ isHovered }, dropRef] = useDrop({
    accept: bun ? ['bun', 'main', 'sauce'] : 'bun',
    drop: (item) => (item.type === 'bun' ? dispatch(addBun(item)) : dispatch(addFilling(item))),
    collect: (monitor) => ({
      isHovered: monitor.isOver(),
    }),
  });

  useEffect(() => {
    // массив id ингредиентов по порядку
    // если нет начинки, то пустой массив
    const orderIngredientsIDs = filling.length
      ? [bun._id, ...filling.map((item) => item._id), bun._id]
      : [];

    dispatch(updateCurrentOrderContent(orderIngredientsIDs));
  }, [bun, filling]);

  const handleRemoveFillingFromConstructor = (item) => {
    dispatch(removeFilling(item));
  };

  return (
    <>
      {bun && <LockBun type="top" bun={bun} />}
      <div
        ref={dropRef}
        className={`${styles.constructorDropzoneWrapper} ${
          !filling.length ? styles.cleanDropzone : ''
        } ${isHovered ? styles.hoveredCleanDropzone : ''}`}
      >
        {!bun && (
          <p className={`text text_type_main-default ${isHovered ? '' : 'text_color_inactive'}`}>
            Перенесите сюда булку
          </p>
        )}
        {bun && !filling.length && (
          <p className={`text text_type_main-default ${isHovered ? '' : 'text_color_inactive'}`}>
            Перенесите сюда как можно больше начинок и соусов
          </p>
        )}
        {!!filling.length &&
          filling.map((item, index) => (
            <DragConstructorCard
              key={index}
              index={index}
              data={item}
              handleRemove={handleRemoveFillingFromConstructor}
            />
          ))}
      </div>
      {bun && <LockBun type="bottom" bun={bun} />}
    </>
  );
};

ConstructorDropzone.displayName = 'ConstructorDropzone';
