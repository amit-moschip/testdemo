import { useState } from "react";
import MailIcon from '../../assets/email.svg';
import BellIcon from "../../assets/notification.svg";
import TargetIcon from "../../assets/newquiz.svg";
import ArrowDownIcon from "../../assets/dropdown.svg";
import LogoIcon from "../../assets/Logoicon.svg";
import HamburgerIcon from "../../assets/menubtn.svg";

const Topbar = ({
  title = "Dashboard",
  onNewQuizClick = () => {},
  notificationCount = 0,
  mailCount = 0,
  userInitials = "",
  showProfileCard = null,
}) => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = (e) => {
    e.stopPropagation();
    setShowProfile((prev) => !prev);
  };

  return (
    <div className="w-full h-[60px] px-4 bg-white border-b border-[#EAEAEA] flex items-center justify-between relative shadow-sm">
      
      {/* Left Section */}
      <div className="flex items-center gap-4 w-[200px]">
        <img src={HamburgerIcon} alt="menu" className="w-5 h-5 cursor-pointer" />
        <img src={LogoIcon} alt="logo" className="w-8 h-8" />
        
      </div>
      <h2 className="text-lg font-semibold text-black">{title}</h2>
      <button
        className="flex items-center gap-2 border border-black px-4 py-1 rounded-full hover:bg-gray-100"
        onClick={onNewQuizClick}
      >
        <img src={TargetIcon} alt="New Quiz" className="w-5 h-5" />
        <span className="text-sm font-medium text-black">New quiz</span>
      </button>

      <div className="flex items-center gap-6">
        
       
        <div className="relative">
          <img src={MailIcon} alt="Mail" className="w-6 h-6 cursor-pointer" />
          {mailCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {mailCount}
            </span>
          )}
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <img src={BellIcon} alt="Notifications" className="w-6 h-6 cursor-pointer" />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </div>

        {/* Profile Icon */}
        <div onClick={toggleProfile} className="cursor-pointer flex items-center gap-2">
          <div className="h-8 w-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
            {userInitials}
          </div>
          <img src={ArrowDownIcon} alt="dropdown" className="w-4 h-4 ml-1" />
        </div>
      </div>

      {/* Profile Dropdown */}
      {showProfile && showProfileCard && (
        <div className="absolute top-full right-4 mt-2 z-50">
          {showProfileCard}
        </div>
      )}
    </div>
  );
};

export default Topbar;
