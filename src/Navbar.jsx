
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return ( 
        <div className="navbar">
            <div className="container flex">
                <h1 className="logo">vLOMELI</h1>
                <nav>
                    <ul>
                    <CustomLink to="/"> HOME </CustomLink>
                    <CustomLink to="/About"> ABOUT </CustomLink>
                    <CustomLink to="/Projects"> PROJECTS </CustomLink>
                    <CustomLink to="/Contact"> CONTACT </CustomLink>
                    </ul>
                </nav>
            </div>
        </div>
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