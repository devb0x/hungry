import React from "react"
import {Metadata} from "next"

export const metadata: Metadata = {
	title: 'Hungry - Random Recipe',
	description: 'a random recipe page'
}

export default function RandomRecipeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main>
			<div>
				{children}
			</div>
		</main>
	)
}
