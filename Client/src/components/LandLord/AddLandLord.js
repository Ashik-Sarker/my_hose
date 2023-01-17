import React, { useEffect, useState } from "react";

const AddLandLord = () => {
  const [countries, setDivision] = useState([]);
  const [divisionid, setDivisionId] = useState("");
  const [districts, setDistrict] = useState([]);
  const [thanas, setThana] = useState([]);
  const [nationality, setNationality] = useState("lb");
  const [familynationality, setFamilyNationality] = useState(false);
  //const [gender, setGender] = useState("lb");

  const [topping, setTopping] = useState("Bangladeshi");

  const onOptionChange = (e) => {
    setTopping(e.target.value);
  };

  

  const submitForm = (e) => {
    e.preventDefault();
    console.log("user", e.target.username.value);
    console.log("user", e.target.username.name);
  };

  // const [formData, setFormData] = useState([
  //   {
  //     owner_name: "",
  //     father_name:"",
  //     mother_name:"",
  //     date_of_birth:"",
  //     marital_status:"",
  //     occupation:"",
  //     religion:"",
  //     education:"",
  //     mobile:"",
  //     email:"",
  //     nid:"",
  //     passport:"",
  //     land_lord_form_submit_date:"",
  //     land_lord_signature:""

  //   },
  // ]);
  const [formData, setFormData] = useState({
    owner_name: "",
    father_name: "",
    mother_name: "",
    date_of_birth: "",
    marital_status: "",
    occupation: "",
    religion: "",
    education: "",
    mobile: "",
    email: "",
    nid: "",
    passport: "",
    land_lord_form_submit_date: "",
    land_lord_signature: "",
  });

  const handleChangeTwo = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  ///Emergency details
  const [emergencyData, setEmergencyData] = useState([
    {
      name: "",
      relationship: "",
      nid: "",
      address: "",
      age: "",
      mobile: "",
    },
  ]);

  const handleChangeEmergency = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setEmergencyData({ ...emergencyData, [e.target.name]: [e.target.value] });
  };

  //city coporation
  const [yesVisible, setVisbleYes] = useState(false);
  const [noVisible, setVisbleNo] = useState(false);

  // const [yesvisible, setVisbleYes] = useState(false);

  // Family / Roomate Details State
  const [formValues, setFormValues] = useState([
    { member_name: "", occupation: "", age: "", mobile: "", gender: "" },
  ]);

  // Home Servent Details State
  const [serventValues, setserventValues] = useState([
    { servant_name: "", nid: "", mobile: "", area: "" },
  ]);

  /////Driver state
  const [driverValues, setdriverValues] = useState([
    { driver_name: "", nid: "", mobile: "", area: "" },
  ]);

  ///Caretakerstate

  const [caretakerValues, setcaretakerValus] = useState([
    { caretaker_name: "", nid: "", mobile: "", area: "" },
  ]);
  ///Flate state
  const [flateValues, setflateValues] = useState([
    { flate_name: "", flate_renter_name: "", refferel_code: "" },
  ]);

  //// family
  let handleChange = (i, e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { member_name: "", occupation: "", age: "", mobile: "", gender: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  /// servent
  let servantChange = (i, e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    let newServentValues = [...serventValues];
    newServentValues[i][e.target.name] = e.target.value;
    setserventValues(newServentValues);
  };

  let addServentFields = () => {
    setserventValues([
      ...serventValues,
      { servant_name: "", nid: "", mobile: "", area: "" },
    ]);
  };

  let removeServentFields = (i) => {
    let newServentValues = [...serventValues];
    newServentValues.splice(i, 1);
    setserventValues(newServentValues);
  };

  // Driver Add

  let driverChange = (i, e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    let newDriverValues = [...driverValues];
    newDriverValues[i][e.target.name] = e.target.value;
    setdriverValues(newDriverValues);
  };

  let addDriverFields = () => {
    setdriverValues([
      ...driverValues,
      { driver_name: "", nid: "", mobile: "", area: "" },
    ]);
  };
  let removeDriverFields = (i) => {
    let newDriverValues = [...driverValues];
    newDriverValues.splice(i, 1);
    setdriverValues(newDriverValues);
  };

  ////Caretaker add

  let caretakerChange = (i, e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    let newCaretakerValues = [...caretakerValues];
    newCaretakerValues[i][e.target.name] = e.target.value;
    setdriverValues(newCaretakerValues);
  };

  let addCaretakerFields = () => {
    setcaretakerValus([
      ...caretakerValues,
      { caretaker_name: "", nid: "", mobile: "", area: "" },
    ]);
  };

  let removeCaretakerFields = (i) => {
    let newCaretakerValues = [...caretakerValues];
    newCaretakerValues.splice(i, 1);
    setcaretakerValus(newCaretakerValues);
  };

  ////flate add

  let flateChange = (i, e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    let newFlateValues = [...flateValues];
    newFlateValues[i][e.target.name] = e.target.value;
    setflateValues(newFlateValues);
  };

  let addFlateFields = () => {
    setflateValues([
      ...flateValues,
      { flat_name: "", flat_renter_name: "", referral_code: "" },
    ]);
  };
  let removeFlateFields = (i) => {
    let newFlateValues = [...flateValues];
    newFlateValues.splice(i, 1);
    setflateValues(newFlateValues);
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
                <form method="POST" onSubmit={submitForm}>
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
                                name="photo"
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
                          {/* <p>test</p> */}
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Owner of Name"
                            onChange={(e) => handleChangeTwo(e)}
                            // onChange={console.log('test')}
                            name="owner_name"
                            value={formData.owner_name}
                          />
                        </div>
                        <div class="col-md-12 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Fathers Name"
                            onChange={(e) => handleChangeTwo(e)}
                            name="father_name"
                            value={formData.father_name}
                          />
                        </div>
                        <div class="col-md-12 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Mothers Name"
                            onChange={(e) => handleChangeTwo(e)}
                            name="mother_name"
                            value={formData.mother_name}
                          />
                        </div>

                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Date of Birth(D-M-Y)"
                            onChange={(e) => handleChangeTwo(e)}
                            name="date_of_birth"
                            value={formData.date}
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Martial Satus"
                            onChange={(e) => handleChangeTwo(e)}
                            name="marital_status"
                            value={formData.marital_status}
                          />
                        </div>

                        <div class="col-md-12 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Occupation/Organization/Job Location"
                            onChange={(e) => handleChangeTwo(e)}
                            name="occupation"
                            value={formData.occupation}
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Religion"
                            onChange={(e) => handleChangeTwo(e)}
                            name="religion"
                            value={formData.religion}
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Educational Status"
                            onChange={(e) => handleChangeTwo(e)}
                            name="education"
                            value={formData.education}
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Mobile No"
                            name="mobile"
                            // onChange={(e)=>handleChangeTwo(e)}
                            onChange={(e) => handleChangeTwo(e)}
                            value={formData.mobile}
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            // onChange={(e) => handleChange(e)}
                            onChange={(e) => handleChangeTwo(e)}
                            name="email"
                            value={formData.email}
                          />
                        </div>
                        {/* <div class="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Passport(if you have)"
                          onChange={(e) => handleChangeTwo(e)}
                          name="passport"
                          value={formData.passport}
                        />
                      </div>  */}
                        <div className="d-flex mt-2 mb-3  gap-5   ">
                          <h6>Nationality</h6>
                          <div class=" d-flex">
                          <div class="form-check">
                          <input
                            type="radio"
                            name="topping"
                            value="Bangladeshi"
                            id="bangladeshi"
                            checked={topping === "Bangladeshi"}
                            onChange={onOptionChange}
                          />
                          <label htmlFor="bangladeshi">Bangladeshi</label>
                      </div> 
                          <div class="form-check">
                          <input
                            type="radio"
                            name="topping"
                            value="Foreigner"
                            id="foreigner"
                            checked={topping === "Foreigner"}
                            onChange={onOptionChange}
                          />
                          <label htmlFor="foreigner">Foreigner</label>
                          </div>
                          </div>
                          <div class="form-check">
                            <div className="d-flex gap-5">
                              <div>
                                
                              </div>

                              {topping === "Foreigner" ? (
                                <div class="col-md-12 mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Passport "
                                    onChange={(e) => handleChangeTwo(e)}
                                    name="passport"
                                    value={formData.passport}
                                  />
                                </div>
                              ) : (
                                <div class="col-md-12 mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="NID/BC"
                                    onChange={(e) => handleChangeTwo(e)}
                                    name="nid"
                                    value={formData.nid}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* <div class="col-md-12 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="NID/BC"
                            onChange={(e) => handleChangeTwo(e)}
                            name="nid"
                            value={formData.nid}
                          />
                        </div> */}

                        {/* ////Emergency Contact  */}

                        <h5 className="text-start">Emergency Contact</h5>
                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Name"
                            onChange={(e) => handleChangeEmergency(e)}
                            name="name"
                            value={emergencyData.name}
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Realation"
                            onChange={(e) => handleChangeEmergency(e)}
                            name="relationship"
                            value={emergencyData.relationship}
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="NID/BC"
                            onChange={(e) => handleChangeEmergency(e)}
                            name="nid"
                            value={emergencyData.nid}
                          />
                        </div>

                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Address"
                            onChange={(e) => handleChangeEmergency(e)}
                            name="address"
                            value={emergencyData.address}
                          />
                        </div>

                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Age"
                            onChange={(e) => handleChangeEmergency(e)}
                            name="age"
                            value={emergencyData.age}
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Mobile No"
                            onChange={(e) => handleChangeEmergency(e)}
                            name="mobile"
                            value={emergencyData.mobile}
                          />
                        </div>

                        {/* Family / Roomate Details */}

                        <h5 className="text-start">Family / Roomate Details</h5>

                        <div className="row">
                          <div className="d-flex mt-2 mb-3  gap-5   ">
                            <h6>Nationality</h6>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="r_yes"
                                id=" "
                                value=" "
                                onClick={() => {
                                  // setOldReferelYes(true);
                                  // // setOldReferelYes(!true);
                                  setFamilyNationality(false);
                                }}
                                checked
                              />
                              <label
                                class="form-check-label"
                                for="exampleRadios1"
                              >
                                Bangladeshi
                              </label>
                            </div>

                            <div class="form-check">
                              <div className="d-flex gap-5">
                                <div>
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="r_yes"
                                    id=" "
                                    value=" "
                                    onClick={() => {
                                      // setOldReferelYes(true);
                                      // // setOldReferelYes(!true);
                                      setFamilyNationality(true);
                                    }}
                                  />
                                  <label
                                    class="form-check-label"
                                    for="exampleRadios1"
                                  >
                                    Foreigner
                                  </label>
                                </div>

                                {familynationality ? (
                                  <div class="col-md-12 mb-3">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Passport "
                                      onChange={(e) => handleChangeTwo(e)}
                                      name="passport"
                                      value={formData.passport}
                                    />
                                  </div>
                                ) : (
                                  <div class="col-md-12 mb-3">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="NID/BC"
                                      onChange={(e) => handleChangeTwo(e)}
                                      name="nid"
                                      value={formData.nid}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center align-items-center gap-2 py-3  ">
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
                        </div>

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
                                    name="member_name"
                                    value={element.member_name || ""}
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
                        <div className="row">
                          <div className="d-flex justify-content-center align-items-center gap-3 py-3  ">
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
                        </div>
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
                                  name="servant_name"
                                  value={element.servant_name || ""}
                                  onChange={(e) => servantChange(index, e)}
                                />
                              </div>
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="NID"
                                  name="nid"
                                  value={element.nid || ""}
                                  onChange={(e) => servantChange(index, e)}
                                />
                              </div>
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Mobile No"
                                  name="mobile"
                                  value={element.mobile || ""}
                                  onChange={(e) => servantChange(index, e)}
                                />
                              </div>
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Area"
                                  name="area"
                                  value={element.area || ""}
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

                        <div className="row">
                          <div className="d-flex justify-content-center align-items-center gap-3 py-3  ">
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
                        </div>
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
                                  name="driver_name"
                                  onChange={(e) => driverChange(index, e)}
                                  value={element.driver_name || ""}
                                />
                              </div>
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="NID"
                                  name="nid"
                                  onChange={(e) => driverChange(index, e)}
                                  value={element.nid || ""}
                                />
                              </div>
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Mobile No"
                                  name="mobile"
                                  onChange={(e) => driverChange(index, e)}
                                  value={element.mobile || ""}
                                />
                              </div>
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Area"
                                  name="area"
                                  //  onClick={() => addServentFields()}
                                  onChange={(e) => driverChange(index, e)}
                                  value={element.area || ""}
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

                        <div className="row">
                          <div className="d-flex justify-content-center align-items-center gap-3 py-3  ">
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
                        </div>
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
                                  name="caretaker_name"
                                  onChange={(e) => caretakerChange(index, e)}
                                  value={element.caretaker_name || ""}
                                />
                              </div>
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="NID"
                                  name="nid "
                                  onChange={(e) => caretakerChange(index, e)}
                                  value={element.nid || ""}
                                />
                              </div>
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Mobile No"
                                  name="mobile"
                                  onChange={(e) => caretakerChange(index, e)}
                                  value={element.mobile || ""}
                                />
                              </div>
                              <div class="col-md-3 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Area"
                                  name="area"
                                  onChange={(e) => caretakerChange(index, e)}
                                  value={element.area || ""}
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
                                  name="flat_name"
                                  onChange={(e) => flateChange(index, e)}
                                  value={element.flat_name || ""}
                                />
                              </div>
                              <div class="col-md-4 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Flate Renter Name"
                                  name="flat_renter_name"
                                  onChange={(e) => flateChange(index, e)}
                                  value={element.flat_renter_name || ""}
                                />
                              </div>
                              <div class="col-md-4 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Refferel Code"
                                  name="referral_code"
                                  onChange={(e) => flateChange(index, e)}
                                  value={element.referral_code || ""}
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
                            placeholder=" Date(D-M-Y)"
                            onChange={(e) => handleChangeTwo(e)}
                            name="land_lord_form_submit_date"
                            value={formData.land_lord_form_submit_date}
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Signature of Rent Person"
                            onChange={(e) => handleChangeTwo(e)}
                            name="land_lord_signature"
                            value={formData.land_lord_signature}
                          />
                        </div>

                        {/* <div className="App">
                          <h3>Select Pizza Size</h3>

                          <input
                            type="radio"
                            name="topping"
                            value="Regular"
                            id="regular"
                            checked={topping === "Regular"}
                            onChange={onOptionChange}
                          />
                          <label htmlFor="regular">Regular</label>

                          <input
                            type="radio"
                            name="topping"
                            value="Medium"
                            id="medium"
                            checked={topping === "Medium"}
                            onChange={onOptionChange}
                          />
                          <label htmlFor="medium">Medium</label>

                          <input
                            type="radio"
                            name="topping"
                            value="Large"
                            id="large"
                            checked={topping === "Large"}
                            onChange={onOptionChange}
                          />
                          <label htmlFor="large">Large</label>

                          <p>
                            Select topping <strong>{topping}</strong>
                          </p>
                        </div> */}

                        <div className="  d-flex justify-content-end mb-3  ">
                          <input
                            type="submit"
                            class="btn btn-secondary btn-sm  "
                            value="Save & Continue"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AddLandLord;
