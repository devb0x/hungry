import React from "react"
import { Metadata } from "next"
import { Recipe } from "@/typings"
import {notFound} from "next/navigation"
import Image from "next/image"

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

	if (!recipe) notFound()

	return (
		<div>
			<h1>recipe by id page (id {recipeId})</h1>
			<h2>{recipe.title}</h2>
			<div>{recipe.summary}</div>
			<Image src={recipe.image} alt={recipe.title} width={150} height={150}/>
		</div>
	)
}

export default RecipeIdPage