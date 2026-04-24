import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Advertiser/Dashboard';
import MyAds from './pages/Advertiser/MyAds';
import PostAdModal from './pages/Advertiser/PostAdModal';
import FindDrivers from './pages/Advertiser/FindDrivers';
import AdsList from './pages/Advertiser/AdsList';
import AdDetails from './pages/Advertiser/AdDetails';
import TrackDriver from './pages/Advertiser/TrachDriver';
import RateDriver from './pages/Advertiser/RateDriver';
import GeoFenceScreen from './pages/Advertiser/GeoFenceScreen';
import AdFenceMap from './pages/Advertiser/AdFenceMap';
import AdSchedule from './pages/Advertiser/AdSchedule';

// A simple wrapper to keep the Sidebar consistent on Advertiser pages
const AdvertiserWrapper = ({ children }) => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <div style={{ 
      marginLeft: 'var(--sidebar-width)', 
      flex: 1, 
      height: '100vh', 
      overflowY: 'auto',
      background: 'var(--bg-light)' 
    }}>
      {children}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Advertiser Routes */}
        <Route path="/advertiser/home" element={
          <AdvertiserWrapper> <Dashboard /> </AdvertiserWrapper>
        } />


        <Route path="/advertiser/my-ads" element={<MyAds />} />
        <Route path="/advertiser/ad/:id" element={<AdDetails />} />

        <Route path="/advertiser/ad/:id/track" element={<TrackDriver />} />
        <Route path="/advertiser/ad/:id/rate" element={<RateDriver />} />

        <Route path="/advertiser/fence/:adId" element={<GeoFenceScreen />} />
        <Route path="/advertiser/fence/:adId" element={<AdFenceMap />} />

        {/* <Route path="/advertiser/my-ads" element={
          <AdvertiserWrapper> <MyAds /> </AdvertiserWrapper>
        } /> */}

        {/* <Route path="/advertiser/post-ad" element={
          <AdvertiserWrapper> <PostAd /> </AdvertiserWrapper>
        } /> */}


        <Route path="/advertiser/ads-list" element={
          <AdvertiserWrapper><AdsList /> <FindDrivers /> </AdvertiserWrapper>
        } />

        <Route path="/advertiser/find-drivers" element={
          <AdvertiserWrapper> <FindDrivers /> </AdvertiserWrapper>
        } />

        <Route path="/advertiser/schedule/:adId" element={<AdSchedule />} />
        <Route path="/advertiser/post-ad-modal" element={<PostAdModal />} />
        

        {/* <Route path="/advertiser/stats" element={<MyAds />} /> */}

        
        {/* Add more routes as we build them (Stats, Account, etc.) */}
      </Routes>
    </Router>
  );
}

export default App;