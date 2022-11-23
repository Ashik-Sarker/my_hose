import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            {/* <span>Dashboard</span> */}

            <Link class="nav-link" to="/dashboard">
              <i class="bi bi-grid"></i>
              Dashboard
            </Link>
          </li>

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i class="bi bi-menu-button-wide"></i>
              <span>Land Lord</span>
              <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="components-nav"
              class="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                {/* <i class="bi bi-circle"></i><span>Add Land Lord</span> */}
                <Link class="nav-link" to="/add-land-lord">
                  <i class="bi bi-circle"></i>
                  Add Land Lord
                </Link>
              </li>
              <li>
                {/* <i class="bi bi-circle"></i><span>Add Land Lord</span> */}
                <Link class="nav-link" to="/manage-landlord">
                  <i class="bi bi-circle"></i>
                  Manage Land Lord
                </Link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i class="bi bi-journal-text"></i>
              <span>Rent Person</span>
              <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="forms-nav"
              class="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link class="nav-link" to="/family">
                  <i class="bi bi-circle"></i>
                  Family
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/sublet">
                  <i class="bi bi-circle"></i>
                  Sublet
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/mes">
                  <i class="bi bi-circle"></i>
                  Mes
                </Link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i class="bi bi-layout-text-window-reverse"></i>
              <span>User</span>
              <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="tables-nav"
              class="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="tables-general.html">
                  <i class="bi bi-circle"></i>
                  <span>All Users</span>
                </a>
              </li>
              <li>
                <a href="tables-data.html">
                  <i class="bi bi-circle"></i>
                  <span>Data Tables</span>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i class="bi bi-bar-chart"></i>
              <span>Report</span>
              <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="charts-nav"
              class="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="charts-chartjs.html">
                  <i class="bi bi-circle"></i>
                  <span>Chart.js</span>
                </a>
              </li>
              <li>
                <a href="charts-apexcharts.html">
                  <i class="bi bi-circle"></i>
                  <span>ApexCharts</span>
                </a>
              </li>
              <li>
                <a href="charts-echarts.html">
                  <i class="bi bi-circle"></i>
                  <span>ECharts</span>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              data-bs-target="#icons-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i class="bi bi-gem"></i>
              <span>Services</span>
              <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="icons-nav"
              class="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="icons-bootstrap.html">
                  <i class="bi bi-circle"></i>
                  <span>Bootstrap Icons</span>
                </a>
              </li>
              <li>
                <a href="icons-remix.html">
                  <i class="bi bi-circle"></i>
                  <span>Remix Icons</span>
                </a>
              </li>
              <li>
                <a href="icons-boxicons.html">
                  <i class="bi bi-circle"></i>
                  <span>Boxicons</span>
                </a>
              </li>
            </ul>
          </li>

          {/* <li class="nav-heading">Pages</li> */}

          {/* <li class="nav-item">
            <a class="nav-link collapsed" href="users-profile.html">
              <i class="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-faq.html">
              <i class="bi bi-question-circle"></i>
              <span>F.A.Q</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-contact.html">
              <i class="bi bi-envelope"></i>
              <span>Contact</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-register.html">
              <i class="bi bi-card-list"></i>
              <span>Register</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-login.html">
              <i class="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-error-404.html">
              <i class="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-blank.html">
              <i class="bi bi-file-earmark"></i>
              <span>Blank</span>
            </a>
          </li> */}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
