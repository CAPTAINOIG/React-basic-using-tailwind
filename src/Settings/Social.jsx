import React from 'react';

const Social = () => {
  return (
    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
      <div className="content-title mb-4">
        <h4 className="text-xl font-semibold">Social</h4>
        <div className="relative w-full border-b h-0.5">
            <div className="absolute inset-0 w-20 bg-blue-700"></div>
            <div className="absolute inset-y-0 right-0 w-1/8 bg-gray-500"></div>
          </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          <form>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4">
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">Twitter</label>
                  <input
                    type="text"
                    className="form-control border border-gray-300 p-2 rounded w-full"
                    value="https://twitter.com/roxana-roussell"
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">Facebook</label>
                  <input
                    type="text"
                    className="form-control border border-gray-300 p-2 rounded w-full"
                    value="https://www.facebook.com/roxana-roussell"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">Instagram</label>
                  <input
                    type="text"
                    className="form-control border border-gray-300 p-2 rounded w-full"
                    value="https://www.instagram.com/roxana-roussell/"
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">GitHub</label>
                  <input
                    type="text"
                    className="form-control border border-gray-300 p-2 rounded w-full"
                    value="https://github.com/roxana-roussell"
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Social;
