export const  FETCH_DATA = "FETCH_DATA";

export default function(id){

    const request = Promise.resolve(["Data 1",
    "Data 2",
    "Data 3"]);
    


    return{
        type: FETCH_DATA,
        payload: request
    }
}