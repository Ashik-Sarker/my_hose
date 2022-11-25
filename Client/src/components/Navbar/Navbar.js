 import React, { useContext, useState } from 'react';
import { mainContext } from '../../App';
import Http from '../../common/Http';
 
const Navbar = () => {
  const [land_lord, setLand_Lord] = useState({
     land_lord_picture: '',
     land_lord_permanent_address: '',
     owner_name: '',
     father_name: '',
     mother_name: '',
     date_of_birth: '',
     marital_status: '',
     occupation: '',
     religion: '',
     education: '',
     mobile: '',
     email: '',
     nid: '',
     passport: '',
     land_lord_form_submit_date: '',
     land_lord_signature: ''
   })

  const {setIsLogin} = useContext(mainContext);

  const LogOut = () =>{
    setIsLogin(false);

   }
   
  const sendData = () => {
    const newFormData = new FormData()
    
    // newFormData.append('caretaker_name', 'caretaker_name-1')
    // newFormData.append('driver_name', 'driver_name-1')
    // newFormData.append('name', 'name-1')
    // newFormData.append('member_name', 'member_name-1')
    // newFormData.append('flat_name', 'flat_name-1')
    // newFormData.append('servant_name', 'servant_name-1')
    // newFormData.append('land_lord_picture', 'test-data')


    // newFormData.append('land_lord_permanent_address', 'test-data')
    // newFormData.append('owner_name', 'test-data')
    // newFormData.append('father_name', 'test-data')
    // newFormData.append('mother_name', 'test-data')
    // newFormData.append('date_of_birth', 'test-data')
    // newFormData.append('marital_status', 'test-data')
    // newFormData.append('occupation', 'test-data')
    // newFormData.append('religion', 'test-data')
    // newFormData.append('education', 'test-data')
    // newFormData.append('mobile', 'test-data')
    // newFormData.append('email', 'test-data')
    // newFormData.append('nid', 'test-data')
    // newFormData.append('passport', 'test-data')
    // newFormData.append('land_lord_form_submit_date', 'test-data')
    // newFormData.append('land_lord_signature', 'test-data')


    // Http.post('land-lord', newFormData).then(res => {
    //   console.log("Response from land lord",res);
    // })

    // Http.post('home-servant-details', newFormData).then(res => {
    //   console.log("Response from Home servant",res);
    // })

    // Http.post('flat-details', newFormData).then(res => {
    //   console.log("Response from Home flat details", res);
    // })

    // Http.post('family-member-details', newFormData).then(res => {
    //   console.log("Response from Home family member details", res);
    // })

    // Http.post('emergency-contact', newFormData).then(res => {
    //   console.log("Response from Emergency Contact details", res);
    // })
    // Http.post('driver-details', newFormData).then(res => {
    //   console.log("Response from Driver Details details", res);
    // })
    
    // Http.post('caretaker-details', newFormData).then(res => {
    //   console.log("Response from caretaker details", res);
    // })


   }

    return (
        <div>
        <header id="header" class="header fixed-top d-flex align-items-center">
          {/* <button onClick={sendData}>test</button> */}

          <div class="d-flex align-items-center justify-content-between">
            <a href="" class="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt=""/>
              <span class="d-none d-lg-block">My House</span>
            </a>
            <i class="bi bi-list toggle-sidebar-btn"></i>
          </div> 

          <div class="search-bar">
            <form class="search-form d-flex align-items-center" method="POST" action="#">
              <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
              <button type="submit" title="Search"><i class="bi bi-search"></i></button>
            </form>
          </div> 

          <nav class="header-nav ms-auto">
            <ul class="d-flex align-items-center">

              <li class="nav-item d-block d-lg-none">
                <a class="nav-link nav-icon search-bar-toggle " href="#">
                  <i class="bi bi-search"></i>
                </a>
              </li> 

              <li class="nav-item dropdown">

                <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                  <i class="bi bi-bell"></i>
                  <span class="badge bg-primary badge-number">4</span>
                </a> 

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                  <li class="dropdown-header">
                    You have 4 new notifications
                    <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"/>
                  </li>

                  <li class="notification-item">
                    <i class="bi bi-exclamation-circle text-warning"></i>
                    <div>
                      <h4>Lorem Ipsum</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>30 min. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr class="dropdown-divider"/>
                  </li>

                  <li class="notification-item">
                    <i class="bi bi-x-circle text-danger"></i>
                    <div>
                      <h4>Atque rerum nesciunt</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>1 hr. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr class="dropdown-divider"/>
                  </li>

                  <li class="notification-item">
                    <i class="bi bi-check-circle text-success"></i>
                    <div>
                      <h4>Sit rerum fuga</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>2 hrs. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr class="dropdown-divider"/>
                  </li>

                  <li class="notification-item">
                    <i class="bi bi-info-circle text-primary"></i>
                    <div>
                      <h4>Dicta reprehenderit</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>4 hrs. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr class="dropdown-divider"/>
                  </li>
                  <li class="dropdown-footer">
                    <a href="#">Show all notifications</a>
                  </li>

                </ul> 

              </li> 

              <li class="nav-item dropdown">

                <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                  <i class="bi bi-chat-left-text"></i>
                  <span class="badge bg-success badge-number">3</span>
                </a> 

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                  <li class="dropdown-header">
                    You have 3 new messages
                    <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"/>
                  </li>

                  <li class="message-item">
                    <a href="#">
                      <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle"/>
                      <div>
                        <h4>Maria Hudson</h4>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                        <p>4 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"/>
                  </li>

                  <li class="message-item">
                    <a href="#">
                      <img src="assets/img/messages-2.jpg" alt="" class="rounded-circle"/>
                      <div>
                        <h4>Anna Nelson</h4>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                        <p>6 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"/>
                  </li>

                  <li class="message-item">
                    <a href="#">
                      <img src="assets/img/messages-3.jpg" alt="" class="rounded-circle"/>
                      <div>
                        <h4>David Muldon</h4>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                        <p>8 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"/>
                  </li>

                  <li class="dropdown-footer">
                    <a href="#">Show all messages</a>
                  </li>

                </ul>

              </li>

              <li class="nav-item dropdown pe-3">

                <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                  <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle"/>
                  <span class="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                </a>

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li class="dropdown-header">
                    <h6>Kevin Anderson</h6>
                    <span>Web Designer</span>
                  </li>
                  <li>
                    <hr class="dropdown-divider"/>
                  </li>

                  <li>
                    <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                      <i class="bi bi-person"></i>
                      <span>My Profile</span>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"/>
                  </li>

                  <li>
                    <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                      <i class="bi bi-gear"></i>
                      <span>Account Settings</span>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"/>
                  </li>

                  <li>
                    <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                      <i class="bi bi-question-circle"></i>
                      <span>Need Help?</span>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"/>
                  </li>

                  <li>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <i class="bi bi-box-arrow-right"></i>
                      <span onClick={LogOut}>Sign Out</span>
                    </a>
                  </li>

                </ul> 
              </li> 

            </ul>
          </nav> 

          </header> 
        </div>
    );
 };
 
 export default Navbar;