import Link from "next/link";

const Account = () => {
	return (
		<div>
			<h1>account page (from file page)</h1>
			<div style={{display: "flex", gap: "1rem"}}>
				<Link href={"./account/login"}>login</Link>
				<Link href={"./account/register"}>register</Link>
				<Link href={"./account/retrieve"}>forget password?</Link>
			</div>
		</div>
	)

}

export default Account
