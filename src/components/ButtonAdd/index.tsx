import addItemIcon from "../../assets/ic-add@2x.png";
import { ButtonAddStyled, ImageButtonAddStyled } from "./styles";

type Props = {
  handleAddItem: (e: any) => void
}

export function ButtonAdd({ handleAddItem }: Props): JSX.Element {
  return (
    <ButtonAddStyled type="button" onClick={handleAddItem}>
      <ImageButtonAddStyled src={addItemIcon} alt="add item icon" />
    </ButtonAddStyled>
  )
}