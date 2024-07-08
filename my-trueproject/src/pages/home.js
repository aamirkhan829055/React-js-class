import dining from "../images/dining.png";
import living from "../images/living.png";
import bedroom from "../images/bedroom.png";
import leviosa from "../images/leviosa.png";
import lolito from "../images/lolito.png"
import respira from "../images/respira.png"
import syltherine from "../images/syltherine.png"
import grifo from "../images/grifo.png"
import muggo from "../images/muggo.png"
import pingky from "../images/pingky.png"
import potty from "../images/potty.png"
function Home() {
    return (
        <>
            <section className="first-section-home">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-12 col-lg-6 col-xl-6">
                            <div className="first-col-section">
                                <span className="">New Arrival</span>
                                <h1 className="fw-bold">Discover Our New Collection</h1>
                                <p className="mt-3 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                <button className="text-white border-0 fw-bold mt-5">BUY NOW</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="true-section-home">
                <div className="container">
                    <div className="text-center browser-rang mb-5">
                        <h2 className="fw-bold">Browse The Range</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="brower-img text-center">
                                <img src={dining} width={"100%"} />{" "}
                                <span className="py-3 d-inline-block">Dining</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="brower-img text-center">
                                <img src={living} width={"100%"} />{" "}
                                <span className="py-3 d-inline-block">
                                    Living
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="brower-img text-center">
                                <img src={bedroom} width={"100%"} />{" "}
                                <span className="py-3 d-inline-block">
                                    Bedroom
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="three-section-home">
                <div className="container">
                    <div className="text-center products-our">
                        <h3 className="fw-bold mb-5">Our Products</h3>
                    </div>
                    <div className="row">
                        <div className="co-md-4 col-lg-6 col-xl-3">
                            <div className="products-section my-4">
                                <img src={syltherine} width={"100%"} />
                                <div className="px-4 py-4 syltherine">
                                    <a href="#" className="pb-1">Syltherine</a>
                                    <span className="d-block">Stylish cafe chair</span>
                                    <div className="retting pt-3 d-flex justify-content-between">
                                        <h5 className="m-0">Rp 2.500.000</h5>
                                        <p className="m-0">Rp 3.500.000</p>
                                    </div>
                                </div>
                                <div className="of-retting">
                                    <span className="text-white m-4 d-block d-flex  align-items-center justify-content-center rounded-pill">-30%</span>
                                </div>
                                <div className="after-bg-color ">
                                    <a href="#" className="text-center bg-white">Add to cart</a>
                                    <div className="d-flex interner-app mt-4">
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-share-nodes"></i> Share</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-arrow-right-arrow-left"></i> Compare</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-regular fa-heart"></i> Like</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" co-md-4 col-lg-6 col-xl-3">
                            <div className="products-section my-4">
                                <img src={leviosa} width={"100%"} />
                                <div className="px-4 py-4 syltherine">
                                    <a href="#" className="pb-1">Leviosa</a>
                                    <span className="d-block">Stylish cafe chair</span>
                                    <div className="retting pt-3">
                                        <h5 className="m-0">Rp 2.500.000</h5>
                                    </div>
                                </div>
                                <div className="of-retting">
                                    <span className="text-white m-4 d-block d-flex  align-items-center justify-content-center rounded-pill">-30%</span>
                                </div>
                                <div className="after-bg-color ">
                                    <a href="#" className="text-center bg-white">Add to cart</a>
                                    <div className="d-flex interner-app mt-4">
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-share-nodes"></i> Share</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-arrow-right-arrow-left"></i> Compare</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-regular fa-heart"></i> Like</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="co-md-4 col-lg-6 col-xl-3">
                            <div className="products-section my-4">
                                <img src={lolito} width={"100%"} />
                                <div className="px-4 py-4 syltherine">
                                    <a href="#" className="pb-1">Lolito</a>
                                    <span className="d-block">Luxury big sofa</span>
                                    <div className="retting pt-3 d-flex justify-content-between">
                                        <h5 className="m-0">Rp 7.000.000</h5>
                                        <p className="m-0">Rp 14.000.000</p>
                                    </div>
                                </div>
                                <div className="of-retting">
                                    <span className="text-white m-4 d-block d-flex  align-items-center justify-content-center rounded-pill">-50%</span>
                                </div>
                                <div className="after-bg-color ">
                                    <a href="#" className="text-center bg-white">Add to cart</a>
                                    <div className="d-flex interner-app mt-4">
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-share-nodes"></i> Share</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-arrow-right-arrow-left"></i> Compare</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-regular fa-heart"></i> Like</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" co-md-4 col-lg-6 col-xl-3">
                            <div className="products-section my-4">
                                <img src={respira} width={"100%"} />
                                <div className="px-4 py-4 syltherine">
                                    <a href="#" className="pb-1">Respira</a>
                                    <span className="d-block">Outdoor bar table and stool</span>
                                    <div className="retting pt-3 ">
                                        <h5 className="m-0">Rp 500.000</h5>
                                    </div>
                                </div>
                                <div className="of-retting">
                                    <span className="text-white m-4 d-block bg-color-green  d-flex  align-items-center justify-content-center rounded-pill">New</span>
                                </div>
                                <div className="after-bg-color ">
                                    <a href="#" className="text-center bg-white">Add to cart</a>
                                    <div className="d-flex interner-app mt-4">
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-share-nodes"></i> Share</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-arrow-right-arrow-left"></i> Compare</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-regular fa-heart"></i> Like</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" co-md-4 col-lg-6 col-xl-3">
                            <div className="products-section my-4">
                                <img src={grifo} width={"100%"} />
                                <div className="px-4 py-4 syltherine">
                                    <a href="#" className="pb-1">Grifo</a>
                                    <span className="d-block">Night lamp</span>
                                    <div className="retting pt-3 d-flex justify-content-between">
                                        <h5 className="m-0">Rp 500.000</h5>
                                        <p className="m-0">Rp 3.500.000</p>
                                    </div>
                                </div>

                                <div className="after-bg-color">
                                    <a href="#" className="text-center bg-white">Add to cart</a>
                                    <div className="d-flex interner-app mt-4">
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-share-nodes"></i> Share</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-arrow-right-arrow-left"></i> Compare</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-regular fa-heart"></i> Like</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" co-md-4 col-lg-6 col-xl-3">
                            <div className="products-section my-4">
                                <img src={muggo} width={"100%"} />
                                <div className="px-4 py-4 syltherine">
                                    <a href="#" className="pb-1">Muggo</a>
                                    <span className="d-block">Small mug</span>
                                    <div className="retting pt-3 ">
                                        <h5 className="m-0">Rp 500.000</h5>
                                    </div>
                                </div>
                                <div className="of-retting">
                                    <span className="text-white m-4 d-block bg-color-green  d-flex  align-items-center justify-content-center rounded-pill">New</span>
                                </div>
                                <div className="after-bg-color ">
                                    <a href="#" className="text-center bg-white">Add to cart</a>
                                    <div className="d-flex interner-app mt-4">
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-share-nodes"></i> Share</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-arrow-right-arrow-left"></i> Compare</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-regular fa-heart"></i> Like</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" co-md-4 col-lg-6 col-xl-3">
                            <div className="products-section my-4">
                                <img src={pingky} width={"100%"} />
                                <div className="px-4 py-4 syltherine">
                                    <a href="#" className="pb-1">Pingky</a>
                                    <span className="d-block">Cute bed set</span>
                                    <div className="retting pt-3 d-flex justify-content-between">
                                        <h5 className="m-0">Rp 500.000</h5>
                                        <p className="m-0">Rp 3.500.000</p>
                                    </div>
                                </div>
                                <div className="of-retting">
                                    <span className="text-white m-4 d-block  d-flex  align-items-center justify-content-center rounded-pill">-50%</span>
                                </div>
                                <div className="after-bg-color ">
                                    <a href="#" className="text-center bg-white">Add to cart</a>
                                    <div className="d-flex interner-app mt-4">
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-share-nodes"></i> Share</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-arrow-right-arrow-left"></i> Compare</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-regular fa-heart"></i> Like</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" co-md-4 col-lg-6 col-xl-3">
                            <div className="products-section my-4">
                                <img src={potty} width={"100%"} />
                                <div className="px-4 py-4 syltherine">
                                    <a href="#" className="pb-1">Potty</a>
                                    <span className="d-block">Minimalist flower pot</span>
                                    <div className="retting pt-3 ">
                                        <h5 className="m-0">Rp 500.000</h5>
                                    </div>
                                </div>
                                <div className="of-retting">
                                    <span className="text-white m-4 d-block bg-color-green  d-flex  align-items-center justify-content-center rounded-pill">New</span>
                                </div>
                                <div className="after-bg-color ">
                                    <a href="#" className="text-center bg-white">Add to cart</a>
                                    <div className="d-flex interner-app mt-4">
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-share-nodes"></i> Share</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-solid fa-arrow-right-arrow-left"></i> Compare</p>
                                        <p className="m-0 text-white pr-2"><i class="fa-regular fa-heart"></i> Like</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <button className="button-one text-center">Show More</button>
                    </div>
                </div>
            </section>

        </>
    );
}


export default Home;