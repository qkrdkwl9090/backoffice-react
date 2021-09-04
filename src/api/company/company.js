import { gql } from "@apollo/client";

export const GET_COMPANY = gql`
  query company {
    company {
      name
      domain
    }
  }
`;
