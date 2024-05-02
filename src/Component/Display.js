import React from "react";
import NavbarComponent from "./NavbarComponent";

import ConsumptionTable from "./ConsumptionTable";
import LineChart1 from "./LineChart1";
import LineChart from "./LineChart";

export default function Display() {
  return (
    <div>
      <NavbarComponent />
     
      <ConsumptionTable />
    </div>
  );
}
