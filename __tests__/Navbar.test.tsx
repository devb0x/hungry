import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react"
import Navbar from "@/app/(users)/navigation/Navbar";
import navLinks from "@/app/(users)/navigation/navLinks";

describe('<Navbar />', () => {
	it('Navbar mount properly', () => {
		const component = render(<Navbar />)
		expect(component).toBeTruthy()
	})
	it('Navbar should have the correct number of links for navigation + 1 link from the logo', () => {
		render(<Navbar />)
		const links = document.getElementsByTagName("a")
		expect(links.length).toBe(navLinks.length + 1)
	})
})