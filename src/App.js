import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/SideBar';
import Main from './components/main/Main';
import RightBar from './components/rightbar/RightBar';

function App() {
  return (
    <div className="App flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700">
        <Sidebar/>
        <Main/>
        <RightBar/>
    </div>
  );
}

export default App;
