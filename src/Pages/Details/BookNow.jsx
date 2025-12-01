


import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";



const BookNow = () => {



    const handleBookNow = (e) => {

        e.preventDefault();
        toast.success('Service Booked Successfully')

        e.target.reset();





    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">


                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Book now!</h1>
                            <form onSubmit={handleBookNow}>
                                <fieldset className="fieldset">

                                    <label className="label">Name</label>
                                    <input required type="text" className="input" placeholder="Your Name" />

                                    <label className="label">Email</label>
                                    <input required type="email" className="input" placeholder="Email" />


                                    <button className="btn btn-neutral mt-4">Book Now</button>
                                </fieldset>
                            </form>
                            <Link to={'/'}><button className="btn flex items-center mx-auto bg-amber-100">Back Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>

        </div>
    );
};

export default BookNow;