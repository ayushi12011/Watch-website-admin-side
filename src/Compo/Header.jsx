import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
  {/* ======= Header ======= */}
  <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="d-flex align-items-center justify-content-between">
      <NavLink to="/index" className="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt />
        <span className="d-none d-lg-block">NiceAdmin</span>
      </NavLink>
      <i className="bi bi-list toggle-sidebar-btn" />
    </div>{/* End Logo */}
    <div className="search-bar">
      <form className="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
        <button type="submit" title="Search"><i className="bi bi-search" /></button>
      </form>
    </div>{/* End Search Bar */}
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item d-block d-lg-none">
          <a className="nav-link nav-icon search-bar-toggle " href="#">
            <i className="bi bi-search" />
          </a>
        </li>{/* End Search Icon*/}
        <li className="nav-item dropdown">
          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-bell" />
            <span className="badge bg-primary badge-number">4</span>
          </a>{/* End Notification Icon */}
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
              You have 4 new notifications
              <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-exclamation-circle text-warning" />
              <div>
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-x-circle text-danger" />
              <div>
                <h4>Atque rerum nesciunt</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>1 hr. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-check-circle text-success" />
              <div>
                <h4>Sit rerum fuga</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>2 hrs. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-info-circle text-primary" />
              <div>
                <h4>Dicta reprehenderit</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>4 hrs. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-footer">
              <a href="#">Show all notifications</a>
            </li>
          </ul>{/* End Notification Dropdown Items */}
        </li>{/* End Notification Nav */}
        <li className="nav-item dropdown">
          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-chat-left-text" />
            <span className="badge bg-success badge-number">3</span>
          </a>{/* End Messages Icon */}
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li className="dropdown-header">
              You have 3 new messages
              <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <a href="#">
                <img src="assets/img/messages-1.jpg" alt className="rounded-circle" />
                <div>
                  <h4>Maria Hudson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>4 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <a href="#">
                <img src="assets/img/messages-2.jpg" alt className="rounded-circle" />
                <div>
                  <h4>Anna Nelson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>6 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <a href="#">
                <img src="assets/img/messages-3.jpg" alt className="rounded-circle" />
                <div>
                  <h4>David Muldon</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>8 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-footer">
              <a href="#">Show all messages</a>
            </li>
          </ul>{/* End Messages Dropdown Items */}
        </li>{/* End Messages Nav */}
        <li className="nav-item dropdown pe-3">
          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="https://st4.depositphotos.com/40269226/41088/v/600/depositphotos_410885018-stock-illustration-woman-face-girl-avatar-concept.jpg" alt="Profile" className="rounded-circle" />
            <span className="d-none d-md-block dropdown-toggle ps-2">A.Thakkar</span>
          </a>{/* End Profile Iamge Icon */}
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>Ayushi Thakkar</h6>
              <span>Fullstack Designer</span>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i className="bi bi-person" />
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i className="bi bi-gear" />
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                <i className="bi bi-question-circle" />
                <span>Need Help?</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <i className="bi bi-box-arrow-right" />
                <span>Sign Out</span>
              </a>
            </li>
          </ul>{/* End Profile Dropdown Items */}
        </li>{/* End Profile Nav */}
      </ul>
    </nav>{/* End Icons Navigation */}
  </header>{/* End Header */}
  {/* ======= Sidebar ======= */}
  <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">
        <NavLink className="nav-link " to="/index">
          <i className="bi bi-grid" />
          <span>Dashboard</span>
        </NavLink>
      </li>{/* End Dashboard Nav */}
      <li className="nav-item">
        <NavLink className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="#">
          <i className="bi bi-menu-button-wide" /><span>Categories</span><i className="bi bi-chevron-down ms-auto" />
        </NavLink>
        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <NavLink to="/Add_Category">
              <i className="bi bi-circle" /><span>Add Category</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Manage_category">
              <i className="bi bi-circle" /><span>Manage Category</span>
            </NavLink>
          </li>
        </ul>
      </li>{/* End Components Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-journal-text" /><span>Product</span><i className="bi bi-chevron-down ms-auto" />
        </a>
        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <NavLink to="/Add_product">
              <i className="bi bi-circle" /><span>Add Product</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Manage_product">
              <i className="bi bi-circle" /><span>Manage Product</span>
            </NavLink>
          </li>
        </ul>
      </li>{/* End Forms Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-people-fill" /><span>User</span><i className="bi bi-chevron-down ms-auto" />
        </a>
        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <NavLink to="/Manage_user">
              <i className="bi bi-circle" /><span>Manage User</span>
            </NavLink>
          </li>
        </ul>
      </li>{/* End Tables Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-telephone-fill" /><span>Contact</span><i className="bi bi-chevron-down ms-auto" />
        </a>
        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <NavLink to="/manage_contact">
              <i className="bi bi-circle" /><span>Manage Contact</span>
            </NavLink>
          </li>
        </ul>
      </li>{/* End Charts Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-gem" /><span>Blog</span><i className="bi bi-chevron-down ms-auto" />
        </a>
        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <NavLink to="/add_blog">
              <i className="bi bi-circle" /><span>Add Blog</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/manage_blog">
              <i className="bi bi-circle" /><span>Manage Blog</span>
            </NavLink>
          </li>
        </ul>
      </li>{/* End Icons Nav */}
      <li>
            <Link to="icons-bootstrap.html"> Logout </Link>
          </li>
    </ul>
  </aside>{/* End Sidebar*/}
</div>

  )
}

export default Header