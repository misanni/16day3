const URL='https://peopleapp-3re1.onrender.com/';
export const peopleLoader = async () => {
    const response = await fetch(URL + "/people"); //there is a slash here
    const people = await response.json();
    return people;
}