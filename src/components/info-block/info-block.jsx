import styles from './info-block.module.css';
import PropTypes from 'prop-types';

export const InfoBlock = (props) => {
  const { type } = props;

  return (
    <section className={styles.message}>
      {type === 'loading' && (
        <p className="text text_type_main-large">Загрузка...</p>
      )}
      {type === 'error' && (
        <>
          <p className="text text_type_main-large">Ошибка</p>
          <p className="text text_type_main-medium">
            Попробуйте перезагрузить страницу
          </p>
        </>
      )}
    </section>
  );
};

InfoBlock.propTypes = {
  type: PropTypes.oneOf(['loading', 'error']).isRequired,
};

InfoBlock.displayName = 'InfoBlock';
