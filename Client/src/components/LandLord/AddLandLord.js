import React, { useState } from "react";

const AddLandLord = () => {
  const [yesVisible, setVisbleYes] = useState(false);
  const [noVisible, setVisbleNo] = useState(false);
  // const [yesvisible, setVisbleYes] = useState(false);

  // Family / Roomate Details State
  const [formValues, setFormValues] = useState([
    { fname: "", occupation: "", age: "", mobile: "", gender: "" },
  ]);

  // Home Servent Details State
  const [serventValues, setserventValues] = useState([
    { s_name: "", s_nid: "", s_mobile: "", s_area: "" },
  ]);

  /////Driver state
  const [driverValues, setdriverValues] = useState([
    { d_name: "", d_nid: "", d_mobile: "", d_area: "" },
  ]);

  ///Caretakerstate

  const [caretakerValues, setcaretakerValus] = useState([
    { c_name: "", c_nid: "", c_mobile: "", c_area: "" },
  ]);
  ///Flate state
  const [flateValues, setflateValues] = useState([
    { flate_name: "", flate_renter_name: "", refferel_code: "" },
  ]);

  //// family
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { fname: "", occupation: "", age: "", mobile: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  /// servent
  let servantChange = (i, e) => {
    let newServentValues = [...serventValues];
    newServentValues[i][e.target.name] = e.target.value;
    setserventValues(newServentValues);
  };

  let addServentFields = () => {
    setserventValues([
      ...serventValues,
      { s_name: "", s_nid: "", s_mobile: "", s_area: "" },
    ]);
  };

  let removeServentFields = (i) => {
    let newServentValues = [...serventValues];
    newServentValues.splice(i, 1);
    setserventValues(newServentValues);
  };

  // Driver Add

  let driverChange = (i, e) => {
    let newDriverValues = [...driverValues];
    newDriverValues[i][e.target.name] = e.target.value;
    setdriverValues(newDriverValues);
  };

  let addDriverFields = () => {
    setdriverValues([
      ...driverValues,
      { d_name: "", d_nid: "", d_mobile: "", d_area: "" },
    ]);
  };
  let removeDriverFields = (i) => {
    let newDriverValues = [...driverValues];
    newDriverValues.splice(i, 1);
    setdriverValues(newDriverValues);
  };

  ////Caretaker add

  let caretakerChange = (i, e) => {
    let newCaretakerValues = [...caretakerValues];
    newCaretakerValues[i][e.target.name] = e.target.value;
    setdriverValues(newCaretakerValues);
  };

  let addCaretakerFields = () => {
    setcaretakerValus([
      ...caretakerValues,
      { c_name: "", c_nid: "", c_mobile: "", c_area: "" },
    ]);
  };

  let removeCaretakerFields = (i) => {
    let newCaretakerValues = [...caretakerValues];
    newCaretakerValues.splice(i, 1);
    setcaretakerValus(newCaretakerValues);
  };

  ////flate add

  let flateChange = (i, e) => {
    let newFlateValues = [...flateValues];
    newFlateValues[i][e.target.name] = e.target.value;
    setflateValues(newFlateValues);
  };

  let addFlateFields = () => {
    setflateValues([
      ...flateValues,
      { flate_name: "", flate_renter_name: "", refferel_code: "" },
    ]);
  };
  let removeFlateFields = (i) => {
    let newFlateValues = [...flateValues];
    newFlateValues.splice(i, 1);
    setflateValues(newFlateValues);
  };

  return (
    <div>
      <div>
        <main id="main" class="main">
          <section class="section dashboard">
            <div class="row">
              <div class="col-lg-12  px-5">
                <div class="row">
                  <div class="col-xxl-4 col-md-4 d-flex justify-content-center align-items-center">
                    <div
                      class="card info-card revenue-card d-flex  align-items-center justify-content-center   border border-dark  rounded-5"
                      style={{ height: "280px" }}
                    >
                      <div class=" d-flex  align-items-center justify-content-center   ">
                        <div className=" ">
                          <p class=" text-center  ">
                            Upload Your Passport Size Image
                          </p>
                          <div>
                            <img
                              className="w-50 rounded mx-auto d-block img-fluid"
                              src="http://cdn.onlinewebfonts.com/svg/img_212915.png"
                              alt=""
                            />
                          </div>

                          <div className="  text-center ">
                            <input
                              type="file"
                              className="     mt-5  "
                              name=" "
                              style={{marginLeft:"25%"}}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ////permanent address  */}
                  <div class="col-xxl-8 col-md-8 justify-content-center align-items-center  ">
                    <div
                      class="card info-card revenue-card border-dark rounded-5 border     "
                      style={{ height: "280px" }}
                    >
                      <div class="card-body">
                        <h5 className="mt-2">Permanent Address</h5>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                          <div class="col-md-4  ">
                            <div class="col-sm-10">
                              <select
                                class="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Divison</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-4  ">
                            <div class="col-sm-10">
                              <select
                                class="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>District</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-md-4   ">
                            <div class="col-sm-10">
                              <select
                                class="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Thana</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="  ">
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="col-lg-4">
                              <p className=" mt-2">City Corporration</p>
                            </div>
                            <div className="col-lg-4">
                              <div class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onClick={() => {
                                    setVisbleYes(true);
                                    setVisbleNo(false);
                                  }}
                                />
                                <label
                                  class="form-check-label"
                                  for="inlineRadio1"
                                >
                                  yes
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onClick={() => {
                                    setVisbleNo(true);
                                    setVisbleYes(false);
                                  }}
                                />
                                <label
                                  class="form-check-label"
                                  for="inlineRadio1"
                                >
                                  no
                                </label>
                              </div>
                            </div>
                          </div>
                          {yesVisible ? (
                            <div className="row justify-items-center align-items-center">
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Ward No"
                                  name=" "
                                />
                              </div>
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="House No"
                                  name=" "
                                />
                              </div>
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Road No"
                                  name=" "
                                />
                              </div>
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Flat"
                                  name=" "
                                />
                              </div>
                            </div>
                          ) : null}
                          {noVisible ? (
                            <div className="row ">
                              <div className="d-flex gap-2 justify-items-center align-items-center">
                                <div class="col-md-4 mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Union"
                                    name=" "
                                  />
                                </div>
                                <div class="col-md-4 mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Villiage"
                                    name=" "
                                  />
                                </div>
                                <div class="col-md-4 mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Ward No"
                                    name=" "
                                  />
                                </div>
                              </div>
                            </div>
                          ) : null}
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

                      {/* ////Emergency Contact  */}

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
                          placeholder="NID"
                          name="Enid"
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
                          placeholder="Age"
                          name="Eage"
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

                      {/* Family / Roomate Details */}

                      <h5 className="text-start">Family / Roomate Details</h5>

                      <form className="">
                        {formValues.map((element, index) => (
                          <div
                            className=" d-flex gap-4 justify-content-center px-1"
                            key={index}
                          >
                            <div className="d-flex gap-3">
                              <div class="col-md-6 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Family Member Name"
                                  name="fname"
                                  value={element.fname || ""}
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Occupation"
                                  name="occupation"
                                  value={element.occupation || ""}
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </div>
                            </div>

                            <div className="d-flex gap-2">
                              <div class="col-md-4 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Age"
                                  name="age"
                                  value={element.age || ""}
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </div>
                              <div class="col-md-4 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Mobile No"
                                  name="mobile"
                                  value={element.mobile || ""}
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </div>

                              <div class="col-md-4 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Gender"
                                  name="gender"
                                  value={element.gender || ""}
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </div>
                            </div>

                            {index ? (
                              <div className="">
                                <span
                                  type="button"
                                  class="badge bg-danger px-1     "
                                  onClick={() => removeFormFields(index)}
                                >
                                  x
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

                      {/* Home servent details  */}

                      <h5 className="text-start">Home Servent Details</h5>

                      <form className="">
                        {serventValues.map((element, index) => (
                          <div
                            className="d-flex gap-1 justify-content-center px-1"
                            key={index}
                          >
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Home Servent Name"
                                name="s_name"
                                value={element.s_name || ""}
                                onChange={(e) => servantChange(index, e)}
                              />
                            </div>
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="NID"
                                name="s_nid"
                                value={element.s_nid || ""}
                                onChange={(e) => servantChange(index, e)}
                              />
                            </div>
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Mobile No"
                                name="s_mobile"
                                value={element.s_mobile || ""}
                                onChange={(e) => servantChange(index, e)}
                              />
                            </div>
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Area"
                                name="s_area"
                                value={element.s_area || ""}
                                onChange={(e) => servantChange(index, e)}
                              />
                            </div>
                            {index ? (
                              <div className="">
                                <span
                                  type="button"
                                  class="badge bg-danger px-1"
                                  onClick={() => removeServentFields(index)}
                                >
                                  x
                                </span>
                              </div>
                            ) : null}
                          </div>
                        ))}

                        <div className="  d-flex justify-content-end   ">
                          <button
                            type="button"
                            class="btn btn-secondary btn-sm"
                            onClick={() => addServentFields()}
                          >
                            Add Another One
                          </button>
                        </div>
                      </form>

                      {/* ////////Driver Details Form  */}

                      <h5 className="text-start">Driver Details</h5>
                      <form>
                        {driverValues.map((element, index) => (
                          <div
                            className="d-flex gap-1 justify-content-center   "
                            key={index}
                          >
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Driver Name"
                                name="d_name "
                                onChange={(e) => driverChange(index, e)}
                                value={element.d_name || ""}
                              />
                            </div>
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="NID"
                                name="d_nid"
                                onChange={(e) => driverChange(index, e)}
                                value={element.d_nid || ""}
                              />
                            </div>
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Mobile No"
                                name="d_mobile"
                                onChange={(e) => driverChange(index, e)}
                                value={element.d_mobile || ""}
                              />
                            </div>
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Area"
                                name="d_area"
                                //  onClick={() => addServentFields()}
                                onChange={(e) => driverChange(index, e)}
                                value={element.d_area || ""}
                                // onChange={(e) => servantChange(index, e)}
                              />
                            </div>

                            {index ? (
                              <div className="">
                                <span
                                  type="button"
                                  class="badge bg-danger px-1"
                                  onClick={() => removeDriverFields(index)}
                                >
                                  x
                                </span>
                              </div>
                            ) : null}
                          </div>
                        ))}

                        <div className="  d-flex justify-content-end   ">
                          <button
                            type="button"
                            class="btn btn-secondary btn-sm"
                            onClick={() => addDriverFields()}
                          >
                            Add Another One
                          </button>
                        </div>
                      </form>

                      {/* Caretaker Details */}

                      <h5 className="text-start">Caretaker Details</h5>
                      <form>
                        {caretakerValues.map((element, index) => (
                          <div
                            className="d-flex justify-content-center align-items-center gap-1"
                            key={index}
                          >
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Caretaker Name"
                                name="c_name"
                                onChange={(e) => caretakerChange(index, e)}
                                value={element.c_name || ""}
                              />
                            </div>
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="NID"
                                name="c_nid "
                                onChange={(e) => caretakerChange(index, e)}
                                value={element.c_nid || ""}
                              />
                            </div>
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Mobile No"
                                name="c_mobile"
                                onChange={(e) => caretakerChange(index, e)}
                                value={element.c_mobile || ""}
                              />
                            </div>
                            <div class="col-md-3 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Area"
                                name="c_area"
                                onChange={(e) => caretakerChange(index, e)}
                                value={element.c_area || ""}
                              />
                            </div>

                            {index ? (
                              <div className="">
                                <span
                                  type="button"
                                  class="badge bg-danger px-1"
                                  onClick={() => removeCaretakerFields(index)}
                                >
                                  x
                                </span>
                              </div>
                            ) : null}
                          </div>
                        ))}

                        <div className="  d-flex justify-content-end mb-3   ">
                          <div className="   ">
                            <button
                              type="button"
                              class="btn btn-secondary btn-sm"
                              onClick={() => addCaretakerFields()}
                            >
                              Add Another One
                            </button>
                          </div>
                        </div>
                      </form>

                      {/* //// Flats Details  */}
                      <h5 className="text-start">Flats Details</h5>

                      <form>
                        {flateValues.map((element, index) => (
                          <div
                            className="d-flex justify-content-center align-items-center gap-1"
                            key={index}
                          >
                            <div class="col-md-4 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="FlateName"
                                name="flate_name"
                                onChange={(e) => flateChange(index, e)}
                                value={element.flate_name || ""}
                              />
                            </div>
                            <div class="col-md-4 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Flate Renter Name"
                                name="flate_renter_name "
                                onChange={(e) => flateChange(index, e)}
                                value={element.flate_renter_name || ""}
                              />
                            </div>
                            <div class="col-md-4 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Refferel Code"
                                name="refferel_code"
                                onChange={(e) => flateChange(index, e)}
                                value={element.refferel_code || ""}
                              />
                            </div>

                            {index ? (
                              <div className="">
                                <span
                                  type="button"
                                  class="badge bg-danger px-1"
                                  onClick={() => removeFlateFields(index)}
                                >
                                  x
                                </span>
                              </div>
                            ) : null}
                          </div>
                        ))}

                        <div className="  d-flex justify-content-end mb-3   ">
                          <button
                            type="button"
                            class="btn btn-secondary btn-sm"
                            onClick={() => addFlateFields()}
                          >
                            Add Another One
                          </button>
                        </div>
                      </form>

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
                        <button type="button" class="btn btn-secondary btn-sm">
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

export default AddLandLord;
