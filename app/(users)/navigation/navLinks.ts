interface ILink {
	name: string;
	to: string;
}

const navLinks: ILink[] = [
	{
		name: "homepage",
		to: "/"
	},
	{
		name: "account",
		to: "/account"
	}
]

export default navLinks