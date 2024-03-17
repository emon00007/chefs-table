const Banner = () => {
    return (
        <div className="mx-7">

            <div className="hero body min-h-screen rounded-lg"
                style={{ backgroundImage: "url(https://i.ibb.co/HzBb7Sv/d57b5fb5ad84c9f6a9b1eb9782e9b11b.jpg) " }}>
                <div className="hero-overlay  rounded-lg bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 body text-4xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat  ut assumenda excepturi exercitationem quasi.<br /> In deleniti eaque  aut repudiandae et a id nisi.</p>
                        <div className=" mt-6 flex justify-center gap-20">
                            <button className="btn hover:bg-lime-50 bg-[#0BE58A] rounded-3xl text-black">Explore Now</button>
                            <button className="btn btn-ghost border-white rounded-3xl">Explore Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;