import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
  const loader = useLoaderData();

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 m-10'>
            {
                loader.map(product =>
                    <div key={product._id} className={`card bg-base-100 shadow-xl h-full`}>
                        
                        <figure ><img src={product.image} className='h-56 ' /></figure>
                        <div className="card-body">
                            <p>{product._id}</p>
                            <p><b>Name :</b> {product.name}</p>
                            <p><b>Brand :</b> {product.brandName}</p>
                            <p><b>Type :</b> {product.type}</p>
                            <p><b>Price:</b> {product.price} ৳</p>
                            <p><b>Rating:</b> {product.rating}</p>
                            <p><b>Description:</b> {product.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Products;