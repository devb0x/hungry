import React from "react";
import Link from "next/link";

import navLinks from "./navLinks"


const Navbar = () => {

	return (
		<nav>
			<div>
				navbar
			</div>
			{navLinks.map((el, index) => {
				return (
					<Link key={index} href={el.to}>{el.name}</Link>
				)
			})}
		</nav>
	)
}

export default Navbar