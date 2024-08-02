import React from 'react';
import women_avatar1 from '../assets/women_avatar1.jpg'

const Account = () => {
  return (
    <div className="tab-content" id="v-pills-tabContent">
      <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        <div className="content-title mb-4">
          <h4 className="text-xl font-semibold">Account</h4>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <form>
              <div className="flex items-center mb-3">
                <figure className="mr-3">
                  <img
                    width="80"
                    className="rounded-full"
                    src={women_avatar1}
                    alt="Avatar"
                  />
                </figure>
                <div>
                  <p className="text-lg font-medium">Roxana Roussell</p>
                  <button type="button" className="outline-blue-700 mr-2 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white py-1 px-3 rounded">Change Avatar</button>
                  <button type="button" className="btn btn-outline-danger border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-1 px-3 rounded">Remove Avatar</button>
                </div>
              </div>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4">
                  <div className="form-group mb-4">
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input type="text" className="form-control border border-gray-300 p-2 rounded w-full" value="Roxana Roussell" />
                  </div>
                  <div className="form-group mb-4">
                    <label className="block text-sm font-medium mb-1">Username</label>
                    <input type="text" className="form-control border border-gray-300 p-2 rounded w-full" value="roxana-roussell" />
                  </div>
                  <div className="form-group mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="text" className="form-control border border-gray-300 p-2 rounded w-full" value="wtaffe3@addthis.com" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="form-group mb-4">
                    <label className="block text-sm font-medium mb-1">Role</label>
                    <select className="form-control border border-gray-300 p-2 rounded w-full">
                      <option value="">All</option>
                      <option value="">Admin</option>
                      <option value="">User</option>
                      <option value="" selected>Staff</option>
                    </select>
                  </div>
                  <div className="form-group mb-4">
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <select className="form-control border border-gray-300 p-2 rounded w-full">
                      <option value="">All</option>
                      <option value="" selected>Active</option>
                      <option value="">Blocked</option>
                    </select>
                  </div>
                  <div className="form-group mb-4">
                    <label className="block text-sm font-medium mb-1">Department</label>
                    <select className="form-control border border-gray-300 p-2 rounded w-full">
                      <option value="">All</option>
                      <option value="">Sales</option>
                      <option value="" selected>Development</option>
                      <option value="">Management</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-primary bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
