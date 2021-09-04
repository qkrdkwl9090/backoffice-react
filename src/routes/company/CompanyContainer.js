import CompanyPresenter from "./CompanyPresenter";
import { useQuery } from "@apollo/react-hooks";
import { GET_COMPANY } from "api/company/company";

const CompanyContainer = () => {
  const { loading, error, data } = useQuery(GET_COMPANY);
  if (loading) return <p>loading</p>;
  if (error) return <p>Error : </p>;
  return <CompanyPresenter data={data}></CompanyPresenter>;
};
export default CompanyContainer;
