import React from "react";
function Footer() {
    return (
        <div>
            <section class="footer-img  pt-30">
                <div class="container">
                    <div class="d-flex justify-content-center flex-direction-column color-grey">
                        <div class="d-flex  justify-content-center color-white pt-30 pb-20">
                        <img src="./assets/images/footer-logo.png" alt="images" />
                        </div>
                        <p class="footer-para max-353 text-center mx-auto pb-20">Proudly
                            Australian
                            developed
                            software. Focused on
                            increasing efficiency and growing business
                            within the beauty industry.
                        </p>
                        <ul class="d-flex gap-20 justify-content-center  pt-10">
                            <li><a href="#"
                                class="footer-links">Navigation</a></li>
                            <li><a href="#" class="footer-links">Company</a>
                            </li>
                            <li><a href="#" class="footer-links">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p class="footer-last-para m-0 text-center  pt-60 pb-20">Copyright 2020 All rights
                    reserved,
                    Greenfox Development Pty Ltd©</p>
            </section>
        </div>
    )
}
export default Footer;