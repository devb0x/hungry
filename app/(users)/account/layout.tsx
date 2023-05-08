import React from "react"
import {Metadata} from "next"

export const metadata: Metadata = {
	title: 'Account page',
	description: 'Welcome to your account page'
}

export default function AccountLayout({
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
