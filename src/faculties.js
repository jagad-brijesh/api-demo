import { useEffect, useState } from "react";
import Card from "./Card";


const FacultiesDetails = () => {
    var [Faculties, setFaculties] = useState([]);
    useEffect(() => {
        const url = "https://62d8f58f908831393597abde.mockapi.io/faculties";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log("res:::", json);
                setFaculties(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);



    var temp = Faculties.map(fObj => {

        return <>
            <Card 
                obj={{ ...fObj, opened:false }}
             />

        </>
    })

    return (
        <div className="container-fluid">

            <div className="row body content">{temp}</div>
        </div>
    )
};

export default FacultiesDetails;