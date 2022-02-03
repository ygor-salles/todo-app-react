import { ItemStyled } from "./styles"
import deleteIcon from '../../assets/ic-delete@2x.png'

type Props = {
  todos: string[]
  handleDeleteArray: (text: string) => void
}

export function ItemsTodo({ todos, handleDeleteArray }: Props): JSX.Element {
  return (
    <>
      {todos.map((todo: string, index: number) => (
        <ItemStyled key={index}>
          <span>{todo}</span>
          <button type="button" onClick={() => handleDeleteArray(todo)}>
            <img src={deleteIcon} alt="deletar item todo" />
          </button>
        </ItemStyled>
      ))}
    </>
  )
}