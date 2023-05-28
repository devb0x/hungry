'use client'

import Image from "next/image"
import classes from './RecipeIngredients.module.css'
import { useState } from "react"
import dollarIcon from '../../../../public/assets/icons/dollar-broken.svg'

const RecipeIngredients = (props) => {
	const [serving, setServing] = useState(props.servings)
	const [ingredients, setIngredients] = useState(props.ingredients[0])

	return (
		<div>
			<header className={`${classes['ingredients-header']}`}>
				<h2>
					Ingredients
				</h2>
				<div className={`${classes['ingredients-calc']}`}>
					<div>
						<button
							onClick={() => {
								setServing(serving - 1)
							}}
							disabled={serving <= 1}
						>
							-
						</button>
					</div>
					<div>
						{serving} {serving < 2 ? "serving" : "servings"}
					</div>
					<button onClick={() => (
						setServing(serving + 1)
					)}>+</button>
				</div>
				<div>
					<Image src={dollarIcon} alt={"dollar"} />{props.priceServing * serving} $
				</div>

			</header>
			<ul className={`${classes['ingredients-list']}`}>
				{ingredients.map((el, index) => (
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
							{((el.amount.metric.value / props.servings) * serving).toFixed(2)} {el.amount.metric.unit}
						</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default RecipeIngredients