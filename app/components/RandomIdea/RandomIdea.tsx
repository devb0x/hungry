'use client'

import { useRouter } from "next/navigation"

const RandomIdea = () => {
	const router = useRouter()

	const nav = (e) => {
		e.preventDefault()
		router.push("/randomRecipe")
	}

	return (
		<div onClick={nav}>
			Random compo from components folder
		</div>
	)
}

export default RandomIdea