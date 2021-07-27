




const NavbarLink = ({ link, children, ClassName }) => {

    return (
        <div><a href={link} className={ClassName}>{children}</a></div>
    )
}


export default NavbarLink