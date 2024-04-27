import { useContext, useEffect } from "react";
import { DriversContext } from "../../contexts/DriversContext";

const DriversListCompact = () => {
  const { drivers } = useContext(DriversContext);

  const getDriversJSX = () => {
    const driversJSX = drivers.map((_drivers, i) => (
      <div key={i} className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <li className="border d-flex flex-column p-2 h-100 shadow-lg justify-content-center text-center">
          ID: {_drivers.id} <br />
          {_drivers.name}
        </li>
      </div>
    ));
    return driversJSX;
  };

  return (
    <section className="mb-3">
      <h3>Drivers list</h3>
      <p>Amount of drivers: {drivers.length}</p>
      <section className="row g-3 ">{getDriversJSX()}</section>
    </section>
  );
};

export default DriversListCompact;
