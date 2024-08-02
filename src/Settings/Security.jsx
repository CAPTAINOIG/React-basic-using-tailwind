import React from 'react';

const Security = () => {
  return (
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
      <div className="content-title mb-4">
        <h4 className="text-xl font-semibold">Security</h4>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          <form>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4">
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">Old Password</label>
                  <input type="password" className="form-control border border-gray-300 p-2 rounded w-full" />
                </div>
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">New Password</label>
                  <input type="password" className="form-control border border-gray-300 p-2 rounded w-full" />
                </div>
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">New Password Repeat</label>
                  <input type="password" className="form-control border border-gray-300 p-2 rounded w-full" />
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-primary bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Security