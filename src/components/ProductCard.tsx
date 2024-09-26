import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";


const ProductCard = () => {
   
  const items = useSelector((state: any) => state.allCart.items);

  const dispatch = useDispatch();

  console.log(items)


  return (
    <div className="mx-5 my-3">
      <div className="row g-3">
             
             {
              items.map((item:any) => {
                   return (
                    <div key={item.id} className="col-12 col-md-6 col-lg-3">
        
                    <div className="card">
                      <img
                        src={item.img}
                        className="card-img-top"
                        alt="Fissure in Sandstone"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">
                          {item.price}
                        </p>
                        <a href="#" className="btn btn-primary" data-mdb-ripple-init onClick={() => dispatch(addToCart(item))}>
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  
                    </div>
                   )
              })
             }
       
                

     
      </div>
    </div>
  );
};

export default ProductCard;
