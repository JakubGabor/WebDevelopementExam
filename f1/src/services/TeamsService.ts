import axios from "axios";
import ITeam from "../interfaces/ITeam";

const TeamsService = (() => {
  const teamsController = "http://localhost:5055/api/teams";
  const carImageUploadController =
    "http://localhost:5055/api/imageupload/savecarimage";
  const logoImageUploadController =
    "http://localhost:5055/api/imageupload/savelogoimage";
  const carImageUrl = "http://localhost:5055/images/teams/car/";
  const logoImageUrl = "http://localhost:5055/images/teams/logo/";

  const getAll = async () => {
    try {
      const result = await axios.get(teamsController);
      return result.data;
    } catch (error) {
      return false;
    }
  };

  const getById = async (id: number) => {
    try {
      const result = await axios.get(`${teamsController}/${id}`);
      return result.data;
    } catch (error) {
      return false;
    }
  };

  const getByManufacturer = async (name: string) => {
    try {
      const result = await axios.get(
        `${teamsController}/getbymanufacturer/${name}`
      );
      return result.data;
    } catch (error) {
      return false;
    }
  };

  const putTeam = async (teamToUpdate: ITeam) => {
    try {
      const result = await axios.put(teamsController, teamToUpdate);
      return result;
    } catch (error) {
      return false;
    }
  };

  const postTeam = async (newTeam: ITeam, carImage: File, logoImage: File) => {
    try {
      const result = await axios.post(teamsController, newTeam);

      let formData = new FormData();
      formData.append("file", carImage);

      const resultCarImageUpload = await axios({
        url: carImageUploadController,
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      formData = new FormData();
      formData.append("file", logoImage);

      const resultLogoImageUpload = await axios({
        url: logoImageUploadController,
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      formData.delete("file");
      return true;
    } catch (error) {
      return false;
    }
  };

  const getCarImageUrl = () => {
    return carImageUrl;
  };

  const getLogoImageUrl = () => {
    return logoImageUrl;
  };

  const deleteTeam = async (id: number) => {
    try {
      const result = await axios.delete(`${teamsController}/${id}`);

      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    getAll,
    getById,
    getByManufacturer,
    postTeam,
    putTeam,
    getCarImageUrl,
    getLogoImageUrl,
    deleteTeam,
  };
})();

export default TeamsService;
