import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomModal from './component/CustomModal';
import Nav from './component/Nav';
import Pop from './component/Pop';
import Loader from './component/Loader';
import Rootlayout from './layout/Rootlayout';
import Hello from './component/Hello';
import Select from './component/Select';
import State from './component/State';
import ImageGallery from './component/ImageGallery';
import CheckboxDropdown from './component/CheckboxDropdown';
import ModalExample from './component/ModalExample';
import RangePicker from './component/RangePicker';
import Clan from './component/Clan';
import Dropdown from './component/Dropdown';
import Setting from './component/Setting';
import Avatar from './component/AvatarPage/Avatar';
import HistoryTable from './component/Table/HistoryTable';
import SignIn from './component/Filedash/Signin';
import Signup from './component/Filedash/Signup';
import ImageStack from './component/ImageStack';
import ImageInset from './component/ImageInset';
import SettingsData from './Settings/SettingsData';
import DataTable from './component/newpage/DataTable';
import Post from './component/Post';
import Checkbox from './component/Checkbox';
import OtpInput from './component/OtpInput';
import PostsList from './Tanstack/PostList';
import AddPostForm from './Tanstack/AddPostForm';
import Home from './Tanstack/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

function App() {
  const handleOtpSubmit = (otp) => {
    console.log('OTP entered:', otp);
    // Handle OTP verification or submission here
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Loader />} />
        <Route path='/modal' element={<CustomModal />} />
        <Route path='/navbar' element={<Nav />} />
        <Route path='/pop' element={<Pop />} />
        <Route path='/hello' element={<Hello />} />
        <Route path='layout/*' element={<Rootlayout />} />
        <Route path='/select' element={<Select />} />
        <Route path='/state' element={<State />} />
        <Route path='/gallery' element={<ImageGallery />} />
        <Route path='/dropdown' element={<CheckboxDropdown />} />
        <Route path='/modalexample' element={<ModalExample />} />
        <Route path='/range' element={<RangePicker />} />
        <Route path='/clan' element={<Clan />} />
        <Route path='/dropdown' element={<Dropdown />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/table' element={<HistoryTable />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/image' element={<ImageStack />} />
        <Route path='/inset' element={<ImageInset />} />
        <Route path='/settingdata' element={<SettingsData />} />
        <Route path='/datatable' element={<DataTable />} />
        <Route path='/avatar' element={<Avatar />} />
        <Route path='/post' element={<Post />} />
        <Route path='/checkbox' element={<Checkbox />} />
        <Route path='/home' element={<Home />} />
        <Route path='/posts' element={<PostsList />} />
        <Route path='/add-post' element={<AddPostForm />} />
        <Route path='/otp' element={<OtpInput onSubmit={handleOtpSubmit} />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
