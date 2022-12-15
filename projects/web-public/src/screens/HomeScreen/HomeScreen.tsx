import React from "react";
import { sum } from "@monorepo/utils/math/sum";
import { Text } from "@monorepo/design-system/components/Text";

export function HomeScreen(){ 
  return (
    <main>
      <Text tag="h1"> Home </Text>
      <Text tag="p">Importanto modulo local: @monorepo/utils/math/sum(2,5) = {sum(2, 5)}</Text>
    </main>
  )
}
