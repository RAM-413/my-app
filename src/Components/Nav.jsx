function Nav() {
    return (
        <div>
            <section className='bg-header min-vh-130 '>
                <div className="container ">
                    <nav className=' d-flex align-items-center justify-content-between pt-10'>
                        <div className='d-flex align-items-center gap-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="39" viewBox="0 0 37 39" fill="none">
                                <path d="M28.6133 7.40008V4.93341H37V38.9734H0.493333L0 4.93341H8.38667V7.40008H4.44L18.7467 27.1334L33.0533 7.40008H28.6133Z" fill="black" />
                                <path d="M25.1604 0L18.7471 5.92L25.1604 11.84V0Z" fill="black" />
                                <path d="M11.8396 0L18.2529 5.92L11.8396 11.84V0Z" fill="black" />
                                <circle cx="18.2534" cy="12.8267" r="1.48" fill="black" />
                                <circle cx="18.2534" cy="18.7467" r="1.48" fill="black" />
                            </svg>
                            <p>maître d</p>
                        </div>
                        <label for="icon" class="icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <input type="checkbox" id="icon" hidden></input>

                        <ul className='d-flex align-items-center justify-content-center align-items-center gap-34  mobile-view'>
                            <li><a href="#" className="home nav-bar">Home</a></li>
                            <li><a href="#" className="home nav-bar">Modules</a></li>
                            <li><a href="#" className="home nav-bar">Pricing</a></li>
                            <li><a href="#" className="home nav-bar">Features</a></li>
                            <li><a href="#" className="home nav-bar">Contact</a></li>
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M8.70898 16.4198C10.484 16.4194 12.2078 15.8252 13.606 14.7318L18.002 19.1278L19.416 17.7138L15.02 13.3178C16.114 11.9195 16.7086 10.1952 16.709 8.4198C16.709 4.0088 13.12 0.4198 8.70898 0.4198C4.29798 0.4198 0.708984 4.0088 0.708984 8.4198C0.708984 12.8308 4.29798 16.4198 8.70898 16.4198ZM8.70898 2.4198C12.018 2.4198 14.709 5.1108 14.709 8.4198C14.709 11.7288 12.018 14.4198 8.70898 14.4198C5.39998 14.4198 2.70898 11.7288 2.70898 8.4198C2.70898 5.1108 5.39998 2.4198 8.70898 2.4198Z" fill="black" />
                            </svg></a></li>
                        </ul>
                    </nav>
                </div>
                <div className="container align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center">
                        <h2 className="maitre">Maitre D – Store Management for Barbers</h2>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <button className="btn-1 ">Submit</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Nav