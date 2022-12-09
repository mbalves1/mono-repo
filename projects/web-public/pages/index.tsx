import { sum } from "@monorepo/utils/math/sum";

export default function HomeScreen(){ 
  return (
    <main>
      <h1> Home </h1>
      <p>Importanto modulo local: @monorepo/utils/math/sum(2,5) = {sum(2, 5)}</p>
    </main>
  )
}
