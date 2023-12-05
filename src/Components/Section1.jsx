import React from "react";
function Section1() {
    return (
        <div>
            <div className="container py-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-12 d-flex justify-content-center">
                        <img className="w-100 max-500" src="./assets/images/second.png" alt="images" />
                    </div>
                    <div className="col-lg-6 col-12 my-auto d-flex  flex-direction-column">
                        <div class="d-flex gap-10  align-items-center">
                            <h5 class="m-0 text-gradiant">About Us</h5>
                            <p class="line"></p>
                        </div>
                        <h2 class="heading-2">Why Choose <span
                            class=" text-gradiant ">Maître D?</span></h2>
                        <p class="para-1 max-453 m-0 pt-10">Maître D is a full service
                            solution, designed specifically for salons and
                            barbershops. Our approach is modular, which means you only pay for the functionality that you
                            need. Each module is completely integrated into the solution, so your entire business always
                            remains syncronized. Maître D allows you to see everything within your business, from one
                            location. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1;