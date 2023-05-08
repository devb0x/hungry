import React from "react";
import Link from "next/link";
import Image from "next/image";

import navLinks from "./navLinks"
import classes from "./Navbar.module.css"
import logo from '../../../public/assets/logo-no-background2.svg'


const Navbar = () => {

	return (
		<nav className={`${classes['navbar']}`}>
			<Link className={`${classes['home-link']}`} href={"/"}>
				<Image src={logo} alt="" className={`${classes['logo']}`} width={0} height={0} />
			</Link>
			<div className={`${classes['navbar-menu']}`}>
				{navLinks.map((el, index) => {
					return (
						<Link
							key={index}
							href={el.to}
							className={`${classes['nav-menu__link']}`}
						>
							{el.name}
						</Link>
					)
				})}
			</div>
		</nav>
	)
}

export default Navbar