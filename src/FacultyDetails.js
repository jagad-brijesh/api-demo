import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

const FacultyDetails = ()=>{

    var [Faculty, setFaculty] = useState({});

    let params = useParams();
    
    useEffect(() => {
        const url = "https://62d8f58f908831393597abde.mockapi.io/faculties/" + params.id;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log("res:::", json);
                setFaculty(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    console.log(params);
    return <>
        <div className="container factulty1">
            <div className="row">
                <div className="col-md-3">
                    <Card className="abc" obj={{ ...Faculty, opened: true }} />
                </div>
                <div className="col-md-9 p-3">
                    <div className="h1">
                        Details of Faculty:
                    </div>
                    <hr/>
                    <div className="col-md-12 text-info">
                        <div className="h-3 text-info">
                            Seating : 
                        </div>
                        <span className="bg-secondary rounded p-1 text-light">{Faculty.FacultySeating}</span>
                    </div>
                    <hr/>
                    <div className="col-md-12">
                        <div className="h-3 text-info">
                            Description : 
                        </div>
                        <p className="lead">{Faculty.FacultyProfileDescription}</p>
                    </div>
                    <hr />
                    <div className="col-md-12">
                        <div className="h-3 text-info">
                            Specialization :
                        </div>
                        <p className="lead">{Faculty.FacultyAreaSpecialization}</p>
                    </div>
                    <hr />
                    <div className="col-md-12">
                        <div className="h-3 text-info">
                            Subjects Taught :
                        </div>
                        <p className="lead">{Faculty.FacultySubjectsTaught}</p>
                    </div>
                </div>
            </div>
            
        </div>
        </>;
}
export default FacultyDetails;