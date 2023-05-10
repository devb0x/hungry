import { Recipe } from "@/typings"
import Link from "next/link";

const fetchRandomRecipe = async () => {
	const res = await fetch(
		`https://api.spoonacular.com/recipes/random?number=1&apiKey=${process.env.API_KEY}`,
		{ next: { tags: ['randomRecipe'], revalidate: 10 } }
		// { cache: 'no-store' }
	)
	const recipe: Recipe = await res.json()
	return recipe
}

async function RandomRecipePage() {
	const recipe = await fetchRandomRecipe()
	const recipeId = Object.keys(recipe).map((key) => {
		return recipe[key][0].id
	})

	return (
		<div>
			<h1>random recipe page</h1>
				{Object.keys(recipe).map((key, index) => {
					return <p key={recipe[key][0].id}>{recipe[key][0].title}</p>
				})}
			<div style={{display: "flex"}}>
				Is vegan: <span>{Object.keys(recipe).map((key, index) => {
					return (recipe[key][0].vegetarian ? <p>true</p> : <p>false</p>)
				})}</span>
			</div>
			<div>
				the recipe id is: {recipeId}
			</div>
			<Link href={`/recipes/${recipeId}`}>recipe detail</Link>
		</div>
	)
}

export default RandomRecipePage