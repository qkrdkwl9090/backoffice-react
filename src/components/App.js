import React from "react";
import PageRouter from "components/Router";
import { ApolloProvider } from "@apollo/react-hooks";
import GlobalStyles from "components/GlobalStyles";
import { client } from "api/index";

function App() {
  return (
    <ApolloProvider client={client}>
      <PageRouter />
      <GlobalStyles />
    </ApolloProvider>
  );
}

export default App;
