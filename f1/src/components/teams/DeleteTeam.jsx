import { useState, useContext } from "react";
import { TeamsContext } from "../../contexts/TeamsContext";

const DeleteTeam = () => {
  const { deleteTeam, getTeamsFromService } = useContext(TeamsContext);

  const [id, setId] = useState("");
  const [deleteStatus, setDeleteStatus] = useState("");

  const handleChange = (e) => {
    setId(e.currentTarget.value);
  };

  const handleClick = async () => {
    const result = await deleteTeam(id);
    console.log(result);
    if (result === true) {
      await getTeamsFromService();
      setDeleteStatus("Team deleted successfully");
    } else {
      setDeleteStatus("Something went wrong, no team deleted.");
    }
    setId("");
    setTimeout(() => {
      setDeleteStatus("");
    }, 7000);
  };

  return (
    <section className="mb-3 d-flex flex-column">
      <h3 className="mb-4">Delete a team.</h3>
      <div className="d-flex flex-column">
        <label className="pl-3 mb-1">ID of team:</label>
        <input
          className="w-50"
          onChange={handleChange}
          name="id"
          placeholder="Enter ID"
          value={id}
          type="text"
        />
      </div>
      <p className="m-3 red-underline">{deleteStatus}</p>
      <input
        className="m-3 p-1 w-50 mx-auto rounded-pill button"
        onClick={handleClick}
        type="button"
        value="Delete"
      />
    </section>
  );
};

export default DeleteTeam;
