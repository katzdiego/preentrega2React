import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <h2>E-Commerce </h2>
            <div>💻</div>
            <div>
                <button>Celulares y accesorios</button>
                <button>Entretenimiento</button>
                <button>Computación</button>
            </div>
            <CartWidget />
        </nav>
    )    
}



export default NavBar 