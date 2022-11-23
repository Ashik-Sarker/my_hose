import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/avater.jpg";
const ManageFamily = () => {
  return (
    <div>
      <main id="main" class="main">
        <section class="section dashboard">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12     shadow   mb-5 bg-body rounded">
                <div className="d-flex justify-content-between align-items-center py-2">
                  <div className="     ">
                    <Link to="/add-family" type="button" class="btn btn-secondary btn-sm">
                      Add Family Details
                    </Link>
                  </div>
                  <h4 className=" text-center">All Family</h4>
                </div>
              </div>

              <div className="col-lg-12 ">
              <div class="card top-selling overflow-auto">
                    

                    <div class="card-body pb-0">
                      <h5 class="card-title">
                      All Family  
                      </h5>

                      <table class="table table-borderless">
                        <thead>
                          <tr>
                          <th scope="col">SL N</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                           
                            <th scope="col">NID</th>
                            <th scope="col">Flate</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Division</th>
                            <th scope="col">Thana</th>
                            <th scope="col">Road</th>
                            <th scope="col">Action</th>
                          
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <td class="text-dark fw-bold">1</td>
                            <th scope="row">
                              <a href="#">
                                <img src={img} alt="" />
                              </a>
                            </th>
                            <td>
                             
                              Abul Kashem
                             
                            </td>
                            <td>199247098567</td>
                            <td class="fw-bold">124</td>
                            <td>house@com.bd</td>
                            <td>01718000000</td>
                            <td>Dhaka</td>
                            <td>Dhanmondi</td>
                            <td>6</td>
                          
                            <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-trash"></i></a></td>
                            <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-pencil-square"></i></a></td>
                          </tr>
                          <tr>
                          <td class="text-dark fw-bold">2</td>
                            <th scope="row">
                              <a href="#">
                              <img src={img} alt="" />
                              </a>
                            </th>
                            <td>
                             
                             Abul Hashem
                            
                           </td>
                            <td>199247098567</td>
                            <td class="fw-bold">124</td>
                            <td>house@com.bd</td>
                            <td>01718000000</td>
                            <td>Dhaka</td>
                            <td>Dhanmondi</td>
                            <td>6</td>
                          
                            <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-trash"></i></a></td>
                            <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-pencil-square"></i></a></td>
                          </tr>
                          <tr>
                          <td class="text-dark fw-bold">3</td>
                            <th scope="row">
                              <a href="#">
                              <img src={img} alt="" />
                              </a>
                            </th>
                            <td>
                             
                              Abul Momen
                            </td>
                            <td>199247098567</td>
                            <td class="fw-bold">98</td>
                            <td>house@com.bd</td>
                            <td>01718000000</td>
                            <td>Dhaka</td>
                            <td>Dhanmondi</td>
                            <td>6</td>
                          
                            <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-trash"></i></a></td>
                            <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-pencil-square"></i></a></td>
                          </tr>
                          <tr>
                          <td class="text-dark fw-bold">4 </td>
                            <th scope="row">
                              <a href="#">
                              <img src={img} alt="" />
                              </a>
                            </th>
                            <td>
                             
                           Abul Lotif
                             
                            </td>
                            <td>199247098567</td>
                            <td class="fw-bold">74</td>
                            <td>house@com.bd</td>
                            <td>01718000000</td>
                            <td>Dhaka</td>
                            <td>Dhanmondi</td>
                            <td>6</td>
                          
                            <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-trash"></i></a></td>
                            <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-pencil-square"></i></a></td>
                          </tr>
                          <tr>
                          <td class="text-dark fw-bold">5 </td>
                            <th scope="row">
                              <a href="#">
                              <img src={img} alt="" />
                              </a>
                            </th>
                            <td>
                             
                              Abul Kader
                             
                            </td>
                            <td>199247098567</td>
                            <td class="fw-bold">63</td>
                            <td>house@com.bd</td>
                            <td>01718000000</td>
                            <td>Dhaka</td>
                            <td>Dhanmondi</td>
                            <td>6</td>
                          
                            <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-trash"></i></a></td>
                            <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-pencil-square"></i></a></td>
                          </tr>
                          <tr>
                          {/* <th scope="row">6</th> */}
                          <td class="text-dark fw-bold">6 </td>
                            <th scope="row">
                              <a href="#">
                              <img src={img} alt="" />
                              </a>
                            </th>
                            <td>
                             
                             Abul Malek
                           </td>
                            <td>199247098567</td>
                            <td class="fw-bold">41</td>
                            <td>house@com.bd</td>
                            <td>01718000000</td>
                            <td>Dhaka</td>
                            <td>Dhanmondi</td>
                            <td>6</td>
                          
                            <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-trash"></i></a></td>
                            <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-pencil-square"></i></a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ManageFamily;
