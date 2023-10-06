const baseUrl = "https://softuni-custom-server-0e0cf7bc4375.herokuapp.com/jsonstore"

export const getAll = async () => {
    let responce = await fetch(`${baseUrl}/pets`);

    let pets = await responce.json()

    let result = Object.values(pets)

    return result;
}

export const create = async (petData) => {
    let responce = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(petData)
    });

    let result = await responce.json();
    
    return result;
};

export const getOne = (petId) => {
    return fetch(`${baseUrl}/pets/${petId}`)
        .then(res => res.json())
};
