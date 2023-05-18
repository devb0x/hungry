import React from "react"
import { Metadata } from "next"
import { Recipe } from "@/typings"
import {notFound} from "next/navigation"
import Image from "next/image"

import classes from './recipeId.module.css'
import RecipeIngredients from "@/app/components/Recipe/RecipeIngredients/RecipeIngredients";

export const metadata: Metadata = {
	title: 'Recipe By Id',
	description: 'the detail of the recipe'
}

type Props = {
	params: {
		recipeId: string
	}
}

const fetchRecipeById = async (recipeId: string) => {
	const res = await fetch(
		`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.API_KEY}`
	)
	const recipe: Recipe = await res.json()
	return recipe
}

async function RecipeIdPage({ params: { recipeId } }: Props) {
	const recipeData = await fetchRecipeById(recipeId)
	const [recipe] = await Promise.all([recipeData])

	console.log(typeof recipe)

	if (!recipe) notFound()

	return (
		<main>
			<section>
				<header className={`${classes['recipe-header']}`}>
					<h1 className={`${classes['recipe-title']}`}>{recipe.title}</h1>
					{recipe.diets ??
						<ul className={`${classes['recipe-diets']}`}>
							{recipe.diets?.map((diet, index) => (
								<li
									key={index}
									className={`${classes['recipe-diet__item']}`}
								>
									{diet}
								</li>
							))}
						</ul>
					}
					<Image
						className={`${classes['recipe-image']}`}
						src={recipe.image}
						alt={recipe.title}
						width={150}
						height={150}
					/>
				</header>
			</section>
			<section>
				<RecipeIngredients ingredients={recipe.extendedIngredients} id={recipe.id}/>
			</section>
			<div>{recipe.summary}</div>
		</main>
	)
}

export default RecipeIdPage