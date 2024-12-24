import { Link } from "react-router-dom";
import "./pageNotFound.css";


export default function PageNotFound() {
    return (
        <section className="flex flex-col items-center gap-4 page-not-found">
        <h1 className="text-3xl">Page Not Found</h1>
        <Link to={"/"} className="text-xl home-btn">Go to Home</Link>
        </section>
    );
    }