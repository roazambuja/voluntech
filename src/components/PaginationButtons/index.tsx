import { ChangePage, ChangePageButton } from "./styles";
import { ChevronLeft, ChevronRight } from "react-feather";

export interface PaginationButtonProps {
  current: number;
  total: number;
  backFunction: () => void;
  forwardFunction: () => void;
}

function PaginationButtons({
  current,
  total,
  backFunction,
  forwardFunction,
}: PaginationButtonProps): JSX.Element {
  return (
    <ChangePage>
      <ChangePageButton onClick={backFunction} disabled={current === 1}>
        <ChevronLeft />
        Anterior
      </ChangePageButton>
      <span>
        {current} / {total}
      </span>
      <ChangePageButton onClick={forwardFunction} disabled={current === total}>
        Próxima
        <ChevronRight />
      </ChangePageButton>
    </ChangePage>
  );
}

export { PaginationButtons };
