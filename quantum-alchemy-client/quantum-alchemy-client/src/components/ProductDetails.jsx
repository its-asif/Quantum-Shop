import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from "sweetalert2";

const ProductDetails = () => {
    
    const product = useLoaderData();
    const {_id, name, brandName, type, price, rating, description, image } = product;
    const { user } = useContext(AuthContext);
    const { email } = user;
    
    const handleAddToCart = (e) => {
        e.preventDefault();
        
        // fetch user data
        fetch('https://quantum-alchemy-server-jnvuyjsze-asifs-projects-ab8578b3.vercel.app/user')
        .then(res => res.json())
        .then(data => {
            const user = data.find(user => user.email === email);
            const myCart = user.myCart;
            if(!myCart.includes(_id)){
                myCart.push(_id);
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Product already added to your cart!',
                    confirmButtonText : 'Cool',
                })
            }
            const updatedUser = {...user, myCart: myCart};
            // console.log(updatedUser);

            // update user data
            fetch(`https://quantum-alchemy-server-jnvuyjsze-asifs-projects-ab8578b3.vercel.app/user/${email}`,{
                method: 'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            
            })
                .then(res => res.json())
                .then(data => {
                    if(data.modifiedCount > 0){
                        // if press the button it should take me to the cart page & refresh the page
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: 'Product added to your cart!',
                            confirmButtonText : 'Cool',
                        }).then(result => {
                            if(result.isConfirmed){
                                window.location.reload();
                            }
                        })
                    }
                })
        })
            

    }

    return (
        <div>
        <div  className="group relative block overflow-hidden md:w-1/2 mx-auto my-10">
            
            <img
                src={image}
                alt=""
                className="h-64 mx-auto object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />

            <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium" > 
                {type}
                </span>

                <div className="mt-4 flex">
                    <h3 className="text-2xl font-medium text-gray-900 mr-3">{name}</h3>
                    <p className='mt-3  text-sm'> - {brandName}</p>
                </div>

                <p className="mt-1.5 text-sm text-gray-700">{price} ৳</p>

                <form className="mt-4">
                <button onClick={handleAddToCart} className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105" >
                    Add to Cart
                </button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;