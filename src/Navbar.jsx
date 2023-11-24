
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return ( 
        <nav className="nav">
            <Link to="/" className="site-title">
                vLOME
            </Link>
            <ul>
                <CustomLink to="/About"> ABOUT </CustomLink>
                <CustomLink to="/Projects"> PROJECTS </CustomLink>
                <CustomLink to="/Contact"> CONTACT </CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}