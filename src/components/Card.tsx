import Persons from "../models/personsModels";

type Props = {
  person: Persons;
};

export const Card = ({ person }: Props) => {
  return (
    <>
      <div>
        <h1>{person.name}</h1>
        <img src={person.imageUrl} alt="opa"/>
        <button>sobre</button>
      </div>
    </>
  );
};
