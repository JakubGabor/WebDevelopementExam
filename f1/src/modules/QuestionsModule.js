import DriversService from "../services/DriversService";
import TeamsService from "../services/TeamsService";

const getRandomObject = (array) => {
  const randomNumber = Math.floor(Math.random() * array.length);
  const randomObject = array[randomNumber];

  if (!randomObject) {
    return null;
  } else {
    return randomObject;
  }
};

const getRandomChoices = (array, randomObject, property) => {
  const otherObjects = array.filter(
    (otherObject) => otherObject[property] !== randomObject[property]
  );
  const shuffledOtherObjects = otherObjects.sort(() => 0.5 - Math.random());
  const randomChoices = shuffledOtherObjects.slice(0, 3);

  if (!randomChoices) {
    return null;
  } else {
    return randomChoices;
  }
};

const driverAgeQuestion = (drivers) => {
  const randomDriver = getRandomObject(drivers);
  const randomChoices = getRandomChoices(drivers, randomDriver, "age");
  if (!randomDriver || !randomChoices) return null;

  return {
    question: `How old is ${randomDriver.name}?`,
    image: DriversService.getImageUrl() + randomDriver.image,
    choices: [randomDriver.age, ...randomChoices.map((d) => d.age)],
    correctAnswer: randomDriver.age,
  };
};

const driverNationalityQuestion = (drivers) => {
  const randomDriver = getRandomObject(drivers);
  const randomChoices = getRandomChoices(drivers, randomDriver, "nationality");
  if (!randomDriver || !randomChoices) return null;

  return {
    question: `What nationality is ${randomDriver.name}?`,
    image: DriversService.getImageUrl() + randomDriver.image,
    choices: [
      randomDriver.nationality,
      ...randomChoices.map((d) => d.nationality),
    ],
    correctAnswer: randomDriver.nationality,
  };
};

const driverImageQuestion = (drivers) => {
  const randomDriver = getRandomObject(drivers);
  const randomChoices = getRandomChoices(drivers, randomDriver, "name");
  if (!randomDriver || !randomChoices) return null;

  return {
    question: `Who is at the picture above?`,
    image: DriversService.getImageUrl() + randomDriver.image,
    choices: [randomDriver.name, ...randomChoices.map((d) => d.name)],
    correctAnswer: randomDriver.name,
  };
};

const driverTeamQuestion = (teams) => {
  const randomTeam = getRandomObject(teams);
  const randomChoices = getRandomChoices(teams, randomTeam, "manufacturer");
  if (!randomTeam || !randomChoices) return null;

  return {
    question: `What team logo is at the picture above?`,
    image: TeamsService.getLogoImageUrl() + randomTeam.imageLogo,
    choices: [
      randomTeam.manufacturer,
      ...randomChoices.map((d) => d.manufacturer),
    ],
    correctAnswer: randomTeam.manufacturer,
  };
};

export {
  driverAgeQuestion,
  driverNationalityQuestion,
  driverImageQuestion,
  driverTeamQuestion,
};
