import { Text } from "../../../../styles/global";
import { UNDevelopmentGoals } from "../../../../services/users";
import goals from "./goals";
import { CardsArea, Container, Image } from "./styles";

interface DevelopmentGoalsProps {
  developmentGoals: UNDevelopmentGoals[] | undefined;
}

function DevelopmentGoals({ developmentGoals }: DevelopmentGoalsProps): JSX.Element {
  return (
    <>
      {developmentGoals && developmentGoals.length > 0 && (
        <Container>
          <Text>
            A causa apoiada pela ONG se encaixa nos seguintes Objetivos de Desenvolvimento
            Sustentável da ONU:
          </Text>
          <CardsArea>
            {developmentGoals.map((goalName, key) => {
              const goal = goals[Number(UNDevelopmentGoals[goalName])];
              return (
                <a key={key} href={goal.url} target="_blank">
                  <Image src={goal.imageUrl} alt={goal.name.toString()} />
                </a>
              );
            })}
          </CardsArea>
        </Container>
      )}
    </>
  );
}

export { DevelopmentGoals };
