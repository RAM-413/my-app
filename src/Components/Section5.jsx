import React from "react";
function Section5() {
    return (
        <div>
            <section>
                <div class="container pt-20" id="contact-us">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M13.2654 -0.000105381L0 7.65869L7.6588 20.9241L20.9242 13.2653L13.2654 -0.000105381Z"
                            fill="#8256F0" />
                    </svg>
                    <div class="row pt-20 pb-20">
                        <div class="col-md-6 col-12 my-auto">
                            <div class="d-flex gap-10  align-items-center">
                                <h5 class="m-0 text-gradiant top-heading">Contact US</h5>
                                <p class="line"></p>
                            </div>
                            <h2 class="heading-2 pt-10">Get in touch!</h2>
                            <div class="pt-60">
                                <div class="gap-10">
                                    <form action="">
                                        <div className="d-flex  gap-10">
                                            <input type="text " placeholder="Full Name "className="form-para outline-0 border-none border-bottom-solid pb-20 w-50" />
                                            <input type="text " placeholder="Email Address"  className="outline-0 border-none form-para border-bottom-solid pb-20 w-50"/>
                                        </div>
                                        <input type="text" placeholder="Company Name" className="form-para outline-0 border-none border-bottom-solid pb-30 pt-20 w-100"/>
                                        <input type="text" placeholder="Message" className="form-para outline-0 border-none border-bottom-solid pb-60 pt-30 w-100" />
                                    </form>
                                    <button class="btn-1 mt-50">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-12 d-flex justify-content-center">
                            <img className="w-100 max-500" src="./assets/images/lastimg.png" alt="images" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section5