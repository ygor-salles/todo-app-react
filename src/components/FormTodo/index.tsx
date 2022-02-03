import React from "react"
import { ButtonAdd } from "../ButtonAdd"
import { Input } from "../Input"
import { FormStyled } from "./styles"

type Props = {
  text: string;
  handleData: (e: any) => void;
  handleAddArray: (text: string) => void
}

export function FormTodo({ text, handleData, handleAddArray }: Props): JSX.Element {
  return (
    <FormStyled>
      <Input text={text} handleData={handleData} placeholder="Digite" />
      <ButtonAdd handleAddItem={() => handleAddArray(text)} />
    </FormStyled>
  )
}