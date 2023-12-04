import { Link, NavLink } from 'react-router-dom';

const Brands = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10'>

            
            {/* 1 */}
            <Link to='brand/Microsoft'>
            <div className="card bg-base-100 shadow-xl image-full cursor-pointer h-full">
                <figure><img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Surface-Laptop-Studio-RWNvVR?fmt=png-alpha&scl=1" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto my-auto text-4xl">Microsoft</h2>   
                </div>
            </div></Link>

            
            {/* 2 */}
            <Link to='brand/Dell'>
            <div className="card bg-base-100 shadow-xl image-full cursor-pointer h-full">
                <figure><img src="https://blogs.windows.com/wp-content/uploads/prod/2016/09/Dell-Sept-14.jpg" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto my-auto text-4xl">Dell </h2>   
                </div>
            </div></Link>

            
            {/* 3 */}
            <Link to='brand/Samsung'>
            <div className="card bg-base-100 shadow-xl image-full cursor-pointer h-full">
                <figure><img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Samsung_Notebook_Flash_launches_in_South_Korea_October_2018.jpg" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto my-auto text-4xl">Samsung</h2>   
                </div>
            </div></Link>

            
            {/* 4 */}
            <Link to='brand/Lenovo'>
            <div className="card bg-base-100 shadow-xl image-full cursor-pointer h-full">
                <figure><img src="https://www.lenovo.com/medias/lenovo-laptops-ideapad-5-15in-intel-hero.png?context=bWFzdGVyfHJvb3R8MjQ1MzM5fGltYWdlL3BuZ3xoMDMvaDZmLzE0MTkxNjE1NDQyOTc0LnBuZ3wwZmM1N2FhMWMwODkxYTIwNjRkMWI2NDNlM2RjMjNiM2VlNGZiZGE4NmUzYWQxOTQ1OWY3N2YxN2M1MGM5NDYz" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto my-auto text-4xl">Lenovo</h2>   
                </div>
            </div></Link>

            
            {/* 5 */}
            <Link to='brand/Apple'>
            <div className="card bg-base-100 shadow-xl image-full cursor-pointer h-full">
                <figure><img src="https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117_Full-Bleed-Image.jpg.large.jpg" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto my-auto text-4xl">Apple</h2>   
                </div>
            </div></Link>

            
            {/* 6 */}
            <Link to='brand/HP'>
            <div className="card bg-base-100 shadow-xl image-full cursor-pointer h-full">
                <figure><img src="https://api.time.com/wp-content/uploads/2016/04/hp-spectre-13-3_aerial-view.jpg" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto my-auto text-4xl">HP</h2>   
                </div>
            </div></Link>


        </div>
    );
};

export default Brands;