import styles from './app-header.module.css';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={`app-container ${styles.headerWrapper}`}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="##" className={styles.navLink}>
                <BurgerIcon type="primary" />
                <span className="text text_type_main-default ml-2">
                  Конструктор
                </span>
              </a>
            </li>
            <li>
              <a href="##" className={styles.navLink}>
                <ListIcon type="secondary" />
                <span className="text text_type_main-default text_color_inactive ml-2">
                  Лента заказов
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.account}>
          <a href="##" className={styles.navLink}>
            <ProfileIcon type="secondary" />
            <span className="text text_type_main-default text_color_inactive">
              Личный кабинет
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

AppHeader.displayName = 'AppHeader';
