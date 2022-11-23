 

 
import React, { useState } from "react";
import DMP from "../../assets/DMP.png";
const AddFamily = () => {
  const [visible, setVisble] = useState(false);
  const [formValues, setFormValues] = useState([
    { fname: "", occupation: "", age: "", mobile: "" },
  ]);

  // const showReantDetails = () => {
  //    console.log("heloo")

  // };
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  return (
    <div>
      <div>
        <main id="main" class="main">
          <section class="section dashboard">
            <div class="row">
              <div class="col-lg-12  px-5">
                <div class="row">
                  <div class="col-xxl-4 col-md-4 ">
                    <div
                      class="card info-card revenue-card border border-dark  rounded-5"
                      style={{ height: "280px" }}
                    >
                      <div class="card-body d-flex align-items-center justify-content-center ">
                        <h5 class="card-title">Upload Passport Size Image</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-4 col-md-4">
                    <div
                      class="  info-card revenue-card"
                      style={{ height: "200px" }}
                    >
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center">
                          <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            {/* <i class="bi bi-currency-dollar"></i> */}
                            <img src={DMP} alt="" className="w-50" />
                          </div>
                          <div class="ps-3">
                            <span class="text-muted small pt-2 ps-1">
                              Dhaka Metropolitan Police
                            </span>
                          </div>
                        </div>

                        <div class="row mb-3  justify-content-center mt-5">
                          <div class="col-sm-10">
                            <input
                              type="text"
                              class="form-control"
                              id="inputText"
                              placeholder="Division"
                            />
                          </div>
                        </div>
                        <div class="row mb-3 justify-content-center">
                          <div class="col-sm-10">
                            <input
                              type="text"
                              class="form-control"
                              id="inputText"
                              placeholder="Thana"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-4 col-md-4 justify-content-center align-items-center   ">
                    <div
                      class="card info-card revenue-card border-dark  rounded-5 border   "
                      style={{ height: "280px" }}
                    >
                      <div class="card-body">
                        <div class="row mb-3 justify-content-center align-items-center mt-3">
                          <div class="col-sm-10">
                            <input
                              type="text"
                              class="form-control"
                              id="inputText"
                              placeholder="Flat/Floor"
                            />
                          </div>
                        </div>
                        <div class="row mb-3 d-flex justify-content-center align-items-center">
                          <div class="col-sm-10">
                            <input
                              type="text"
                              class="form-control"
                              id="inputText"
                              placeholder="House Holding"
                            />
                          </div>
                        </div>

                        <div class="row mb-3 justify-content-center align-items-center">
                          <div class="col-sm-10">
                            <input
                              type="text"
                              class="form-control"
                              id="inputText"
                              placeholder="Road"
                            />
                          </div>
                        </div>
                        <div class="row mb-3 justify-content-center align-items-center">
                          <div class="col-sm-10">
                            <input
                              type="text"
                              class="form-control"
                              id="inputText"
                              placeholder="Area"
                            />
                          </div>
                        </div>
                        <div class="row mb-3 justify-content-center align-items-center">
                          <div class="col-sm-10">
                            <input
                              type="text"
                              class="form-control"
                              id="inputText"
                              placeholder="Postal Code"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="row mb-3   align-items-center justify-content-center mt-2">
                      <div class="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Owner of Name"
                        />
                      </div>
                      <div class="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Fathers Name"
                        />
                      </div>
                      <div class="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Mothers Name"
                        />
                      </div>

                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Date of Birth"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Martial Satus"
                        />
                      </div>

                      <div class="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Present Address"
                        />
                      </div>
                      <div class="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Occupation/Organization/Job Location"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Religion"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Educational Status"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Mobile No"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>

                      <div class="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="NID"
                        />
                      </div>
                      <div class="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Passport(if you have)"
                        />
                      </div>
                      <h5 className="text-start">Emergency Contact</h5>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                          name="Ename"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Realation"
                          name="Erealation"
                        />
                      </div>

                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Address"
                          name="Eaddress"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Mobile No"
                          name="Emobile"
                        />
                      </div>
                      <h5 className="text-start">Family / Roomate Details</h5>

                      <form className="">
                        {formValues.map((element, index) => (
                          <div
                            className="d-flex gap-1 justify-content-center px-1"
                            key={index}
                          >
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Family Member Name"
                                name="fname"
                                value={element.fname || ""}
                                onChange={(e) => handleChange(index, e)}
                              />
                            </div>
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Occupation"
                                name="occupation"
                                value={element.occupation || ""}
                                onChange={(e) => handleChange(index, e)}
                              />
                            </div>
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Age"
                                name="age"
                                value={element.age || ""}
                                onChange={(e) => handleChange(index, e)}
                              />
                            </div>
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Mobile No"
                                name="mobile"
                                value={element.mobile || ""}
                                onChange={(e) => handleChange(index, e)}
                              />
                            </div>
                            {index ? (
                              <div
                                className=""

                                //     className=" btn btn-secondary  d-lg-block btn-sm"
                                //     onClick={() => removeFormFields(index)}
                              >
                                <span
                                  type="button"
                                  class="badge bg-secondary"
                                  onClick={() => removeFormFields(index)}
                                >
                                  Remove
                                </span>
                              </div>
                            ) : null}
                          </div>
                        ))}

                        <div className="  d-flex justify-content-end mb-3  ">
                          <button
                            type="button"
                            class="btn btn-secondary btn-sm"
                            onClick={() => addFormFields()}
                          >
                            Add Another One
                          </button>
                        </div>
                      </form>


                      <div class="col-md-3 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Home Servent Name"
                          name=" "
                        />
                      </div>
                      <div class="col-md-3 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="NID"
                          name=" "
                        />
                      </div>
                      <div class="col-md-3 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Mobile No"
                          name=" "
                        />
                      </div>
                      <div class="col-md-3 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Permanent Address"
                          name=" "
                        />
                      </div>
                      <div class="col-md-3 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Driver Name"
                          name=" "
                        />
                      </div>
                      <div class="col-md-3 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="NID"
                          name=" "
                        />
                      </div>
                      <div class="col-md-3 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Mobile No"
                          name=" "
                        />
                      </div>
                      <div class="col-md-3 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Permanent Address"
                          name=" "
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Previous Home Land Name"
                          name=" "
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Mobile No"
                          name=" "
                        />
                      </div>
                      <div class="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Address"
                          name=" "
                        />
                      </div>
                      <div class="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Reason of Leave Previous Home"
                          name=" "
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Present Home Land Name"
                          name=" "
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Mobile No"
                          name=" "
                        />
                      </div>
                      <div class="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Present Home Start Living Date"
                          name=" "
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=" Date"
                          name=" "
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Signature of Rent Person"
                          name=" "
                        />
                      </div>

                      <div className="  d-flex justify-content-end mb-3  ">
                          <button
                            type="button"
                            class="btn btn-secondary btn-sm"
                           
                          >
                            Save & Continue
                          </button>
                        </div>

                    </div>
                  </div>
                  
                </div>
              </div>

              
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AddFamily;
