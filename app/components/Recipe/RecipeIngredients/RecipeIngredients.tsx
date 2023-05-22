import Image from "next/image";

import classes from './RecipeIngredients.module.css'

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

	return (
		<div>
			<h2>
				Ingredients
			</h2>
			<ul className={`${classes['ingredients-list']}`}>
				{ingredients.ingredients.map((el, index) => (
					<li key={index} className={`${classes['ingredients-list__item']}`}>
						<picture>
							<Image
								className={`${classes['ingredient-image']}`}
								src={`https://spoonacular.com/cdn/ingredients_100x100/${el.image}`}
								alt={el.name}
								width={100}
								height={100}
							/>
						</picture>
						<span className={`${classes['ingredient-label']}`}>
							{el.name}
						</span>
						<span className={`${classes['ingredient-qte']}`}>
							{el.amount.metric.value} {el.amount.metric.unit}
						</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default RecipeIngredients