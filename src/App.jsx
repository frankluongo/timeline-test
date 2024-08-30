// LOCAL IMPORTS:
import { MOCK_DATA } from "./data";
import { getColor } from "./utilities/getColor";
// COMPONENTS:
import { Container } from "./components/Container/Container";
import { Row } from "./components/Row/Row";
import { getOrientation } from "./utilities/getOrientation";
import { Connector } from "./components/Connector/Connector";
// GENERAL STYLES:

const data = MOCK_DATA;

function App() {
  const count = data.length - 1;

  return (
    <Container>
      {data.map((item, index) => (
        <>
          <Row
            key={index}
            data={item}
            id={item.id}
            options={{
              $color: getColor(index),
              $orientation: getOrientation(index),
            }}
          />
          {index < count && (
            <Connector start={item.id} end={data[index + 1].id} />
          )}
        </>
      ))}
    </Container>
  );
}

export default App;
