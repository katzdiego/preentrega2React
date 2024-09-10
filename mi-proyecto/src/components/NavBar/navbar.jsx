import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <h2>E-Commerce </h2>
            <div>💻</div>
            <div className="nav-links">
                <NavLink 
                    to="/category/celulares" 
                    className={({ isActive }) => isActive ? 'active' : ''}>
                    Celulares y accesorios
                </NavLink>

                <NavLink 
                    to="/category/entretenimiento" 
                    className={({ isActive }) => isActive ? 'active' : ''}>
                    Entretenimiento
                </NavLink>

                <NavLink 
                    to="/category/computacion" 
                    className={({ isActive }) => isActive ? 'active' : ''}>
                    Computación
                </NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;