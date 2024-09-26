import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getCartTotal } from "../features/cartSlice"



const Navbar = () => {

  const {cart, totalQuantity}  = useSelector((state: any) => state.allCart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart])

  return (
    <nav className="navbar navbar-light bg-body-tertiary">
  <div className="container-fluid">
     
           <a className="navbar-brand nav-logo">Kalpesh Mobile Store</a>
           <span><Link to="/">All Product</Link></span>
           <button type="button" className="btn btn-light" id="btn-cart" data-mdb-ripple-init>
              <Link to="/cartpage" className="cart-button">
                   CART({totalQuantity})
              </Link>
            </button>
       
  </div>
</nav>
  )
}

export default Navbar
