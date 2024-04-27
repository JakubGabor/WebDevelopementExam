import { DriverAdmin } from "../components/drivers";
import { TeamAdmin } from "../components/teams";
import { useState } from "react";

const AdminPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = () => {
    switch (selectedCategory) {
      case "drivers":
        return <DriverAdmin />;
      case "teams":
        return <TeamAdmin />;
    }
  };

  const isButtonActive = (category: String) => {
    return selectedCategory === category ? "category-active" : null;
  };

  return (
    <section className="container">
      <div className="mb-5">
        <h3 className="text-center m-4">Admin</h3>
        <input
          className={`p-1 w-50 mx-auto category ${isButtonActive("drivers")}`}
          onClick={() => setSelectedCategory("drivers")}
          type="button"
          value="Drivers"
        />
        <input
          className={`p-1 w-50 mx-auto category ${isButtonActive("teams")}`}
          onClick={() => setSelectedCategory("teams")}
          type="button"
          value="Teams"
        />
      </div>

      {handleChange()}
    </section>
  );
};

export default AdminPage;
