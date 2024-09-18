import { Copy } from "react-feather";
import { Divider } from "../../../../components/Divider";
import { PixInterface } from "../../../../services/pix";
import { Text } from "../../../../styles/global";
import { CopyIcon, CustomText, PixArea } from "./styles";

interface PixProps {
  pix: PixInterface | undefined;
}

function Pix({ pix }: PixProps): JSX.Element {
  return (
    <>
      {pix && (
        <>
          <Divider text="chave PIX" />
          <PixArea>
            <CustomText title="Copiar chave PIX">
              {pix.type}: {pix.key}
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
