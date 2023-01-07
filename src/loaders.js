const URL='http://localhost:4000';
export const peopleLoader = async () => {
    const response = await fetch(URL + "/people"); //there is a slash here
    const people = await response.json();
    return people;
}