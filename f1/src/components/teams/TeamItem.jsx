import TeamsService from "../../services/TeamsService";

const TeamItem = ({
  id,
  manufacturer,
  driver1,
  driver2,
  imageCar,
  imageLogo,
}) => {
  return (
    <article className="col-sm-12 col-md-12 col-lg-6">
      <div className="border d-flex flex-column p-4 shadow-lg h-100 justify-content-center text-center">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="mw-100">{manufacturer}</h3>
            <img
              className="img-fluid p-2 rounded-circle"
              src={`${TeamsService.getLogoImageUrl()}${imageLogo}`}
              alt={`Logo of ${manufacturer}. Ilustration.`}
              width={90}
            />
          </div>
          <p>ID: {id}</p>
          <p>Driver 1: {driver1}</p>
          <p>Driver 2: {driver2}</p>
        </div>

        <img
          className="img-fluid p-2 mx-auto"
          src={`${TeamsService.getCarImageUrl()}${imageCar}`}
          alt={`Car of ${manufacturer}. Photo.`}
          width={500}
        />
      </div>
    </article>
  );
};

export default TeamItem;
