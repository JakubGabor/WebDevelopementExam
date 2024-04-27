import { useState, useContext } from "react";
import { DriversContext } from "../../contexts/DriversContext";

const DeleteDriver = () => {
  const { deleteDriver, getDriversFromService } = useContext(DriversContext);

  const [id, setId] = useState("");
  const [deleteStatus, setDeleteStatus] = useState("");

  const handleChange = (e) => {
    setId(e.currentTarget.value);
  };

  const handleClick = async () => {
    const result = await deleteDriver(id);
    console.log(result);
    if (result === true) {
      await getDriversFromService();
      setDeleteStatus("Driver deleted successfully");
    } else {
      setDeleteStatus("Something went wrong, no driver deleted.");
    }
    setId("");
    setTimeout(() => {
      setDeleteStatus("");
    }, 7000);
  };

  return (
    <section className="mb-3 d-flex flex-column">
      <h3 className="mb-4">Delete a driver.</h3>
      <div className="d-flex flex-column">
        <label className="pl-3 mb-1">ID of driver:</label>
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

export default DeleteDriver;
