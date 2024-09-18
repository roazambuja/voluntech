import { Divider } from "../../../../components/Divider";
import { PixInterface } from "../../../../services/pix";
import { Text } from "../../../../styles/global";
import { CopyIcon, CustomText, PixArea } from "./styles";
import { keyTypeLabels } from "../../../Organizations/Pix";

interface PixProps {
  pix: PixInterface | undefined;
}

function Pix({ pix }: PixProps): JSX.Element {
  function copyKey() {
    if (pix) {
      try {
        navigator.clipboard.writeText(pix.key);
        alert("Chave PIX copiada para a área de transferência!");
      } catch (err) {
        console.error("Falha ao copiar: ", err);
      }
    }
  }

  return (
    <>
      {pix && (
        <>
          <Divider text="chave PIX" />
          <PixArea>
            <CustomText onClick={copyKey} title="Copiar chave PIX">
              {keyTypeLabels[pix.type]}: {pix.key}
              <CopyIcon />
            </CustomText>
            <Text>
              {pix.name} - {pix.bank}
            </Text>
          </PixArea>
        </>
      )}
    </>
  );
}

export { Pix };
