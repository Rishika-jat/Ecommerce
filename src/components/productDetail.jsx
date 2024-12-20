


import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import Navbar from "./Navbar/Navbar";
import {useState} from "react"
import Footer from "./footer/Footer";
import { FaShoppingBag } from "react-icons/fa";
import { addToCart } from './actions/ProductAction';
 

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch(); //Initialize dispatch
  console.log(product)
  const [displayImage, setDisplayImage] = useState(product.images[0]);
  const [itemQuantity, setItemQuantity] = useState(1);

  let creation = product.category.creationAt;
  let date = new Date(creation);
  let creationDate = date.toISOString().split("T")[0];

  let update = product.category.updatedAt;
  date = new Date(update);
  let updatedDate = date.toISOString().split("T")[0];


  const handleAddToCart=(product)=>{
   console.log(product)
   dispatch(addToCart(product)); //Dispatch addTocart action
  }

  const handleDecreaseQuantity=()=>{

if(itemQuantity>1) setItemQuantity(itemQuantity-1)
  }
  const handleIncreaseQuantity=()=>{
setItemQuantity(itemQuantity+1)
  }

  return (
    <div>
     
      <div className="mx-32 my-16 flex gap-10">
        <div>
          <div>
            <img
              src={product.images[0]}
              alt="img1"
              id="0"
              width={180}
              onClick={() => {
                setDisplayImage(product.images[0]);
              }}
            />
          </div>
          <div>
            <img
              src={product.images[1]}
              alt="img2"
              id="1"
              width={180}
              onClick={() => {
                setDisplayImage(product.images[1]);
              }}
            />
          </div>
          <div>
            <img
              src={product.images[2]}
              alt="img3"
              id="2"
              width={180}
              onClick={() => {
                setDisplayImage(product.images[2]);
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <img src={displayImage} alt="main-img" width={550} />
          </div>
        </div>
        <div>
          <div>
            <p className="text-color-blue text-3xl font-bold">
              ${product.price}
            </p>

            <h1 className="text-4xl">{product.title}</h1>
            <h3>{product.category.name}</h3>
            <span className="text-gray-500">id:{product.id}</span><br />
            <span className="text-gray-500">creation:{creationDate}</span><br />
            <span className="text-gray-500">update:{updatedDate}</span><br />
            <span className="text-gray-500">stock:Many in stock</span><br />
            <p>{product.description}</p><br />

            {/* <div className="flex gap-2">
              <button className=" bg-white">S</button>
              <button className="bg-white">M</button>
              <button className="bg-white">L</button>
              <button className="bg-white">XL</button>
            </div> */}
            <div className='flex items-center justify-evenly gap-5'>
              <div className="flex mt-3">
                <button className="border-0 px-5 py-2 text-gray-500 text-2xl" onClick={handleDecreaseQuantity}>-</button>
                <button className=" px-4 py-2 font-bold border-0">{itemQuantity}</button>
                <button className="border-0 px-4 py-2 text-gray-500 text-2xl" onClick={handleIncreaseQuantity}>+</button>
              </div>
              <div className="color-blue w-32 flex items-center justify-center mt-4">
                <FaShoppingBag color="white"/>
                <button className="color-blue text-white border-0 font-bold py-3 px-4" onClick={()=>handleAddToCart(product)} >
                  Add to cart
                </button>
              </div>
            </div>            
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default ProductDetail;

