import React from 'react';

function Header() {
  return (
    <div className="header d-print-none">
      <div className="header-container">
        <div className="header-body flex justify-between">
          <div className="header-body-left flex items-center">
            <button className="nav-link">
              <i className="ti-menu"></i>
            </button>
            <div className="header-search-form flex items-center ml-4">
              <form>
                <div className="input-group flex">
                  <button className="btn">
                    <i className="ti-search"></i>
                  </button>
                  <input type="text" className="form-control" placeholder="Search something..." />
                  <button className="btn header-search-close-btn">
                    <i data-feather="x"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="header-body-right flex items-center">
            <button className="nav-link" title="Search">
              <i className="ti-search"></i>
            </button>
            <button className="nav-link" title="Dark">
              <i className="fa fa-moon-o"></i>
            </button>
            <div className="relative">
              <button className="nav-link nav-link-notify" title="Notifications">
                <i className="ti-bell"></i>
              </button>
              <div className="dropdown-menu-right">
                <div className="bg-primary px-3 py-3">
                  <h6 className="mb-0">Notifications</h6>
                </div>
                <div className="dropdown-scroll">
                  <ul className="list-group list-group-flush">
                    {/* List of notifications */}
                  </ul>
                </div>
                <div className="px-3 py-2 text-right border-top">
                  <ul className="list-inline small">
                    <li className="list-inline-item mb-0">
                      <a href="#">Mark All Read</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <button className="nav-link" title="Settings">
              <i className="ti-settings"></i>
            </button>
            <div className="relative">
              <button className="nav-link profile-nav-link" title="User menu">
                <span className="mr-2 hidden sm:inline">Bony Gidden</span>
                <figure className="avatar avatar-sm">
                  <img src="../../assets/media/image/user/man_avatar3.jpg" className="rounded-circle" alt="avatar" />
                </figure>
              </button>
              <div className="dropdown-menu-right">
                <div className="text-center py-4">
                  <figure className="avatar avatar-lg mb-3 border-0">
                    <img src="../../assets/media/image/user/man_avatar3.jpg" className="rounded-circle" alt="image" />
                  </figure>
                  <h5 className="mb-0">Bony Gidden</h5>
                </div>
                <div className="list-group list-group-flush">
                  <a href="#" className="list-group-item">Settings</a>
                  <a href="http://bifor.laborasyon.com/login" className="list-group-item text-danger">Sign Out!</a>
                </div>
                <div className="pb-0 p-4">
                  <div className="mb-4">
                    <h6 className="flex justify-between">
                      Completed Tasks
                      <span className="float-right">%68</span>
                    </h6>
                    <div className="progress h-1">
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="nav-link header-toggler">
            <i className="ti-arrow-down"></i>
          </button>
          <button className="nav-link sidebar-toggler">
            <i className="ti-cloud"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
