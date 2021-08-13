import headerStyle from './app-header.module.css';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

export const AppHeader = () => {
  return (
    <header className={headerStyle.header}>
      <div className={`app-container ${headerStyle.headerWrapper}`}>
        <nav className={headerStyle.nav}>
          <ul className={headerStyle.navList}>
            <li>
              <a href="##" className={headerStyle.navLink}>
                <BurgerIcon type="primary" />
                <span className="text text_type_main-default ml-2">
                  Конструктор
                </span>
              </a>
            </li>
            <li>
              <a href="##" className={headerStyle.navLink}>
                <ListIcon type="secondary" />
                <span className="text text_type_main-default text_color_inactive ml-2">
                  Лента заказов
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <div className={headerStyle.logo}>
          <Logo />
        </div>
        <div className={headerStyle.account}>
          <a href="##" className={headerStyle.navLink}>
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
