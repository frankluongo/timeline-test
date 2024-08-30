import { getContentTextAlign } from "../../utilities/getContentTextAlign";

import * as Styled from "./Content.styled";

export function Content({ data, $order }) {
  return (
    <Styled.Content href={data.url} $align={getContentTextAlign($order)}>
      <Styled.Title>{data.title}</Styled.Title>
      <Styled.Info>
        By {data.author} • {data.time}
      </Styled.Info>
    </Styled.Content>
  );
}
