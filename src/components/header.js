import React, { useState, useEffect} from 'react' 
import { Link } from 'react-router-dom'
import iconCart from '../assets/images/iconCart.png' 
import { useSelector, useDispatch } from 'react-redux' 
import { toggleStatusTab } from '../stores/cart'

const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts])
    const handleOpenTabCart = () => {
        dispatch(toggleStatusTab());
    }
  return (
<header className="bg-white shadow-md p-4">
  <nav className="flex justify-between items-center max-w-7xl mx-auto">
    {/* Menu items */}
    <ul className="hidden md:flex space-x-8 text-lg font-medium">
      <li>
        <Link to="/productos" className="text-gray-700 hover:text-blue-500 transition duration-300">
          Productos
        </Link>
      </li>
      <li>
        <Link to="/contacto" className="text-gray-700 hover:text-blue-500 transition duration-300">
        Contacto
        </Link>
      </li>
      <li>
        <Link to="/ubicaciones" className="text-gray-700 hover:text-blue-500 transition duration-300">
          Ubicacion
        </Link>
      </li>
    </ul>

    {/* Carrito */}
    <div className="relative">
      <div
        className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer"
        onClick={handleOpenTabCart}
      >
        <img src={iconCart} alt="Carrito" className="w-6" />
      </div>
      <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold
      w-5 h-5 rounded-full flex justify-center items-center">
        {totalQuantity}
      </span>
    </div>

    {/* Botón de menú hamburguesa para móvil */}
    <div className="md:hidden flex items-center">
      <button className="text-gray-600 focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </nav>
</header>

  )
}

export default Header