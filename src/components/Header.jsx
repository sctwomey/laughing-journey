import Navigation from "../components/NavLinks";

export default function Header(props) {
    return (
        <header>
            <div className="header-block">
                <div className="developer-name"><a href="/">Stephen Twomey</a></div>
            </div>
            <Navigation
                currentPage={props.currentPage}
                handlePageChange={props.handlePageChange}
            />
        </header>
    )
};