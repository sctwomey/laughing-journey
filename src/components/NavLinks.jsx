import { Link, useLocation } from 'react-router-dom';

function NavLinks() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-pills align-items-center mx-5">
            <li className="nav-item">
                <Link
                    to="/"
                    className={currentPage === '/About' ? 'nav-link navActive' : 'nav-link'}
                >
                    About Me
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Portfolio"

                    className={currentPage === '/Portfolio' ? 'nav-link navActive' : 'nav-link'}
                >
                    Portfolio
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Resume"
                    className={currentPage === '/Resume' ? 'nav-link navActive' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Contact"
                    className={currentPage === '/Contact' ? 'nav-link navActive' : 'nav-link'}
                >
                    Contact
                </Link>
            </li>
        </ul>
    );
}

export default NavLinks;