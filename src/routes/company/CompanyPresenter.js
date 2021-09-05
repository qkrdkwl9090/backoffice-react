import React, { useMemo } from "react";
import styled from "styled-components";
import search from "assets/images/search.svg";
import exportIcon from "assets/images/export.svg";
import Table from "components/Table";

const Company = styled.section`
  height: 100vh;
  padding: 100px 50px;
`;
const TopContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const Title = styled.span`
  font-weight: 700;
  font-size: 26px;
`;
const CreateButton = styled.div`
  padding: 20px 30px;
  border-radius: 8px;
  font-size: 15px;
  background-color: rgb(0, 49, 113);
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: rgb(20, 69, 133);
  }
`;
const SearchContainer = styled.section`
  padding: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(248, 251, 253);
  border-radius: 8px;
`;
const SearchBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  border-radius: 8px;
  background-color: white;
  margin-right: 10px;
  border: 2px solid lightgray;
`;
const SearchImg = styled.img`
  width: 30px;
  margin: 0 10px 0 15px;
`;
const Search = styled.input`
  border: none;
  width: 95%;
  font-size: 16px;
  border-right: 0px;
  border-top: 0px;
  border-left: 0px;
  border-bottom: 0px;
  &:focus {
    outline: none;
  }
`;
const ExportButton = styled.div`
  background-color: white;
  border-radius: 8px;
  border: 2px solid lightgray;
  font-size: 15px;
  font-weight: 700;
  color: rgb(0, 49, 113);
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:active {
    background-color: rgb(243, 245, 249);
  }
`;
const ExrpotImg = styled.img`
  margin-right: 5px;
`;
const DataContainer = styled.section``;

const CompanyPresenter = ({ data }) => {
  const columns = useMemo(() => [
    {
      accessor: "name",
      Header: "Name",
    },
    {
      accessor: "domain",
      Header: "Domain",
    },
    {
      accessor: "owner",
      Header: "Owner",
    },
    {
      accessor: "asset",
      Header: "Asset",
    },
    {
      accessor: "status",
      Header: "Status",
    },
    {
      accessor: "tel",
      Header: "Tel",
    },
  ]);
  return (
    <Company>
      <TopContainer>
        <Title>Company</Title>
        <CreateButton>Create a new company</CreateButton>
      </TopContainer>
      <SearchContainer>
        <SearchBox>
          <SearchImg src={search} alt="search" />
          <Search placeholder="Search from company name..."></Search>
        </SearchBox>
        <ExportButton>
          <ExrpotImg src={exportIcon} alt="export" />
          Export
        </ExportButton>
      </SearchContainer>
      <DataContainer>
        <Table columns={columns} data={data}></Table>
      </DataContainer>
    </Company>
  );
};
export default CompanyPresenter;
