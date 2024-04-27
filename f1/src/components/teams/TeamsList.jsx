import { useContext, useEffect } from "react";
import TeamItem from "./TeamItem";
import { TeamsContext } from "../../contexts/TeamsContext";

const TeamsList = () => {
  const { teams } = useContext(TeamsContext);

  const getTeamsJSX = () => {
    const teamsJSX = teams.map((_teams, i) => (
      <TeamItem
        key={i}
        id={_teams.id}
        manufacturer={_teams.manufacturer}
        driver1={_teams.driver1}
        driver2={_teams.driver2}
        imageCar={_teams.imageCar}
        imageLogo={_teams.imageLogo}
      />
    ));
    return teamsJSX;
  };

  return (
    <section className="mb-3">
      <h3>Teams list</h3>
      <p>Amount of teams: {teams.length}</p>
      <section className="row g-3">{getTeamsJSX()}</section>
    </section>
  );
};

export default TeamsList;
