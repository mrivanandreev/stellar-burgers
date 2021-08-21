import { useDispatch, useSelector } from 'react-redux';
import styles from './ingredient-details.module.css';
import { Modal } from '../modal/modal';
import { closeDetailsModal} from '../../services/actions/details-modal';

export const IngredientDetails = () => {
  const dispatch = useDispatch();

  const { isOpen, details } = useSelector(
    (store) => store.detailsModal,
  );

  const handleIngredientDetailsClose = () => {
    dispatch(closeDetailsModal());
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={handleIngredientDetailsClose}>
      <div
        className={`${styles.wrapper} pt-10 pr-10 pb-15 pl-10`}
      >
        <h1
          className={`${styles.heading} text text_type_main-large`}
        >
          Детали ингредиента
        </h1>
        <img src={details.image_large} alt={details.name} className="mb-4" />
        <p className="text text_type_main-medium mb-8">{details.name}</p>
        <div
          className={`${styles.supplementFactsBlock} text_color_inactive`}
        >
          <div className={styles.supplementFact}>
            <p className="text text_type_main-default">Калории,&nbsp;ккал</p>
            <p className="text text_type_digits-default">{details.calories}</p>
          </div>
          <div className={styles.supplementFact}>
            <p className="text text_type_main-default">Белки,&nbsp;г</p>
            <p className="text text_type_digits-default">{details.proteins}</p>
          </div>
          <div className={styles.supplementFact}>
            <p className="text text_type_main-default">Жиры,&nbsp;г</p>
            <p className="text text_type_digits-default">{details.fat}</p>
          </div>
          <div className={styles.supplementFact}>
            <p className="text text_type_main-default">Углеводы,&nbsp;г</p>
            <p className="text text_type_digits-default">{details.carbohydrates}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

IngredientDetails.displayName = 'IngredientDetails';
