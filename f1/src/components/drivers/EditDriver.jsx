import { useContext, useState } from "react";
import { DriversContext } from "../../contexts/DriversContext";
import DriversService from "../../services/DriversService";

const EditDriver = () => {
  const { getById, editDriver } = useContext(DriversContext);

  const [id, setId] = useState("");
  const [driverToUpdate, setDriverToUpdate] = useState({
    name: "",
    age: "",
    nationality: "",
  });
  const [image, setImage] = useState(
    <img
      className="mx-auto mb-2 rounded-circle"
      width={256}
      src="images/defaultDriver.avif"
      alt={"Default Driver Picture. Ilustration"}
    />
  );

  const [editStatus, setEditStatus] = useState("");

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "id":
        setId(e.currentTarget.value);
        break;
      case "name":
        setDriverToUpdate({ ...driverToUpdate, name: e.currentTarget.value });
        break;
      case "age":
        setDriverToUpdate({ ...driverToUpdate, age: e.currentTarget.value });
        break;
      case "nationality":
        setDriverToUpdate({
          ...driverToUpdate,
          nationality: e.currentTarget.value,
        });
        break;
    }
  };

  const getByIdFromContext = async () => {
    const driverFromContext = await getById(id);

    setTimeout(() => {
      setEditStatus("");
    }, 7000);

    if (!id) {
      setEditStatus("You need to enter a ID.");
      return;
    }

    if (driverFromContext) {
      setImage(
        <img
          className="mx-auto mb-2 rounded-circle"
          width={256}
          src={DriversService.getImageUrl() + driverFromContext.image}
          alt={"Driver " + driverFromContext.name + ". Picture."}
        />
      );
      setDriverToUpdate(driverFromContext);
    } else {
      setEditStatus("Wrong ID. Driver with that ID dont exist.");
      setId("");
      setDriverToUpdate({
        name: "",
        age: "",
        nationality: "",
      });
      setImage(
        <img
          className="mx-auto mb-2 rounded-circle"
          width={256}
          src="images/defaultDriver.avif"
          alt={"Default Driver Picture. Ilustration"}
        />
      );
    }
  };

  const saveChanges = () => {
    editDriver(driverToUpdate);
  };

  return (
    <section className="mb-3 d-flex flex-column">
      <h3 className="mb-4">Edit a driver.</h3>
      {image}
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
        <label className="me-2">Name:</label>
        <input
          onChange={handleChange}
          name="name"
          value={driverToUpdate.name}
          type="text"
        />
      </div>

      <div className="mb-3 d-flex flex-column">
        <label className="me-2">Age:</label>
        <input
          onChange={handleChange}
          name="age"
          value={driverToUpdate.age}
          type="number"
          required
        />
      </div>

      <div className="mb-3 d-flex flex-column">
        <label className="me-2">Nationality:</label>
        <input
          onChange={handleChange}
          name="nationality"
          value={driverToUpdate.nationality}
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

export default EditDriver;
