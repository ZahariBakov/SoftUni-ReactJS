const baseUrl = "https://softuni-custom-server-0e0cf7bc4375.herokuapp.com/jsonstore"

export const getAll = async () => {
    let responce = await fetch(`${baseUrl}/pets`);

    let pets = await responce.json()

    let result = Object.values(pets)

    return result;
}
