import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                {/* <a className="navbar-brand" href="#">Faculty Details</a> */}
                <span class="navbar-text p-3">
                    Faculty Details(Logo)
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faculties" className="nav-link">
                                Faculties
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;