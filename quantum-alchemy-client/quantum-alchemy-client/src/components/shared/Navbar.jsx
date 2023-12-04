
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext, useEffect, useState } from 'react';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const email = user?.email;

    // get length of myCart
    const [len, setLen] = useState(0);
    useEffect(() => {
        fetch('https://quantum-alchemy-server-jnvuyjsze-asifs-projects-ab8578b3.vercel.app/user')
        .then(res => res.json())
        .then(data => {
            const user = data.find(user => user.email === email);
            const myCart = user.myCart;
            setLen(myCart.length);
            // console.log(user);
        })
    }, [email])




    const navlinks = (

        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">All Products</NavLink></li>
            { !user && <li><NavLink to="/signup">Register</NavLink></li>}
            { user &&(
                <div className="flex flex-col lg:flex-row">
                        <li><NavLink to="/addProduct ">Add Product</NavLink></li>
                    </div> )
            }
        </>)

    const handleSignOut = () =>{
        logOut()
            .then()
            .catch()
    }

    return (
        <div>
            <div className="navbar bg-base-100 lg:px-20 md:px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                    </div>

                    <img src="https://i.ibb.co/DzFL0HF/qa-low-resolution-logo-color-on-transparent-background.png"
                    className='w-14 lg:w-20'/>
                    <a className="font-bold text-xl md:text-4xl">Quantum </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                    user ? 
                    <>
                        <div className='hidden md:block mr-4'>
                            <Link to='/mycart'>
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{len}</span>
                            </div>    
                            </Link>
                        </div>
                            <p className="text-md font-bold mr-2">{user.displayName}</p>    
                        <div className="dropdown dropdown-end md:mx-2">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  bg-base-100 rounded-box w-52 md:hidden">
                                <li><Link to='/mycart'>
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">{len}</span>
                                    </div>    
                                    
                                My Cart</Link></li>
                                <li className='flex flex-row'> <img src="https://www.svgrepo.com/show/21304/logout.svg" className='w-10'/> <button onClick={handleSignOut}>LogOut</button></li>
                            </ul>
                        </div>
                        <button className="btn hidden md:block" onClick={handleSignOut} >LogOut</button>
                    </>
                    :
                    <Link to="/signin">
                        <button className="btn">Login</button>
                    </Link>
                }

                </div>
            </div>
        </div>
    );
};

export default Navbar;