import { NavLink } from 'react-router-dom';
import { HomeFilled, HomeIcon, GridIcon, PersonIcon, CartIcon } from '../ui/icons';
import { useCartStore } from '../../store/cartStore';
import './BottomNav.css';

export function BottomNav() {
  const itemCount = useCartStore((s) => s.itemCount());

  return (
    <nav className="bottom-nav">
      <NavLink to="/" end className={({ isActive }) => `bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`}>
        {({ isActive }) => (
          <>
            {isActive ? <HomeFilled size={24} color="var(--supermall-800)" /> : <HomeIcon size={24} color="var(--grey-500)" />}
            <span>Home</span>
          </>
        )}
      </NavLink>

      <NavLink to="/shop" className={({ isActive }) => `bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`}>
        {({ isActive }) => (
          <>
            <GridIcon size={24} color={isActive ? 'var(--supermall-800)' : 'var(--grey-500)'} />
            <span>Categories</span>
          </>
        )}
      </NavLink>

      {/* Centre logo */}
      <button className="bottom-nav__logo" aria-label="Supermall">
        <div className="bottom-nav__logo-circle">
          <span className="bottom-nav__logo-text">S</span>
        </div>
      </button>

      <NavLink to="/account" className={({ isActive }) => `bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`}>
        {({ isActive }) => (
          <>
            <PersonIcon size={24} color={isActive ? 'var(--supermall-800)' : 'var(--grey-500)'} />
            <span>Account</span>
          </>
        )}
      </NavLink>

      <NavLink to="/cart" className={({ isActive }) => `bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`}>
        {({ isActive }) => (
          <>
            <div className="bottom-nav__cart-wrap">
              <CartIcon size={24} color={isActive ? 'var(--supermall-800)' : 'var(--grey-500)'} />
              {itemCount > 0 && (
                <span className="bottom-nav__badge">{itemCount > 99 ? '99+' : itemCount}</span>
              )}
            </div>
            <span>Cart</span>
          </>
        )}
      </NavLink>
    </nav>
  );
}
