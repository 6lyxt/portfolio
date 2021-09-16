import * as React from 'react';
import {FC} from 'react';
import {Link} from "gatsby";


type NavItemProps = {
    Name: string,
    URL: string
}

const NavItem: FC<NavItemProps> = (props) => {
    return (
        <li><Link to={props.URL}>{props.Name} </Link></li>
    )
}

export default NavItem
