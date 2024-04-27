import { DriversProvider } from "../../contexts/DriversContext";
import {
  EditDriver,
  DriversList,
  DeleteDriver,
  AddDriver,
  DriversListCompact,
} from ".";
import { useState } from "react";

const DriverAdmin = () => {
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const handleChange = () => {
    switch (selectedSubCategory) {
      case "seeAll":
        return <DriversList />;
      case "addNew":
        return (
          <div>
            <AddDriver /> <DriversListCompact />
          </div>
        );
      case "edit":
        return (
          <div>
            <EditDriver /> <DriversListCompact />
          </div>
        );
      case "delete":
        return (
          <div>
            <DeleteDriver /> <DriversListCompact />
          </div>
        );
        break;
    }
  };

  const isButtonActive = (category: String) => {
    return selectedSubCategory === category ? "category-active" : null;
  };

  return (
    <section className="">
      <div className="row text-center mb-5">
        <div className="g-2 col-sm-12 col-md-3">
          <input
            className={`category ${isButtonActive("seeAll")}`}
            onClick={() => setSelectedSubCategory("seeAll")}
            type="button"
            value="See all"
          />
        </div>
        <div className="g-2 col-sm-12 col-md-3">
          <input
            className={`category ${isButtonActive("addNew")}`}
            onClick={() => setSelectedSubCategory("addNew")}
            type="button"
            value="Add new"
          />
        </div>
        <div className="g-2 col-sm-12 col-md-3">
          <input
            className={`category ${isButtonActive("edit")}`}
            onClick={() => setSelectedSubCategory("edit")}
            type="button"
            value="Edit"
          />
        </div>
        <div className="g-2 col-sm-12 col-md-3">
          <input
            className={`category ${isButtonActive("delete")}`}
            onClick={() => setSelectedSubCategory("delete")}
            type="button"
            value="Delete"
          />
        </div>
      </div>

      {handleChange()}
    </section>
  );
};

export default DriverAdmin;
