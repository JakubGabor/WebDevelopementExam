import { useContext, useEffect } from "react";
import { TeamsContext } from "../../contexts/TeamsContext";

const TeamsListCompact = () => {
  const { teams } = useContext(TeamsContext);

  const getTeamsJSX = () => {
    const teamsJSX = teams.map((_teams, i) => (
      <div key={i} className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <li className="border d-flex flex-column p-2 h-100 shadow-lg justify-content-center text-center">
          ID: {_teams.id} <br />
          {_teams.manufacturer}
        </li>
      </div>
    ));
    return teamsJSX;
  };

  return (
    <section className="mb-3">
      <h3>Teams list</h3>
      <p>Amount of teams: {teams.length}</p>
      <section className="row g-3 ">{getTeamsJSX()}</section>
    </section>
  );
};

export default TeamsListCompact;
