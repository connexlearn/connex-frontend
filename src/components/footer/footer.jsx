import "./footer.css"
import logo from '../Header/images/logo1.png'
import facebook from './images/facebook.webp'
import twitter from './images/twitter.jpeg'


const Footer = ()=>{
    return(
        <>
        <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-12">
                <img src={logo} alt="" className="logo" />
                <h5 className="mt-3 ms-5 fw-bold">Connect with us</h5>
                <form className="ms-5">   
                        <div className="relative">
                            <input type="search" id="default-search" className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 d-flex">Send 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send mt-1 ms-1" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                            </svg></button>
                        </div>
                    </form>

                  <div className="d-flex ms-5 mt-4">
                  <img src={facebook} alt="" className="social" />
                  <img src={twitter} alt="" className="social" />

                  </div>
                </div>
            </div>
        </div>
        <p className="d-flex justify-content-center pt-5 pb-2">Copyright © ConnexLearn</p>
        </div>
        </>
    )
}

export default Footer