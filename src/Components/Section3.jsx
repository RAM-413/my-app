import React from "react";
function Section3() {
    return (
        <div>
            <section class="bg-image-2 py-5">
                <div class="container pt110">
                    <div class="d-flex gap-10 justify-content-center align-items-baseline">
                        <h6 class="top-heading text-gradiant m-0 ">Modules</h6>
                        <p class="line"></p>
                    </div>
                    <h2 class="heading-2 m-0 text-center pb-60">Why Choose <span
                        class="  m-0 text-center text-gradiant">Maître D?</span></h2>
                    <div class="slide">
                        <div class="slickcard1 ">
                            <div class="row p-sm-5 p-2 ">
                                <div class="col-lg-6 col-12  my-auto d-flex justify-content-lg-center">
                                    <img className="w-100 max-500" src="./assets/images/third.png" alt="images" />
                                </div>
                                <div class="col-lg-6 col-12  pt-5">
                                    <div class="d-flex gap-10">
                                        <h3 class="featurs-heading">Manage Your <span
                                            class="ff-work-sans fs-1md fw-700 text-gradiant m-0">Customer Queues</span></h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="29" viewBox="0 0 27 29"
                                            fill="none">
                                            <path d="M8.51074 1L18.124 28.4384" stroke="#F6A915" stroke-miterlimit="10" />
                                            <path d="M1 20.5908L26 10.1648" stroke="#F6A915" stroke-miterlimit="10" />
                                        </svg>
                                    </div>
                                    <p class="para-1 pt-10 max-500">The Maitre D queue management
                                        system is
                                        designed to allow your customers to Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Dolore, sit quidem iure reprehenderit magni, suscipit corporis voluptatum nulla
                                        minima ab dicta, autem ipsum maiores earum eum possimus neque aperiam a. sign up for
                                        walk-in appointments and select the services they want ahead of time. The queue will
                                        provide them with estimated wait times, costs and will allow them to even select
                                        their
                                        preferred stylist.</p>
                                    <p class="para-1 pt-20 max-500">As the queue gets bigger or
                                        smaller,
                                        its
                                        easy to monitor your operations and Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Laboriosam aliquam veritatis suscipit understand
                                        when wait periods are getting too long to service your customer base and to better
                                        resource your stores during busy periods. Beat the frustration of your customers
                                        ahead
                                        of time and help manage how they wait for your services.</p>
                                    <button class="btn-1">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" d-flex position-relative bt1">
                    <button class="buttonprev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-left"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </button>
                    <button class="buttonnxt ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-right"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Section3;


//     ('.slide').slick({
//         dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: '.buttonprev',
//     nextArrow: '.buttonnxt',
//     responsive: [{
//         breakpoint: 1024,
//     settings: {
//         slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: true,
//         }
//     },
//     {
//         breakpoint: 768,
//     settings: {
//         slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplayspeed:100,
//     autoplay:true,

//         }
//     },
//     ]
// });
