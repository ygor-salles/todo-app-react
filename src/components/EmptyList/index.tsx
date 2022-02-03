import { ContainerEmpty } from "./styles"

export function EmptyList(): JSX.Element {
  return (
    <ContainerEmpty>
      <span>Nenhum item cadastrado</span>
    </ContainerEmpty>
  )
}