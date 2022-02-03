import { InputStyled } from "./styles"

type Props = {
  placeholder?: string
  text: string
  handleData: React.ChangeEventHandler<HTMLInputElement>
}

export function Input({ text, handleData, placeholder }: Props): JSX.Element {
  return (
    <InputStyled
      type="text"
      value={text}
      onChange={handleData}
      placeholder={placeholder}
    />
  )
}