import { useContext, useEffect, useState } from "react";
import { TeamsContext } from "../../contexts/TeamsContext";
import TeamsService from "../../services/TeamsService";

const AddTeam = () => {
  const { newTeam, getTeamsFromService } = useContext(TeamsContext);

  const [teamToAdd, setTeamToAdd] = useState({});
  const [imageCar, setCarImage] = useState(null);
  const [imageLogo, setLogoImage] = useState(null);

  const [addStatus, setAddStatus] = useState("");

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "manufacturer":
        setTeamToAdd({ ...teamToAdd, manufacturer: e.currentTarget.value });
        break;
      case "driver1":
        setTeamToAdd({ ...teamToAdd, driver1: e.currentTarget.value });
        break;
      case "driver2":
        setTeamToAdd({
          ...teamToAdd,
          driver2: e.currentTarget.value,
        });
        break;
      case "imageCar":
        setCarImage(e.currentTarget.files[0]);
        break;
      case "imageLogo":
        setLogoImage(e.currentTarget.files[0]);
        break;
    }
  };

  const saveTeam = async () => {
    setTimeout(() => {
      setAddStatus("");
    }, 7000);

    if (
      !teamToAdd.manufacturer ||
      !teamToAdd.driver1 ||
      !teamToAdd.driver2 ||
      !imageCar ||
      !imageLogo
    ) {
      setAddStatus("All fields need to be filled out. Team not added.");
      return;
    }

    const newTeam = {
      manufacturer: teamToAdd.manufacturer,
      driver1: teamToAdd.driver1,
      driver2: teamToAdd.driver2,
      imageCar: imageCar.name,
      imageLogo: imageLogo.name,
    };

    const result = await TeamsService.postTeam(newTeam, imageCar, imageLogo);
    if (result === true) {
      setAddStatus("Team added successfully");
      await getTeamsFromService();
    } else {
      setAddStatus("Failed to add team");
    }
  };

  return (
    <section className="mb-3 d-flex flex-column">
      <h3 className="mb-4">Add a new Team.</h3>
      <div className="mb-3 d-flex flex-column">
        <label className="me-2">Manufacturer:</label>
        <input
          name="manufacturer"
          placeholder="Enter manufacturer"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="mb-3 d-flex flex-column">
        <label className="me-2">Driver 1:</label>
        <input
          name="driver1"
          placeholder="Enter full name of driver 1"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="mb-3 d-flex flex-column">
        <label className="me-2">Driver 2:</label>
        <input
          name="driver2"
          placeholder="Enter full name of driver 2"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="mb-3 d-flex flex-column">
        <label className="me-2">Picture of car:</label>
        <input
          className="button form-control form-control-sm"
          name="imageCar"
          onChange={handleChange}
          type="file"
        />
      </div>
      <div className="mb-3 d-flex flex-column">
        <label className="me-2">Logo:</label>
        <input
          className="button form-control form-control-sm"
          name="imageLogo"
          onChange={handleChange}
          type="file"
        />
      </div>
      <p className="red-underline">{addStatus}</p>
      <input
        className="p-1 w-50 mx-auto rounded-pill button"
        onClick={saveTeam}
        type="button"
        value="Save"
      />
    </section>
  );
};

export default AddTeam;
