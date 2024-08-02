import React from 'react'

const Information = () => {
  return (
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
      <div className="content-title mb-4">
        <h4 className="text-xl font-semibold">Information</h4>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          <form>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4">
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">Birth Date</label>
                  <input type="text" className="form-control border border-gray-300 p-2 rounded w-full" value="Roxana Roussell" />
                </div>
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input type="text" className="form-control border border-gray-300 p-2 rounded w-full" value="+65195892151" />
                </div>
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">Website</label>
                  <input type="text" className="form-control border border-gray-300 p-2 rounded w-full" value="http://laborasyon.com/" />
                </div>
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">Languages</label>
                  <input type="text" className="form-control border border-gray-300 p-2 rounded w-full" value="English, Spanish" />
                </div>
                <div className="form-group mb-4">
                  <p className="text-sm font-medium mb-1">Gender</p>
                  <div className="flex items-center mb-2">
                    <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input mr-2" />
                    <label className="custom-control-label" htmlFor="customRadio1">Male</label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input mr-2" />
                    <label className="custom-control-label" htmlFor="customRadio2">Female</label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input mr-2" />
                    <label className="custom-control-label" htmlFor="customRadio3">Other</label>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">Address Line 1</label>
                  <input type="text" className="form-control border border-gray-300 p-2 rounded w-full" value="A-65, Belvedere Streets" />
                </div>
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">Address Line 2</label>
                  <input type="text" className="form-control border border-gray-300 p-2 rounded w-full" value="" />
                </div>
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">Post Code</label>
                  <input type="text" className="form-control border border-gray-300 p-2 rounded w-full" value="1868" />
                </div>
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input type="text" className="form-control border border-gray-300 p-2 rounded w-full" value="New York" />
                </div>
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">State</label>
                  <input type="text" className="form-control border border-gray-300 p-2 rounded w-full" value="New York" />
                </div>
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium mb-1">Country</label>
                  <input type="text" className="form-control border border-gray-300 p-2 rounded w-full" value="United States" />
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


export default Information