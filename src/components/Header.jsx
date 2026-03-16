import globeIcon from "../assets/globe.png";

export default function Header() {
    return (
        <header className="nav">
            <img
                src={globeIcon}
                alt="globe logo"
                className="nav-logo" />
            <span className="logo-title">my travel journal.</span>
        </header>
    )
}