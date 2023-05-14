import RandomIdea from "@/app/components/RandomIdea/RandomIdea";

import type { Metadata } from "next"
export const metadata: Metadata = {
  title: 'Hungry',
  description: 'Hungry homepage'
}

export default function Home() {

  return (
    <main>
      <h1>Homepage</h1>
      <RandomIdea />
    </main>
  )
}
