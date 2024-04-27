import DriversService from "../../services/DriversService";

const DriverItem = ({ id, name, age, nationality, image }) => {
  return (
    <article className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="border d-flex flex-column p-4 shadow-lg h-100 justify-content-center text-center">
        <h3 className="mw-100">{name}</h3>
        <p>ID: {id}</p>
        <img
          className="img-fluid p-2 rounded-circle mx-auto"
          src={`${DriversService.getImageUrl()}${image}`}
          alt={`Picture of ${name}. Photo.`}
          width={250}
        />
        <p>Age: {age}</p>
        <p>Nationality: {nationality}</p>
      </div>
    </article>
  );
};

export default DriverItem;
