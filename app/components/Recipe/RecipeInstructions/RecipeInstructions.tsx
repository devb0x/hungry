import classes from './RecipeInstructions.module.css'
import Image from "next/image"

const RecipeInstructions = (props) => {

	return (
		<>
		{props.steps.map((step, index) => (
			<li key={index} className={`${classes['step-item']}`}>
				<h3 className={`${classes['step-number']}`}>
					{step.number}
				</h3>
				<div className={`${classes['step-ingredients']}`}>
					{step.ingredients.map((ingredient, index) => (
						<div key={index} className={`${classes['step-ingredient-detail']}`}>
							<span className={`${classes['step-ingredient-detail__label']}`}>
								&#9679; {ingredient.name}
							</span>
							<Image
								className={`${classes['step-ingredient-detail__img']}`}
								src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
								alt={ingredient.name}
								width={50}
								height={50}
							/>
						</div>
					))}
				</div>
				<p className={`${classes['step-instruction']}`}>
					{step.step}
				</p>
			</li>
		))}
		</>
	)
}

export default RecipeInstructions