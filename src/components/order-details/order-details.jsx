import { useDispatch, useSelector } from 'react-redux';
import styles from './order-details.module.css';
import { Modal } from '../modal/modal';
import { closeOrderDetailsModal } from '../../services/actions/order';
import orderDetailsIcon from '../../images/order-details-icon.svg';

export const OrderDetails = () => {
  const dispatch = useDispatch();

  const { isOrderDetailsModalOpen, createdOrders } = useSelector((store) => store.order);

  // так как я сохраняю все созданные заказы в массиве,
  // то обращаемся к последнему элементу массива созданных заказов
  const lastOrder = createdOrders[createdOrders.length - 1];

  const handleIngredientDetailsClose = () => {
    dispatch(closeOrderDetailsModal());
  };

  if (!isOrderDetailsModalOpen) return null;

  return (
    <Modal onClose={handleIngredientDetailsClose}>
      <div className={`${styles.wrapper} pt-30 pl-10 pr-10 pb-30`}>
        <p className={`text text_type_digits-large mb-8 ${styles.orderNumber}`}>{lastOrder?.number}</p>
        <p className="text text_type_main-medium mb-15">{lastOrder?.name}</p>
        <img src={orderDetailsIcon} alt="" className="mb-15" />
        <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </Modal>
  );
};

OrderDetails.displayName = 'OrderDetails';
