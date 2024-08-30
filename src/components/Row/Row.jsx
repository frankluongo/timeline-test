import { getBubbleOrder } from "../../utilities/getBubbleOrder";

import { Bubble } from "../Bubble/Bubble";
import { Content } from "../Content/Content";

import * as Styled from "./Row.styled";

export function Row({ data, options, id, ...rest }) {
  return (
    <Styled.Row $orientation={options.$orientation} id={id} {...rest}>
      <Bubble
        data={data}
        $color={options.color}
        $order={getBubbleOrder(options.$orientation)}
        id={`${id}-bubble`}
      />
      <Content data={data} $order={options.$orientation} />
    </Styled.Row>
  );
}
