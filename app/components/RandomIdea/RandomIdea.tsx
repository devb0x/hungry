'use client'

import { useRouter } from "next/navigation"
import classes from "./RandomIdea.module.css"

const RandomIdea = () => {
	const router = useRouter()

	const nav = (e) => {
		e.preventDefault()
		router.push("/randomRecipe")
	}

	return (
		<div className={`${classes['card']}`}>
			<h2 className={`${classes['card-title']}`}>No idea today?</h2>
			<div
				onClick={nav}
				className={`${classes['card-wrapper']}`}
			>
				Click here and discover a random recipe to try!
			</div>
		</div>
	)
}

export default RandomIdea