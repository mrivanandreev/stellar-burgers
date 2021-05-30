import React from 'react';
import ingredientTypeListStyles from './ingredient-type-list.module.css';
import { IngredientCard } from '../ingredient-card/ingredient-card';
import PropTypes from 'prop-types';

export const IngredientTypeList = ({ heading, list }) => {
  return (
    <>
      <h3 className='text text_type_main-medium mt-10 mb-6'>
        {heading}
      </h3>
      <div className={`${ingredientTypeListStyles.list} ml-4 mr-2`}>
        {list.map((item) => (
          <React.Fragment key={item._id}>
            <IngredientCard
              name={item.name}
              price={item.price}
              image={item.image}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

IngredientTypeList.propTypes = {
  heading: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }))
};