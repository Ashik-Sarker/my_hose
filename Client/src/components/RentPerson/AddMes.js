import React, { useEffect, useState } from "react";
import camera from "../../assets/camera.png";

const AddMes = () => {
  const [countries, setDivision] = useState([]);
  const [divisionid, setDivisionId] = useState("");
  const [districts, setDistrict] = useState([]);
  const [thanas, setThana] = useState([]);

  //city corporation
  const [yesVisible, setVisbleYes] = useState(false);
  const [noVisible, setVisbleNo] = useState(false);
  // const [yesvisible, setVisbleYes] = useState(false);
  ////old referelll
  const [oldreferel, setOldReferelYes] = useState(false);
  // const [oldreferelremove, setOldReferelRemove] = useState(true);
  // const [newreferel, setNewReferelYes] = useState(false);
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
  //   const [flateValues, setflateValues] = useState([
  //     { flate_name: "", flate_renter_name: "", refferel_code: "" },
  //   ]);

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

  useEffect(() => {
    const getdivision = async () => {
      const resdivision = await fetch(`divisions.json`);
      const resdiv = await resdivision.json();
      console.log(resdiv);
      setDivision(await resdiv.divisions);
    };
    getdivision();
  }, []);

  const handleDivision = (event) => {
    const DivisionId = event.target.value;
    console.log(DivisionId);
    setDivisionId(DivisionId);
  };

  useEffect(() => {
    const getdistrict = async () => {
      const resdistrict = await fetch(`districts.json`);
      const resdis = await resdistrict.json();
      console.log(resdis);
      setDistrict(await resdis.districts);
    };
    getdistrict();
  }, [divisionid]);

  useEffect(() => {
    const getthana = async () => {
      const resthana = await fetch(`thana.json`);
      const restha = await resthana.json();
      console.log(restha);
      setThana(await restha.upazilas);
    };
    getthana();
  }, []);

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
                            Upload Your Passport Size Image {divisionid}
                          </p>
                          <div>
                            <img
                              className="w-50 rounded mx-auto d-block img-fluid"
                              src={camera}
                              alt=""
                            />
                          </div>

                          <div className="  text-center ">
                            <input
                              type="file"
                              className="     mt-5  "
                              name="m_photo "
                              style={{ marginLeft: "25%" }}
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
                                name="m_divisions"
                                id="divisions"
                                for="divisions"
                                onChange={(e) => handleDivision(e)}
                              >
                                <option disabled selected>
                                  ----Select Division----
                                </option>
                                {countries.map((country) => (
                                  <option
                                    key={country.id}
                                    value={country.id}
                                    country={country}
                                  >
                                    {country.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div class="col-md-4  ">
                            <div class="col-sm-10">
                              <select
                                class="form-select"
                                aria-label="Default select example"
                                name="m_district"
                                id="district"
                                for="divisions"
                              >
                                <option disabled selected>
                                  Select District
                                </option>
                                {districts.map((district) => (
                                  <option
                                    key={district.id}
                                    value={district.id}
                                    district={district}
                                  >
                                    {district.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div class="col-md-4   ">
                            <div class="col-sm-10">
                              <select
                                class="form-select"
                                aria-label="Default select example"
                                name="m_thana"
                                id="thana"
                                for="divisions"
                              >
                                <option disabled selected>
                                  Select Thana
                                </option>
                                {thanas.map((thana) => (
                                  <option
                                    key={thana.id}
                                    value={thana.id}
                                    thana={thana}
                                  >
                                    {thana.name}
                                  </option>
                                ))}
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
                                  // name="y_city"
                                  name="inlineRadioOptions"
                                  id=" "
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
                                  // name="n_city"
                                  name="inlineRadioOptions"
                                  id=" "
                                  value="option2"
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
                                  name="m_ward "
                                />
                              </div>
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="House No"
                                  name="f_house "
                                />
                              </div>
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Road No"
                                  name="m_road "
                                />
                              </div>
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Flat"
                                  name="m_flat"
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
                                    name="m_union"
                                  />
                                </div>
                                <div class="col-md-4 mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Villiage"
                                    name="m_villiage"
                                  />
                                </div>
                                <div class="col-md-4 mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Ward No"
                                    name="mu_ward"
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
                          placeholder="Name"
                          name="m_name"
                        />
                      </div>
                      <div class="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Fathers Name"
                          name="m_father_name"
                        />
                      </div>
                      <div class="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Mothers Name"
                          name="m_mother_name"
                        />
                      </div>

                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Date of Birth"
                          name="m_dob"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Martial Satus"
                          name="m_m_status"
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
                          name="m_religion"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Educational Status"
                          name="f_e_status"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Mobile No"
                          name="m_mobile"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                          name="m_email"
                        />
                      </div>

                      <div class="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="NID"
                          name="m_nid"
                        />
                      </div>
                      <div class="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Passport(if you have)"
                          name="m_pasport"
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

                      {/* Additional Information */}

                      <h5 className="text-start">Additional Information</h5>

                      <div className="d-flex mt-1  gap-5 justify-content-center ">
                        <h6>If you have previous landloard referrel code</h6>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="r_yes"
                            id=" "
                            value=" "
                            onClick={() => {
                              setOldReferelYes(true);
                              // setOldReferelYes(!true);
                            }}
                          />
                          <label class="form-check-label" for="exampleRadios1">
                            Yes
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-12   d-flex justify-content-between   ">
                        <div className="   ">
                          <h5 className="text-start mt-2">
                            New LandLord Information
                          </h5>
                          <div class="col-md-12 mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Name"
                              name="new_l_name"
                            />
                          </div>
                          <div class="col-md-12 mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="NID"
                              name="new_l_nid"
                            />
                          </div>
                          <div class="col-md-12 mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Referel Code"
                              name="new_l_referel_code"
                            />
                          </div>
                        </div>

                        {oldreferel ? (
                          <div className=" ">
                            <h5 className="text-start mt-2">
                              Old LandLord Information
                            </h5>
                            <div class="col-md-12 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Old  Name"
                                name="old_l_name"
                              />
                            </div>
                            <div class="col-md-12 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Old NID"
                                name="old_l_nid"
                              />
                            </div>
                            <div class="col-md-12 mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Old Referel Code"
                                name="old_l_referel_code"
                              />
                            </div>
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm mb-3"
                              onClick={() => {
                                setOldReferelYes(false);
                                // setOldReferelYes(!true);
                                // setOldReferelRemove(true)
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        ) : null}
                      </div>

                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=" Date"
                          name="m_date"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Signature of Family Rent Person"
                          name="m_signature"
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

export default AddMes;
