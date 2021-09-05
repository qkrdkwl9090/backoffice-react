import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { homeApi } from "api";
import DrawerRight from "components/Drawer/DrawerRight";

const HomeContainer = () => {
  const [chart, setChart] = useState([]);
  async function getData() {
    const { data } = await homeApi.chartData();
    setChart(data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <DrawerRight />
      <HomePresenter data={chart}></HomePresenter>
    </>
  );
};
export default HomeContainer;
