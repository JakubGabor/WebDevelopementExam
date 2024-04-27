import { createContext, useState, useEffect } from "react";
import DriversService from "../services/DriversService";

export const DriversContext = createContext(null);

export const DriversProvider = ({ children }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDriversFromService();
  }, []);

  const getDriversFromService = async () => {
    const driversFromService = await DriversService.getAll();
    setDrivers(driversFromService);
  };

  const getById = async (id) => {
    const driverToUpdate = await DriversService.getById(id);
    return driverToUpdate;
  };

  const getByName = async (id) => {
    const driverToUpdate = await DriversService.getByName(id);
    return driverToUpdate;
  };

  const editDriver = async (driverToUpdate) => {
    await DriversService.putDriver(driverToUpdate);
    getDriversFromService();
  };

  const deleteDriver = async (id) => {
    const result = await DriversService.deleteDriver(id);
    return result;
  };

  return (
    <DriversContext.Provider
      value={{
        drivers,
        getDriversFromService,
        getById,
        getByName,
        editDriver,
        deleteDriver,
      }}
    >
      {children}
    </DriversContext.Provider>
  );
};
