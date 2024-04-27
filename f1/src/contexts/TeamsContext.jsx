import { createContext, useState, useEffect } from "react";
import TeamsService from "../services/TeamsService";

export const TeamsContext = createContext(null);

export const TeamsProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeamsFromService();
  }, []);

  const getTeamsFromService = async () => {
    const teamsFromService = await TeamsService.getAll();
    setTeams(teamsFromService);
  };

  const getById = async (id) => {
    const teamToUpdate = await TeamsService.getById(id);
    return teamToUpdate;
  };

  const getByName = async (id) => {
    const teamToUpdate = await TeamsService.getByName(id);
    return teamToUpdate;
  };

  const editTeam = async (teamToUpdate) => {
    await TeamsService.putTeam(teamToUpdate);
    getTeamsFromService();
  };

  const deleteTeam = async (id) => {
    const result = await TeamsService.deleteTeam(id);
    return result;
  };

  return (
    <TeamsContext.Provider
      value={{
        teams,
        getTeamsFromService,
        getById,
        getByName,
        editTeam,
        deleteTeam,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};
