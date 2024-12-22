import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="flex flex-col gap-4 h-screen font-xl ">
        <h1>Page Not Found</h1>
        <Link to={"/"}>Go to Home</Link>
        </div>
    );
    }