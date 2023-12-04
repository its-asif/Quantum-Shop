import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';

const MyCart = () => {

    const product = useLoaderData();
    
    const { user } = useContext(AuthContext);
    const { email } = user;
    const [myCart, setMyCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://quantum-alchemy-server-jnvuyjsze-asifs-projects-ab8578b3.vercel.app/user');
                const data = await response.json();
                const currentUser = data.find(user => user.email === email);
                const userCart = currentUser.myCart;
                setMyCart(userCart);
                // console.log(myCart)
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []); 

    const handleDeleteProduct = (id) => {
        // console.log(id);   
        
        const newCart = myCart.filter(item => item !== id);
        // console.log(newCart);
        
        const updatedUser = {...user, myCart: newCart};
        setMyCart(newCart);
        // console.log(newCart)

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
                    toast.success('Product removed from your cart!');
                }
            })
            .catch(err => console.log(err));

    }

    // filter
    const myCartProducts = product.filter(prod => myCart.includes(prod._id));
    const totalPrice = myCartProducts.map(prod => prod.price).reduce((a, b) => +a + +b, 0);
    const vat = +totalPrice * 0.05;
    // discount -> 10% if total price > 50000 else if total price > 100000 -> 20%
    const discount = +totalPrice > 100000 ? totalPrice * 0.2 : +totalPrice > 50000 ? +totalPrice * 0.1 : 0;
    const haveToPay = +totalPrice.toFixed(0) + +vat.toFixed(0) - +discount.toFixed(0);
    // console.log(totalPrice);
    



    return (
        <div>
            <Toaster></Toaster>
            <div>
            <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl">

                {/* title */}
                <header className="text-center">
                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">My Cart</h1>
                </header>

                <div className="mt-8">
                    <ul className="space-y-4">
                    {
                        myCartProducts.map( prod => (
                            <li key={product._id} className="flex items-center gap-4">
                                <img src={prod.image}
                                className="h-28 rounded object-cover"
                                />
                                {/* Name & description */}
                                <div>
                                    {/* <p>{prod._id}</p> */}
                                <h3 className=" text-gray-900">{prod.name}</h3>

                                <dl className="mt-0.5 space-y-px text-xs text-gray-600">
                                    <div>
                                    <dt className="inline">Brand: </dt>
                                    <dd className="inline">{prod.brandName}</dd>
                                    </div>

                                    <div>
                                    <dt className="inline">Type: </dt>
                                    <dd className="inline">{prod.type}</dd>
                                    </div>
                                    
                                </dl>
                                </div>

                                <div className="flex flex-1 items-center justify-end gap-2">
                                <form>
                                    <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                                    <input
                                    type="number"
                                    value={prod.price}
                                    id="Line1Qty"
                                    className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                    />
                                </form>

                                {/* delete button */}
                                <button className="text-gray-600 transition hover:text-red-600" onClick={() =>handleDeleteProduct(prod._id)}>
                                    <span className="sr-only">Remove item</span>

                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                    </svg>
                                </button>
                                </div>
                            </li>
                        ))
                    }
                    </ul>
                    
                    <p className="text-xs text-right mt-5">* you can get 20% discount if you buy more than 1,00,000 & 10% discount if more than 50,000  </p>

                    <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                    <div className="w-screen max-w-lg space-y-4">
                        <dl className="space-y-0.5 text-sm text-gray-700">
                        <div className="flex justify-between">
                            <dt>Subtotal</dt>
                            <dd>{ totalPrice}</dd>
                        </div>

                        <div className="flex justify-between">
                            <dt>VAT</dt>
                            <dd>{vat.toFixed(0)}</dd>
                        </div>

                        <div className="flex justify-between">
                            <dt>Discount</dt>
                            <dd>{discount.toFixed(0)}</dd>
                        </div>

                        <div className="flex justify-between !text-base font-medium">
                            <dt>Total</dt>
                            <dd>{haveToPay.toFixed(0)}</dd>
                        </div>
                        </dl>

                        <div className="flex justify-end">
                        <span
                            className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                            
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="-ms-1 me-1.5 h-4 w-4"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                            />
                            </svg>

                            <p className="whitespace-nowrap text-xs">
                                {
                                    +totalPrice > 100000 ? '20% discount applied' : +totalPrice > 50000 ? '10% discount applied' : 'No discount applied'
                                }
                            </p>
                        </span>
                        </div>

                        <div className="flex justify-end">
                        <a
                            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                            onClick={ () => toast.success('Checkout successful')}
                        >
                            Checkout
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            </div>
        </div>
    );
};

export default MyCart;