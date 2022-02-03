import { useState } from "react";
import { EmptyList } from "../EmptyList";
import { FormTodo } from "../FormTodo";
import { ItemsTodo } from "../ItemsTodo";
import { Container, ContainerTodo } from "./styles";

export function HomePage(): JSX.Element {
  const [todos, setTodos] = useState<string[]>([])
  const [text, setText] = useState<string>('')

  const handleData = (e: any) => setText(e.target.value)

  const handleAddArray = (text: string) => {
    if (text) {
      setTodos([...todos, text])
      setText('')
    } else {
      alert('Digite algo no input')
    }
  };

  const handleDeleteArray = (text: string) => {
    const todosAux = [...todos]
    todosAux.splice(todos.indexOf(text), 1)
    setTodos(todosAux)
  }

  return (
    <Container>
      <ContainerTodo>
        <FormTodo text={text} handleAddArray={handleAddArray} handleData={handleData} />
        {todos.length ? (<ItemsTodo todos={todos} handleDeleteArray={handleDeleteArray} />) : (<EmptyList />)}
      </ContainerTodo>
    </Container>
  )
}