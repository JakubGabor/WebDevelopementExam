import axios from "axios";
import IDriver from "../interfaces/IDriver";

const DriversService = (() => {
  const driversController = "http://localhost:5055/api/drivers";
  const imageUploadController =
    "http://localhost:5055/api/imageupload/savedriverimage";
  const imageUrl = "http://localhost:5055/images/drivers/";

  const getAll = async () => {
    try {
      const result = await axios.get(driversController);
      return result.data;
    } catch (error) {
      return false;
    }
  };

  const getById = async (id: number) => {
    try {
      const result = await axios.get(`${driversController}/${id}`);
      return result.data;
    } catch (error) {
      return false;
    }
  };

  const getByName = async (name: string) => {
    try {
      const result = await axios.get(`${driversController}/getbyname/${name}`);
      return result.data;
    } catch (error) {
      return false;
    }
  };

  const putDriver = async (driverToUpdate: IDriver) => {
    try {
      const result = await axios.put(driversController, driverToUpdate);
      return result;
    } catch (error) {
      return false;
    }
  };

  const postDriver = async (newDriver: IDriver, image: File) => {
    const formData = new FormData();
    formData.append("file", image);

    try {
      const result = await axios.post(driversController, newDriver);

      const resultImageUpload = await axios({
        url: imageUploadController,
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

  const getImageUrl = () => {
    return imageUrl;
  };

  const deleteDriver = async (id: number) => {
    try {
      const result = await axios.delete(`${driversController}/${id}`);

      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    getAll,
    getById,
    getByName,
    postDriver,
    putDriver,
    getImageUrl,
    deleteDriver,
  };
})();

export default DriversService;
