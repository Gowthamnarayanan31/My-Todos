import { NavLink } from 'react-router-dom';


const Navbar=()=>{
    return(
        <>
        <nav className="course-nav">
            <NavLink to="/" end>All</NavLink>
            <NavLink to="/full-stack">Full Stack development</NavLink>
            <NavLink to="/data-science">Data Science</NavLink>
            <NavLink to="/cyber-security">Cyber Security</NavLink>
            <NavLink to="/career">Career</NavLink>
        </nav>
        </>
    )
}
export default Navbar