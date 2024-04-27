const F1Service = (() => {
  const apiEndpoints = {
    drivers: "http://localhost:5055/api/drivers",
    teams: "http://localhost:5055/api/teams",
    races: "http://localhost:5055/api/races",
  };

  const getAllDrivers = async () => {
    const drivers = await axios.get(apiEndpoints.drivers);
    return drivers.data;
  };

  const getAllTeams = async () => {
    const teams = await axios.get(apiEndpoints.teams);
    return teams.data;
  };

  const getAllRaces = async () => {
    const races = await axios.get(apiEndpoints.races);
    return races.data;
  };

  return {
    getAllDrivers,
    getAllTeams,
    getAllRaces,
  };
})();

export default F1Service;
