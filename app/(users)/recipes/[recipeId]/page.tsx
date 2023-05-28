import React from "react"
import { Metadata } from "next"
import { Recipe } from "@/typings"
import {notFound} from "next/navigation"
import Image from "next/image"
import clock from "../../../../public/assets/icons/clock-line.svg"
import heart from "../../../../public/assets/icons/health-linear.svg"
import dollar from "../../../../public/assets/icons/mood-dollar.svg"

import classes from './recipeId.module.css'
import RecipeIngredients from "@/app/components/Recipe/RecipeIngredients/RecipeIngredients";
import RecipeInstructions from "@/app/components/Recipe/RecipeInstructions/RecipeInstructions";

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

const fetchIngredients = async (id) => {
	const res = await fetch(
		`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${process.env.API_KEY}`
	)
	const ingredients = await res.json()
	return ingredients
}

async function RecipeIdPage({ params: { recipeId } }: Props) {
	const recipeData = await fetchRecipeById(recipeId)
	const [recipe] = await Promise.all([recipeData])
	const ingredientsData = await fetchIngredients(recipeId)
	const [ingredients] = await Promise.all([ingredientsData])

	if (!recipe) notFound()

	const summary = recipe.summary.replace( /(<([^>]+)>)/ig, '')

	return (
		<main>
			<section>
				<header className={`${classes['recipe-header']}`}>
					<h1 className={`${classes['recipe-title']}`}>{recipe.title}</h1>
					{recipe.diets &&
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
					<picture>
						<Image
							className={`${classes['recipe-image']}`}
							src={recipe.image}
							alt={recipe.title}
							width={150}
							height={150}
						/>
					</picture>
					<div className={`${classes['recipe-numbers-data']}`}>
						<div>
							<Image
								src={clock} alt={"clock"}
								height={24} width={24}
							/>
							{recipe.readyInMinutes}min
						</div>
						<div>
							<Image
								src={heart} alt={"heart"}
								height={24}
								width={24}
							/>{recipe.healthScore}
						</div>
						<div>
							<Image
								src={dollar} alt={"dollar"}
								height={24} width={24}
							/>
							<span>{(recipe.pricePerServing / 100).toFixed(2)}$/serving</span>
						</div>
					</div>
				</header>
			</section>
			<hr className={`${classes['divider']}`}/>
			<section>
				<RecipeIngredients
					id={recipe.id}
					priceServing={(recipe.pricePerServing / 100).toFixed(2)}
					servings={recipe.servings}
					ingredients={[ingredients.ingredients]}
				/>
			</section>
			<hr className={`${classes['divider']}`}/>
			<div className={`${classes['recipe-summary']}`}>{summary}</div>
			<hr className={`${classes['divider']}`}/>
			<section>
				<ul>
					<RecipeInstructions steps={recipe.analyzedInstructions[0].steps}/>
				</ul>
			</section>
		</main>
	)
}

export default RecipeIdPage