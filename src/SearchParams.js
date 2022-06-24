import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMAL = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const breeds = [];
    const [pets, setPets] = useState([]);

    useEffect(() => {
        requestPets();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}&location=${location}`
        )

        const json = await res.json();
        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                        onBlur={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                    >
                        <option />
                        {ANIMAL.map((animal) => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={(e) => {
                            setBreed(e.target.value);
                        }}
                        onBlur={(e) => {
                            setBreed(e.target.value);
                        }}
                    >
                        <option />
                        {breeds.map((allbreed) => (
                            <option key={allbreed} value={allbreed}>
                                {allbreed}
                            </option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {
                pets.map(pet => (
                    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
                ))
            }
        </div>
    );
};

export default SearchParams;
