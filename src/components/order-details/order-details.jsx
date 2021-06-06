import React from "react";
import PropTypes from 'prop-types';
import orderDetailsStyles from "./order-details.module.css";
import orderDetailsIcon from "../../images/order-details-icon.svg";
import { Modal } from "../modal/modal";

export const OrderDetails = (props) => (
  <Modal {...props}>
    <div className={`${orderDetailsStyles.wrapper} pb-30 pt-30`}>
      <p className="text text_type_digits-large mb-8">034536</p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <img src={orderDetailsIcon} alt="" className="mb-15" />
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  </Modal>
);

OrderDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};
