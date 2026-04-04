import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BarChart2, Layers, UserCircle } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        MOVING<span>ADS</span>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/advertiser/home" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
          <Home size={20} /> <span>Home</span>
        </NavLink>
        <NavLink to="/advertiser/stats" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
          <BarChart2 size={20} /> <span>Stats</span>
        </NavLink>
        <NavLink to="/advertiser/my-ads" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
          <Layers size={20} /> <span>My Ads</span>
        </NavLink>
        <NavLink to="/advertiser/account" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
          <UserCircle size={20} /> <span>Account</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;