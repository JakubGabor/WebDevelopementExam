import { useContext, useState } from "react";
import { TeamsContext } from "../../contexts/TeamsContext";
import TeamsService from "../../services/TeamsService";

const EditTeam = () => {
  const { getById, editTeam } = useContext(TeamsContext);

  const [id, setId] = useState("");
  const [teamToUpdate, setTeamToUpdate] = useState({
    manufacturer: "",
    driver1: "",
    driver2: "",
  });

  const [imageCar, setCarImage] = useState(
    <img
      className="mx-auto mb-2 img-fluid"
      width={500}
      src="images/f1carDefault.avif"
      alt={"Default Car Picture. Ilustration"}
    />
  );

  const [imageLogo, setLogoImage] = useState(
    <img
      className="mx-auto mb-2"
      width={100}
      src="images/defaultLogo.avif"
      alt={"Default Logo. Ilustration"}
    />
  );

  const [editStatus, setEditStatus] = useState("");

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "id":
        setId(e.currentTarget.value);
        break;
      case "manufacturer":
        setTeamToUpdate({
          ...teamToUpdate,
          manufacturer: e.currentTarget.value,
        });
        break;
      case "driver1":
        setTeamToUpdate({ ...teamToUpdate, driver1: e.currentTarget.value });
        break;
      case "driver2":
        setTeamToUpdate({
          ...teamToUpdate,
          driver2: e.currentTarget.value,
        });
        break;
    }
  };

  const getByIdFromContext = async () => {
    const teamFromContext = await getById(id);

    setTimeout(() => {
      setEditStatus("");
    }, 7000);

    if (!id) {
      setEditStatus("You need to enter a ID.");
      return;
    }

    if (teamFromContext) {
      setCarImage(
        <img
          className="mx-auto mb-2 img-fluid"
          width={500}
          src={TeamsService.getCarImageUrl() + teamFromContext.imageCar}
          alt={"Car of " + teamFromContext.manufacturer + ". Picture."}
        />
      );
      setLogoImage(
        <img
          className="mx-auto mb-2"
          width={100}
          src={TeamsService.getLogoImageUrl() + teamFromContext.imageLogo}
          alt={"Logo of " + teamFromContext.manufacturer + ". Ilustration."}
        />
      );
      setTeamToUpdate(teamFromContext);
    } else {
      setEditStatus("Wrong ID. Team with that ID dont exist.");
      setId("");
      setTeamToUpdate({
        manufacturer: "",
        driver1: "",
        driver2: "",
      });
      setCarImage(
        <img
          className="mx-auto mb-2 img-fluid"
          width={500}
          src="images/f1carDefault.avif"
          alt={"Default Car Picture. Ilustration"}
        />
      );
      setLogoImage(
        <img
          className="mx-auto mb-2"
          width={100}
          src="images/defaultLogo.avif"
          alt={"Default Logo. Ilustration"}
        />
      );
    }
  };

  const saveChanges = () => {
    editTeam(teamToUpdate);
  };

  return (
    <section className="mb-3 d-flex flex-column">
      <h3 className="mb-4">Edit a team.</h3>
      {imageCar} {imageLogo}
      <div className="mb-3 d-flex flex-column">
        <label className="me-2">ID:</label>
        <input
          onChange={handleChange}
          name="id"
          placeholder="Enter ID"
          value={id}
          type="text"
        />
        <input
          className="m-3 p-1 px-3 w-20 mx-auto rounded-pill button"
          onClick={getByIdFromContext}
          type="button"
          value="Get by id"
        />
      </div>
      <div className="mb-3 d-flex flex-column">
        <label className="me-2">Manufacturer:</label>
        <input
          onChange={handleChange}
          name="manufacturer"
          value={teamToUpdate.manufacturer}
          type="text"
        />
      </div>
      <div className="mb-3 d-flex flex-column">
        <label className="me-2">Driver 1:</label>
        <input
          onChange={handleChange}
          name="driver1"
          value={teamToUpdate.driver1}
          type="text"
          required
        />
      </div>
      <div className="mb-3 d-flex flex-column">
        <label className="me-2">Driver 2:</label>
        <input
          onChange={handleChange}
          name="driver2"
          value={teamToUpdate.driver2}
          type="text"
        />
      </div>
      <p className="mx-auto red-underline">{editStatus}</p>
      <input
        className="m-3 p-1 w-50 mx-auto rounded-pill button"
        onClick={saveChanges}
        type="button"
        value="Save change"
      />
    </section>
  );
};

export default EditTeam;
