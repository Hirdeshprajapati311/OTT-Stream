import {Outlet} from 'react-router-dom'
import { BottomNavBar, Sidebar } from '../components';

const MainLayout = () => {
  return (
    <div className='h-screen flex flex-col'>
      <div className='h-full w-full  flex flex-row'>
        <Sidebar />
        <main className='overflow-y-auto min-w-0 flex-1'>
          <Outlet />
        </main>
      </div>
      <BottomNavBar />

    </div>
  );
}

export default MainLayout;
