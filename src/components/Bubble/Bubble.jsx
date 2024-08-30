import * as Styled from "./Bubble.styled";

export function Bubble({ data, $color, $order, ...rest }) {
  return (
    <Styled.Bubble
      href={data.url}
      title={data.title}
      $color={$color}
      $order={$order}
      {...rest}
    >
      {data.icon}
    </Styled.Bubble>
  );
}
