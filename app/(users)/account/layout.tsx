import React from "react"

export default function AccountLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main>
			<div>
				<h1>account page from layout</h1>
			</div>
			<div>
				{children}
			</div>
		</main>
	)
}
