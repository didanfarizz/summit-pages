import App from '@/components/App';
// import NavbarLogin from '@/components/navbarLogin';
import SidebarProfile from '@/components/sidebar';
import Footer from '@/components/footer';
import React from 'react';

export default function MainPage() {
  return (
    <div className="">
      {/* <NavbarLogin /> */}
      <div className="flex">
        <SidebarProfile/>
        <App />
      </div>
      <Footer/>
    </div>
  );
}
