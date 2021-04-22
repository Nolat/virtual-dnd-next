import { AppProps } from "next/app";

import { Chakra } from "chakra";
import { Container } from "components";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Chakra>
  );
};

export default App;
