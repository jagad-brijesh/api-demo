import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import FacultyDetails from "./FacultyDetails";

const Card = (props) => {

    let data;
    if (props.obj.opened){
        data = <div className="Card2 col-lg-3 col-md-4 col-sm-6" onClick={() => {
            console.log(props.obj);
        }}>
            <div className="Card-Details2 rounded">
                <div className=" profile">
                    <img className="img-fluid rounded" src={props.obj.FacultyImage} />
                </div>
                <div className="Data">
                    <div className="Name col-md-12 content">
                        {props.obj.FacultyName}
                    </div>
                    <div className="Role col-md-12 content">
                        {props.obj.FacultyDesignation}
                    </div>
                    <hr />
                    <div className="Education col-md-12 content">
                        {props.obj.FacultyHighestEducation}
                    </div>
                    <hr />
                    <div className="Other row">
                        <div className="col-md-6 content">
                            <div className="row o1">
                                <div className="OtherTitle col-md-12">
                                    Experience
                                </div>
                                <div className="ExpData content col-md-12 p-1">
                                    <div className="ExpData1">
                                        {props.obj.FacultyExperienceInYears}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 content">
                            <div className="row o2">
                                <div className="OtherTitle col-md-12">
                                    Working Since
                                </div>
                                <div className="since content col-md-12 p-1">
                                    <div className="sinceData">
                                        {props.obj.FacultyWorkingSince}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="col">
                        <div className="row o1">
                            <div className="OtherTitle col-md-12">
                                Phone No.
                            </div>
                            <div className="text-muted content col-md-12 p-1">
                                <div className="">
                                    {props.obj.FacultyMobileNumber}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="col">
                            <div className="OtherTitle col-md-12">
                                Email Id:
                            </div>
                            <div className="text-muted content col-md-12 p-1">
                                {props.obj.FacultyEmailAddress}
                            </div>
                    </div>
                </div>
            </div>
        </div>;
    }else{
        data= <div className="Card1 col-lg-3 col-md-4 col-sm-6" onClick={() => {
                    console.log(props.obj);
                }}>
        <div className="Card-Details rounded">
            <div className=" profile">
                    <img className="img-fluid rounded" src={props.obj.FacultyImage} />
            </div>
            <div className="Data">
                <div className="h-1 col-md-12 content">
                        {props.obj.FacultyName }
                </div>
                <div className="Role col-md-12 content">
                        {props.obj.FacultyDesignation}
                </div>
                <hr />
                <div className="Education col-md-12 content">
                        {props.obj.FacultyHighestEducation}
                </div>
                <hr />
                <div className="Other row">
                    <div className="col-md-6 content">
                        <div className="row o1">
                            <div className="OtherTitle col-md-12">
                                Experience
                            </div>
                            <div className="ExpData content col-md-12 p-1">
                                <div className="ExpData1">
                                        {props.obj.FacultyExperienceInYears}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 content">
                        <div className="row o2">
                            <div className="OtherTitle col-md-12">
                                Working Since
                            </div>
                            <div className="since content col-md-12 p-1">
                                <div className="sinceData">
                                        {props.obj.FacultyWorkingSince}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col m-1">
                    <div>
                            <Link to={"/faculty/" + props.obj.id} className="btn btn-sm btn-outline-info"> View full profile <FontAwesomeIcon icon="fa-duotone fa-angles-right" /> </Link>
                    </div>
                </div>
            </div>    
        </div>
    </div>;
    }

    return (
        <>
          {data}  
        </>
    );
}

export default Card;