import { useEffect, useState } from "react";
import PetCard from "./Petcard";

import * as PetService from "../../services/petService";

const PetList = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        PetService.getAll()
            .then(result => {
                setPets(result);
            })
    }, []);

    return (
        <>
            {pets.length > 0
                ? (
                    <ul className="other-pets-list">
                        {pets.map(x => <PetCard key={x._id} pet={x} />)}
                    </ul>
                ) 
                : <p className="no-pets">No pets in database!</p>
            }
        </>
    );
}

export default PetList;
