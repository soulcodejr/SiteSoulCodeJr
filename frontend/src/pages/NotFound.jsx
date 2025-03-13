import "./NotFound.css"
import { MdArrowOutward } from "react-icons/md";


export default function NotFound() {
    return (
        <div className="container" >
            <h1 className="main-text">
                Oops! Page Not Found


            </h1>
            <p className="scd-text"> It looks like the page you’re searching for doesn’t exist or has been moved. Let’s get you back to where you need to be. </p>
            <a className="home-btn" href="/SiteSoulCodeJr">
                <button id="process-btn" className="primary-btn">
                    <p>Let’s go home</p>
                    <MdArrowOutward />
                </button>
            </a>
        </div>
    )
}
