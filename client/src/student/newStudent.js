import { Fragment, useState } from "react";
import { toast } from "react-toastify";

const NewStudent = () => {
  const [values, setValues] = useState({
    studentName: "",
    phone: "",
    age: "",
    note: "",
    image: "",
  });

  const handleSubmit = (e)=>{
    //
  }

  const handleImageChange=()=>{
    //
  }

  const handleChange=()=>{
    //
  }

  const {studentName, phone, age, note, image} = values;

  const studentForm=()=>{
    <form onSubmit={handleSubmit}>
        <div className="form-froup">
            <label className="btn btn-outline-secondary btn-block m-2 text-left">
                <input type="file" />
            </label>
        </div>
    </form> 
  }
  return(
    <Fragment>
        <div className="container-fluid h1 p-5 text-center">Post new student</div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    {studentForm()}
                </div>
                <div className="col-md-10">
                    Image
                </div>
            </div>
        </div>
    </Fragment>
  )
};
