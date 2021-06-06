import React from "react";
import ingredientTypeListStyles from "./ingredient-type-list.module.css";
import { IngredientCard } from "../ingredient-card/ingredient-card";
import PropTypes from "prop-types";

export const IngredientTypeList = (props) => {
  const { heading, list } = props;
  
  return (
    <>
      <h3 className="text text_type_main-medium mt-10 mb-6">{heading}</h3>
      <div className={`${ingredientTypeListStyles.list} ml-4 mr-2`}>
        {list.map((item) => (
          <IngredientCard
            key={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
            image_large={item.image_large}
            calories={item.calories}
            proteins={item.proteins}
            fat={item.fat}
            carbohydrates={item.carbohydrates}
          />
        ))}
      </div>
    </>
  );
};

IngredientTypeList.propTypes = {
  heading: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
    })
  ),
};
