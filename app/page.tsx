import type {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Hungry',
  description: 'Hungry homepage'
}

export default function Home() {
  return (
    <main>
      <h1>Homepage</h1>

      <Link href={"/randomRecipe"}>Don&apos;t know what to eat or cook?</Link>
    </main>
  )
}
