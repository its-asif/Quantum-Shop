import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {

    const handleAddProduct = event =>{
        event.preventDefault();
        const form = event.target;
        
        const  name = form.name.value;
         const brandName = form.brandName.value;
         const image = form.image.value;
         const type = form.type.value;
         const price = form.price.value;
         const rating = form.rating.value;
         const description = form.description.value;


        const newProduct = { name, brandName, image, type, price, rating, description}

        console.log(newProduct);

        fetch('https://quantum-alchemy-server-jnvuyjsze-asifs-projects-ab8578b3.vercel.app/product',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data =>{
            // show sweetalert
            if(data.insertedId){
                toast.success("Product Added Successfully")
            }
        })

    }




    return (
        <div className="bg-[#F4F3F0] p-10 md:p-24 w-full">
            <Toaster/>
            <h2 className="text-3xl font-extrabold text-center mb-10 md:-mt-10">Add Product</h2>
            <form onSubmit={handleAddProduct}>
            {/* Name & Brand name*/}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2 mx-2">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Product Name" name="name" className="w-full input input-bordered " />
                    </label>
                </div>
                <div className="form-control md:w-1/2 mx-2">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <select class="select select-bordered w-full " name='brandName'>
                            <option disabled selected>Select Brand Name</option>
                            <option>Dell</option>
                            <option>HP</option>
                            <option>Lenovo</option>
                            <option>Apple</option>
                            <option>Samsung</option>
                            <option>Microsoft</option>
                        </select>
                    </label>
                </div>
            </div>


            {/* img & type */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2 mx-2">
                    <label className="label">
                        <span className="label-text">Image Link</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Image Link" name="image" className="w-full input input-bordered " />
                    </label>
                </div>
                <div className="form-control md:w-1/2 mx-2">
                    <label className="label">
                        <span className="label-text">Product Type</span>
                    </label>
                    <label className="input-group">
                        <select class="select select-bordered w-full " name='type'>
                            <option disabled selected>Select Product type</option>
                            <option>Laptop</option>
                            <option>Phone</option>
                            <option>Keyboard</option>
                            <option>Mouse</option>
                            <option>Speaker</option>
                            <option>Monitor</option>
                            <option>Watch</option>
                        </select>                    </label>
                </div>
            </div>

            {/* price & rating */}
            <div className="md:flex mb-8">
                
                <div className="form-control md:w-1/2 mx-2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Product Price" name="price" className="w-full input input-bordered " />
                    </label>
                </div>
                <div className="form-control md:w-1/2 mx-2">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <select class="select select-bordered w-full " name="rating">
                            <option disabled selected>rate product</option>
                            <option>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                        </select>                    </label>
                </div>
            </div>
          
            {/* short description */}
            <div className="md:flex mb-8">
                <div className="form-control w-full mx-2">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <label className="input-group">
                    <textarea className="textarea textarea-bordered h-24 w-full" placeholder="add short description" name='description'></textarea>                    
                    </label>
                </div>
            </div>

            <input type="submit" value="Add Product" className="btn btn-block btn-neutral" />
            </form>
        </div>
    );
};

export default AddProduct;