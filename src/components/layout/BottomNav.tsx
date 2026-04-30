import { NavLink } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import './BottomNav.css';

// Figma icon assets (7-day expiration - should be replaced with local assets)
const IMG_HOME_ICON = 'https://www.figma.com/api/mcp/asset/8db7bea9-7539-4fad-b79d-f6554dc594bd';
const IMG_CATEGORIES_ICON = 'https://www.figma.com/api/mcp/asset/ae5b90a2-e196-490a-bdec-2bd7ba0ab2f5';
const IMG_ACCOUNT_ICON = 'https://www.figma.com/api/mcp/asset/39491f29-563e-4004-b233-385077ba70a8';
const IMG_CART_ICON = 'https://www.figma.com/api/mcp/asset/cf8d9202-3ec8-4370-a647-2eefdfeab3fd';
const IMG_SUPERMALL_LOGO = 'https://www.figma.com/api/mcp/asset/4928877e-20eb-4845-acfe-715ebec66497';

export function BottomNav() {
  const itemCount = useCartStore((s) => s.itemCount());

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav__items">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`}
        >
          {({ isActive }) => (
            <>
              <span className="bottom-nav__indicator" />
              <img src={IMG_HOME_ICON} alt="" className="bottom-nav__icon" />
              <span className="bottom-nav__label">Home</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) => `bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`}
        >
          {({ isActive }) => (
            <>
              <span className="bottom-nav__indicator" />
              <img src={IMG_CATEGORIES_ICON} alt="" className="bottom-nav__icon" />
              <span className="bottom-nav__label">Categories</span>
            </>
          )}
        </NavLink>

        {/* Centre logo */}
        <button className="bottom-nav__logo" aria-label="Supermall">
          <div className="bottom-nav__logo-circle">
            <img src={IMG_SUPERMALL_LOGO} alt="" className="bottom-nav__logo-img" />
          </div>
        </button>

        <NavLink
          to="/account"
          className={({ isActive }) => `bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`}
        >
          {({ isActive }) => (
            <>
              <span className="bottom-nav__indicator" />
              <img src={IMG_ACCOUNT_ICON} alt="" className="bottom-nav__icon" />
              <span className="bottom-nav__label">Account</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) => `bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`}
        >
          {({ isActive }) => (
            <>
              <span className="bottom-nav__indicator" />
              <div className="bottom-nav__cart-wrap">
                <img src={IMG_CART_ICON} alt="" className="bottom-nav__icon" />
                {itemCount > 0 && (
                  <span className="bottom-nav__badge">{itemCount > 99 ? '99+' : itemCount}</span>
                )}
              </div>
              <span className="bottom-nav__label">Cart</span>
            </>
          )}
        </NavLink>
      </div>

      {/* iOS home indicator */}
      <div className="bottom-nav__home-bar">
        <div className="bottom-nav__home-indicator" />
      </div>
    </nav>
  );
}
