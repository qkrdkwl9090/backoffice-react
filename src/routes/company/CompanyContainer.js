import CompanyPresenter from "./CompanyPresenter";
import { useQuery } from "@apollo/react-hooks";
import { GET_COMPANY } from "api/company/company";

const CompanyContainer = () => {
  const { error, data } = useQuery(GET_COMPANY);
  if (error) {
    alert(`Error : ${error}`);
    return;
  }
  return <CompanyPresenter data={data}></CompanyPresenter>;
};
export default CompanyContainer;
