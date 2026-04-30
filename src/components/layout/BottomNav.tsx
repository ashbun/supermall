import { NavLink } from 'react-router-dom';
import { HomeFilled, HomeIcon, GridIcon, PersonIcon, CartIcon } from '../ui/icons';
import { useCartStore } from '../../store/cartStore';
import './BottomNav.css';

// Supermall centre logo – expires in 7 days, replace with a local asset
const IMG_SUPERMALL_LOGO = 'https://www.figma.com/api/mcp/asset/4a26b0fb-086e-41bb-8372-d04abd3b9437';

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
              {isActive
                ? <HomeFilled size={22} color="#2122b8" />
                : <HomeIcon size={22} color="var(--grey-500)" />}
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
              <GridIcon size={22} color={isActive ? '#2122b8' : 'var(--grey-500)'} />
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
              <PersonIcon size={22} color={isActive ? '#2122b8' : 'var(--grey-500)'} />
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
                <CartIcon size={22} color={isActive ? '#2122b8' : 'var(--grey-500)'} />
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
