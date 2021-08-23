import PropTypes from 'prop-types';
import styles from './ingredient-type-list.module.css';
import { IngredientCard } from '../ingredient-card/ingredient-card';

export const IngredientTypeList = (props) => {
  const { heading, list } = props;

  return (
    <>
      <h3 className={`text text_type_main-medium ${heading !== 'Булки' ? 'mt-10' : ''} mb-6`}>
        {heading}
      </h3>
      <ul className={`${styles.list} ml-4 mr-2`}>
        {list.map((item) => (
          <IngredientCard
            key={item._id}
            data={item}
          />
        ))}
      </ul>
    </>
  );
};

IngredientTypeList.propTypes = {
  heading: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
};

IngredientTypeList.displayName = 'IngredientTypeList';
