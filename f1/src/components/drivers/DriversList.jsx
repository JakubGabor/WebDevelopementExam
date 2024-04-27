import { useContext, useEffect } from "react";
import DriverItem from "./DriverItem";
import { DriversContext } from "../../contexts/DriversContext";

const DriversList = () => {
  const { drivers } = useContext(DriversContext);

  const getDriversJSX = () => {
    const driversJSX = drivers.map((_drivers, i) => (
      <DriverItem
        key={i}
        id={_drivers.id}
        name={_drivers.name}
        age={_drivers.age}
        nationality={_drivers.nationality}
        image={_drivers.image}
      />
    ));
    return driversJSX;
  };

  return (
    <section className="mb-3">
      <h3>Drivers list</h3>
      <p>Amount of drivers: {drivers.length}</p>
      <section className="row g-3">{getDriversJSX()}</section>
    </section>
  );
};

export default DriversList;
