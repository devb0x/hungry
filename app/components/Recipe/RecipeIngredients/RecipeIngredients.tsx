import Image from "next/image";

const fetchIngredients = async (id) => {
	const res = await fetch(
		`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${process.env.API_KEY}`
	)
	const ingredients = await res.json()
	return ingredients
}

const RecipeIngredients = async (props) => {
	const ingredientsData = await fetchIngredients(props.id)
	const [ingredients] = await Promise.all([ingredientsData])

	console.log(ingredients)

	return (
		<div>
			<h2>
				Ingredients
			</h2>
			<div>
				{ingredients.ingredients.map((el, index) => (
					<div key={index} style={{display: "flex"}}>
						<Image src={`https://spoonacular.com/cdn/ingredients_100x100/${el.image}`} alt={el.name} width={150} height={150}/>
						<div>
							{el.name}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default RecipeIngredients