import { useContext, useEffect, useState } from "react";
import { DriversContext } from "../../contexts/DriversContext";
import DriversService from "../../services/DriversService";

const AddDriver = () => {
  const { newDriver, getDriversFromService } = useContext(DriversContext);

  const [driverToAdd, setDriverToAdd] = useState({});
  const [image, setImage] = useState(null);

  const [addStatus, setAddStatus] = useState("");

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setDriverToAdd({ ...driverToAdd, name: e.currentTarget.value });
        break;
      case "age":
        setDriverToAdd({ ...driverToAdd, age: e.currentTarget.value });
        break;
      case "nationality":
        setDriverToAdd({
          ...driverToAdd,
          nationality: e.currentTarget.value,
        });
        break;
      case "image":
        setImage(e.currentTarget.files[0]);
        break;
    }
  };

  const saveDriver = async () => {
    setTimeout(() => {
      setAddStatus("");
    }, 7000);

    if (
      !driverToAdd.name ||
      !driverToAdd.age ||
      !driverToAdd.nationality ||
      !image
    ) {
      setAddStatus("All fields need to be filled out. Driver not added.");
      return;
    } else if (driverToAdd.age < 18) {
      setAddStatus("Driver needs to be atleast 18 y/o.");
      return;
    }

    const newDriver = {
      name: driverToAdd.name,
      age: driverToAdd.age,
      nationality: driverToAdd.nationality,
      image: image.name,
    };

    const result = await DriversService.postDriver(newDriver, image);
    if (result === true) {
      setAddStatus("Driver added successfully");
      await getDriversFromService();
    } else {
      setAddStatus("Failed to add driver");
    }
  };

  return (
    <section className="mb-3 d-flex flex-column">
      <h3 className="mb-4">Add a new driver.</h3>
      <div className="mb-3 d-flex flex-column">
        <label className="me-2">Name:</label>
        <input
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="mb-3 d-flex flex-column">
        <label className="me-2">Age:</label>
        <input
          name="age"
          placeholder="Enter age"
          onChange={handleChange}
          type="number"
        />
      </div>
      <div className="mb-3 d-flex flex-column">
        <label className="me-2">Nationality:</label>
        <input
          name="nationality"
          placeholder="Enter nationality"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="mb-3 d-flex ">
        <label className="me-2">Picture:</label>
        <input
          className="button form-control form-control-sm"
          name="image"
          onChange={handleChange}
          type="file"
        />
      </div>
      <p className="red-underline">{addStatus}</p>
      <input
        className="p-1 w-50 mx-auto rounded-pill button"
        onClick={saveDriver}
        type="button"
        value="Save"
      />
    </section>
  );
};

export default AddDriver;
