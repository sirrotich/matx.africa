import React, { useState } from "react";
import "../styles/Trends.css";
import { Link } from 'react-router-dom'; // Import Link for navigation

import {
  FaChartArea,
  FaHeartbeat,
  FaBrain,
  FaMapMarkerAlt,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaUserCircle,
  FaArrowUp,
  FaChevronDown,
} from "react-icons/fa"; // Updated with FaChevronDown for filter icons
import logo from "../assets/Vector.png"; // Update the path based on your project structure

const Trends = () => {
  const [selectedItem, setSelectedItem] = useState(0); // Default selected item to the first one
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State for toggling sidebar collapse

  // States for managing filter selections
  const [filterType, setFilterType] = useState("All Types");
  const [filterLocation, setFilterLocation] = useState("All Locations");
  const [filterYear, setFilterYear] = useState("All Days");

  const sidebarItems = [
    { text: 'Overview', icon: <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.75 11.75V17.25H20.25V11.75H14.75ZM13.25 11.6C13.25 10.8544 13.8544 10.25 14.6 10.25H20.4C21.1456 10.25 21.75 10.8544 21.75 11.6V17.4C21.75 18.1456 21.1456 18.75 20.4 18.75H14.6C13.8544 18.75 13.25 18.1456 13.25 17.4V11.6ZM3.75 22.75V28.25H20.25V22.75H3.75ZM2.25 22.6C2.25 21.8544 2.85442 21.25 3.6 21.25H20.4C21.1456 21.25 21.75 21.8544 21.75 22.6V28.4C21.75 29.1456 21.1456 29.75 20.4 29.75H3.6C2.85442 29.75 2.25 29.1456 2.25 28.4V22.6ZM3.75 17.25V11.75H9.25V17.25H3.75ZM3.6 10.25C2.85442 10.25 2.25 10.8544 2.25 11.6V17.4C2.25 18.1456 2.85442 18.75 3.6 18.75H9.4C10.1456 18.75 10.75 18.1456 10.75 17.4V11.6C10.75 10.8544 10.1456 10.25 9.4 10.25H3.6Z" fill="#004A4C"/>
      </svg>,  path: '/dashboard' 
       },
    { text: 'Trends', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H5.45943L8.28849 2.76283C8.39057 2.45657 8.67718 2.25 9 2.25C9.32282 2.25 9.60943 2.45657 9.71151 2.76283L15 18.6283L17.2885 11.7628C17.3906 11.4566 17.6772 11.25 18 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H18.5406L15.7115 21.2372C15.6094 21.5434 15.3228 21.75 15 21.75C14.6772 21.75 14.3906 21.5434 14.2885 21.2372L9 5.37171L6.71151 12.2372C6.60943 12.5434 6.32282 12.75 6 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12Z" fill="#004A4C"/>
      </svg> , path: '/trends' 
       },
 
    { text: 'Locations', icon: <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 17C2.75 14.1005 5.10051 11.75 8 11.75H16C18.8995 11.75 21.25 14.1005 21.25 17V23C21.25 25.8995 18.8995 28.25 16 28.25H8C5.10051 28.25 2.75 25.8995 2.75 23V17ZM8 10.25C4.27208 10.25 1.25 13.2721 1.25 17V23C1.25 26.7279 4.27208 29.75 8 29.75H16C19.7279 29.75 22.75 26.7279 22.75 23V17C22.75 13.2721 19.7279 10.25 16 10.25H8ZM12.5675 20.5008C12.8446 20.1929 12.8196 19.7187 12.5117 19.4416C12.2038 19.1645 11.7296 19.1894 11.4525 19.4973L11.4425 19.5084C11.1654 19.8163 11.1904 20.2905 11.4983 20.5676C11.8062 20.8447 12.2804 20.8197 12.5575 20.5119L12.5675 20.5008ZM7.24999 20C7.24999 21.0732 7.53648 21.935 7.82513 22.5303C7.96944 22.828 8.11514 23.0609 8.22806 23.2232C8.28461 23.3045 8.33323 23.3685 8.36975 23.4145C8.4505 23.5161 8.44988 23.5153 8.44206 23.5046C8.43674 23.4973 8.4281 23.4855 8.43944 23.4983C8.71462 23.8079 9.18868 23.8357 9.49827 23.5606C9.80661 23.2865 9.83551 22.8151 9.56384 22.5055L9.56306 22.5046C9.56019 22.5012 9.55337 22.4929 9.5443 22.4815C9.52613 22.4586 9.49662 22.4201 9.45942 22.3666C9.38485 22.2594 9.28054 22.0939 9.17485 21.8759C8.9635 21.44 8.74999 20.8018 8.74999 20C8.74999 19.1982 8.9635 18.56 9.17485 18.1241C9.28054 17.9061 9.38485 17.7406 9.45942 17.6334C9.49662 17.5799 9.52613 17.5414 9.5443 17.5185C9.55337 17.5071 9.56019 17.4988 9.56306 17.4954L9.56384 17.4945C9.83551 17.1849 9.80661 16.7135 9.49827 16.4394C9.18868 16.1643 8.71462 16.1921 8.43944 16.5017C8.4281 16.5145 8.43674 16.5027 8.44206 16.4954C8.44988 16.4847 8.4505 16.4839 8.36975 16.5855C8.33323 16.6315 8.28461 16.6955 8.22806 16.7768C8.11514 16.9391 7.96944 17.172 7.82513 17.4697C7.53648 18.065 7.24999 18.9268 7.24999 20ZM16.1749 22.5303C16.4635 21.935 16.75 21.0732 16.75 20C16.75 18.9268 16.4635 18.065 16.1749 17.4697C16.0306 17.172 15.8849 16.9391 15.7719 16.7768C15.7154 16.6955 15.6668 16.6315 15.6302 16.5855C15.5495 16.4839 15.5501 16.4847 15.5579 16.4954L15.558 16.4954L15.558 16.4954L15.558 16.4954L15.558 16.4955C15.5633 16.5027 15.5719 16.5144 15.5606 16.5017C15.2854 16.1921 14.8113 16.1643 14.5017 16.4394C14.1934 16.7135 14.1645 17.1849 14.4362 17.4945L14.4369 17.4954C14.4398 17.4988 14.4466 17.5071 14.4557 17.5185C14.4739 17.5414 14.5034 17.5799 14.5406 17.6334C14.6152 17.7406 14.7195 17.9061 14.8251 18.1241C15.0365 18.56 15.25 19.1982 15.25 20C15.25 20.8018 15.0365 21.44 14.8251 21.8759C14.7195 22.0939 14.6152 22.2594 14.5406 22.3666C14.5034 22.4201 14.4739 22.4586 14.4557 22.4815C14.4466 22.4929 14.4398 22.5012 14.4369 22.5046L14.4362 22.5055C14.1645 22.8151 14.1934 23.2865 14.5017 23.5606C14.8113 23.8357 15.2854 23.8079 15.5606 23.4983C15.5719 23.4855 15.5633 23.4973 15.5579 23.5046C15.5501 23.5153 15.5495 23.5161 15.6302 23.4145C15.6668 23.3685 15.7154 23.3045 15.7719 23.2232C15.8849 23.0609 16.0306 22.828 16.1749 22.5303ZM4.24999 20C4.24999 21.7683 4.80114 23.1485 5.35389 24.0862C5.62995 24.5545 5.90733 24.9143 6.11929 25.1603C6.22541 25.2835 6.3156 25.3787 6.38171 25.4453L6.49158 25.5563L6.50263 25.5674L6.50031 25.5649C6.49229 25.5563 6.468 25.5305 6.50048 25.5595C6.80946 25.8353 7.28357 25.8085 7.55944 25.4995C7.8346 25.1913 7.80862 24.7189 7.5019 24.4427L7.49307 24.4344C7.48389 24.4258 7.46802 24.4105 7.4464 24.3887C7.40313 24.3451 7.33708 24.2757 7.2557 24.1812C7.09265 23.992 6.87003 23.7044 6.64609 23.3245C6.19885 22.5658 5.74999 21.446 5.74999 20C5.74999 18.554 6.19885 17.4342 6.64609 16.6755C6.87003 16.2956 7.09265 16.008 7.2557 15.8188C7.33708 15.7243 7.40313 15.6549 7.4464 15.6113C7.46802 15.5895 7.48389 15.5742 7.49307 15.5656L7.5019 15.5573C7.80862 15.2811 7.8346 14.8087 7.55944 14.5005C7.28357 14.1915 6.80946 14.1647 6.50048 14.4405C6.46799 14.4696 6.4923 14.4436 6.50031 14.4351C6.50173 14.4336 6.50264 14.4326 6.50263 14.4326C6.5026 14.4326 6.49967 14.4355 6.49157 14.4438C6.47679 14.4587 6.44477 14.4912 6.38171 14.5547C6.3156 14.6213 6.22541 14.7165 6.11929 14.8397C5.90733 15.0857 5.62995 15.4455 5.35389 15.9138C4.80114 16.8515 4.24999 18.2317 4.24999 20ZM18.6461 24.0862C19.1989 23.1485 19.75 21.7683 19.75 20C19.75 18.2317 19.1989 16.8515 18.6461 15.9138C18.3701 15.4455 18.0927 15.0857 17.8807 14.8397C17.7746 14.7165 17.6844 14.6213 17.6183 14.5547C17.5207 14.4563 17.4975 14.4325 17.4974 14.4326C17.4973 14.4327 17.5378 14.4747 17.4995 14.4405C17.1905 14.1647 16.7164 14.1915 16.4406 14.5005C16.1654 14.8087 16.1914 15.2811 16.4981 15.5573L16.5069 15.5656C16.5161 15.5742 16.532 15.5895 16.5536 15.6113C16.5969 15.6549 16.6629 15.7243 16.7443 15.8188C16.9073 16.008 17.13 16.2956 17.3539 16.6755C17.8012 17.4342 18.25 18.554 18.25 20C18.25 21.446 17.8012 22.5658 17.3539 23.3245C17.13 23.7044 16.9073 23.992 16.7443 24.1812C16.6629 24.2757 16.5969 24.3451 16.5536 24.3887C16.532 24.4105 16.5161 24.4258 16.5069 24.4344L16.4981 24.4427C16.1914 24.7189 16.1654 25.1913 16.4406 25.4995C16.7164 25.8085 17.1905 25.8353 17.4995 25.5595C17.532 25.5305 17.5077 25.5563 17.4997 25.5649L17.4974 25.5674L17.5084 25.5562L17.6183 25.4453C17.6844 25.3787 17.7746 25.2835 17.8807 25.1603C18.0927 24.9143 18.3701 24.5545 18.6461 24.0862Z" fill="#004A4C"/>
      </svg>  , path: '/locations' 
       },
    { text: 'Notifications', icon: <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.21026 11.3616C8.47184 10.0159 10.1937 9.25 12.0001 9.25C12.3823 9.25 12.7613 9.28434 13.1331 9.35139C13.5408 9.42489 13.8116 9.81493 13.7382 10.2226C13.6647 10.6302 13.2746 10.9011 12.867 10.8276C12.5823 10.7763 12.2924 10.75 12.0001 10.75C10.6239 10.75 9.29342 11.3327 8.30457 12.3875C7.31417 13.4439 6.75005 14.8865 6.75005 16.4C6.75005 20.2361 5.97869 22.7558 5.16781 24.3415C4.99009 24.689 4.81108 24.9905 4.63891 25.25H11.977C11.9847 25.2498 11.9925 25.2496 12.0002 25.2496H19.3614C19.1892 24.9901 19.0102 24.6887 18.8325 24.3411C18.2213 23.1459 17.6325 21.42 17.3796 18.9996C17.2803 18.0488 18.7828 17.9996 18.8727 18.855C19.1087 21.1025 19.6495 22.6443 20.168 23.6582C20.5133 24.3334 20.8519 24.781 21.0923 25.0516C21.2126 25.1871 21.3088 25.2788 21.3696 25.3328C21.4 25.3599 21.4216 25.3775 21.4329 25.3865L21.4417 25.3933C21.7027 25.5833 21.8131 25.9196 21.7147 26.2278C21.6154 26.5386 21.3266 26.7496 21.0002 26.7496H12.0233C12.0156 26.7499 12.0078 26.75 12.0001 26.75H3.00005C2.67373 26.75 2.38485 26.539 2.28559 26.2281C2.18718 25.9199 2.29755 25.5837 2.55863 25.3937L2.56735 25.3869C2.57869 25.3779 2.60028 25.3602 2.63069 25.3332C2.69148 25.2792 2.7877 25.1875 2.90804 25.052C3.14835 24.7814 3.48701 24.3338 3.8323 23.6585C4.52142 22.3109 5.25005 20.0306 5.25005 16.4C5.25005 14.5188 5.95021 12.7056 7.21026 11.3616ZM16.7501 13C16.7501 11.7574 17.7574 10.75 19.0001 10.75C20.2427 10.75 21.2501 11.7574 21.2501 13C21.2501 14.2426 20.2427 15.25 19.0001 15.25C17.7574 15.25 16.7501 14.2426 16.7501 13ZM19.0001 9.25C16.929 9.25 15.2501 10.9289 15.2501 13C15.2501 15.0711 16.929 16.75 19.0001 16.75C21.0711 16.75 22.7501 15.0711 22.7501 13C22.7501 10.9289 21.0711 9.25 19.0001 9.25ZM10.9188 28.6238C10.711 28.2655 10.252 28.1435 9.89375 28.3514C9.53545 28.5592 9.41348 29.0182 9.62132 29.3765C9.86306 29.7932 10.21 30.1391 10.6275 30.3796C11.045 30.62 11.5183 30.7466 12.0001 30.7466C12.4818 30.7466 12.9552 30.62 13.3726 30.3796C13.7901 30.1391 14.1371 29.7932 14.3788 29.3765C14.5867 29.0182 14.4647 28.5592 14.1064 28.3514C13.7481 28.1435 13.2892 28.2655 13.0813 28.6238C12.9714 28.8132 12.8137 28.9705 12.624 29.0798C12.4342 29.1891 12.2191 29.2466 12.0001 29.2466C11.7811 29.2466 11.5659 29.1891 11.3762 29.0798C11.1864 28.9705 11.0287 28.8132 10.9188 28.6238Z" fill="#004A4C"/>
      </svg>
       },
    { text: 'Settings', icon: <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.981 9.25C10.6403 9.25 10.3424 9.47964 10.2557 9.80912L9.7177 11.8534L7.84921 12.641L6.49844 11.4396C6.20166 11.1756 5.75053 11.1888 5.46967 11.4697L3.46967 13.4697C3.19791 13.7414 3.17556 14.1746 3.4179 14.4729L4.59144 15.9174L3.82402 17.8042L1.82955 18.2696C1.49012 18.3488 1.25 18.6515 1.25 19V21C1.25 21.3381 1.47627 21.6345 1.80248 21.7235L3.8517 22.283L4.64057 24.1544L3.44016 25.5009C3.17563 25.7976 3.18858 26.2492 3.46967 26.5303L5.46967 28.5303C5.74173 28.8024 6.17554 28.8245 6.4738 28.5814L7.9188 27.4038L9.76234 28.1622L10.2728 30.1836C10.3569 30.5167 10.6565 30.75 11 30.75H13C13.3433 30.75 13.6428 30.5169 13.727 30.1841L14.2392 28.1621L16.1369 27.3762C16.3307 27.5361 16.5687 27.7399 16.8008 27.9419C16.989 28.1057 17.1639 28.2601 17.2918 28.3735C17.3557 28.4302 17.4077 28.4766 17.4437 28.5087L17.4993 28.5584C17.7958 28.8243 18.2486 28.812 18.5303 28.5303L20.5303 26.5303C20.8063 26.2543 20.8245 25.8127 20.5721 25.515L19.3839 24.1135L20.164 22.2299L22.1887 21.703C22.5192 21.617 22.7499 21.3187 22.7499 20.9772L22.75 19C22.75 18.657 22.5173 18.3577 22.1848 18.2731L20.1715 17.7612L19.3925 15.8801L20.5727 14.4842C20.8245 14.1865 20.8061 13.7454 20.5303 13.4697L18.5303 11.4697C18.2535 11.1929 17.8104 11.1755 17.5127 11.4298L16.126 12.615L14.1883 11.8181L13.6607 9.80947C13.5741 9.47982 13.2762 9.25 12.9353 9.25H10.981ZM11.0744 12.592L11.5591 10.75H12.3569L12.8324 12.5603C12.8921 12.7877 13.055 12.9739 13.2725 13.0634L15.9795 14.1766C16.2397 14.2836 16.538 14.2359 16.752 14.0531L17.96 13.0207L18.9819 14.0425L17.952 15.2605C17.7708 15.4749 17.7244 15.7724 17.8318 16.0317L18.9294 18.6823C19.0199 18.9009 19.2083 19.064 19.4375 19.1223L21.25 19.5831L21.2499 20.3974L19.425 20.8722C19.1975 20.9314 19.0109 21.0939 18.9209 21.3111L17.823 23.9625C17.7155 24.2221 17.7621 24.5201 17.9438 24.7344L18.9812 25.9581L17.9688 26.9705C17.9101 26.919 17.8486 26.8653 17.7856 26.8105C17.4134 26.4865 16.9476 26.0886 16.6913 25.9054C16.4807 25.7549 16.2073 25.7236 15.9682 25.8226L13.3176 26.9203C13.0988 27.0109 12.9356 27.1995 12.8775 27.429L12.4163 29.25H11.5841L11.1242 27.4287C11.066 27.1983 10.9021 27.0091 10.6824 26.9187L8.07651 25.8467C7.82203 25.742 7.53067 25.7851 7.31736 25.9589L6.05132 26.9907L5.03111 25.9704L6.07559 24.7988C6.2682 24.5828 6.31929 24.2751 6.20686 24.0084L5.09222 21.3642C5.00277 21.152 4.82079 20.9926 4.59864 20.932L2.75 20.4273V19.5951L4.54295 19.1767C4.78003 19.1214 4.97551 18.9544 5.06724 18.7289L6.1481 16.0714C6.25121 15.8179 6.20804 15.5283 6.03546 15.3159L5.00862 14.052L6.03013 13.0305L7.20597 14.0764C7.42202 14.2685 7.7293 14.3194 7.99574 14.2071L10.6404 13.0922C10.8548 13.0018 11.0152 12.817 11.0744 12.592ZM9.75 20C9.75 18.7574 10.7574 17.75 12 17.75C13.2426 17.75 14.25 18.7574 14.25 20C14.25 21.2426 13.2426 22.25 12 22.25C10.7574 22.25 9.75 21.2426 9.75 20ZM12 16.25C9.92893 16.25 8.25 17.9289 8.25 20C8.25 22.0711 9.92893 23.75 12 23.75C14.0711 23.75 15.75 22.0711 15.75 20C15.75 17.9289 14.0711 16.25 12 16.25Z" fill="#004A4C"/>
      </svg>, path: '/settings' 
       },
    { text: 'Logout', icon: <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 13C5.75 12.3096 6.30964 11.75 7 11.75H17C17.6904 11.75 18.25 12.3096 18.25 13V14C18.25 14.4142 18.5858 14.75 19 14.75C19.4142 14.75 19.75 14.4142 19.75 14V13C19.75 11.4812 18.5188 10.25 17 10.25H7C5.48122 10.25 4.25 11.4812 4.25 13V27C4.25 28.5188 5.48122 29.75 7 29.75H17C18.5188 29.75 19.75 28.5188 19.75 27V26C19.75 25.5858 19.4142 25.25 19 25.25C18.5858 25.25 18.25 25.5858 18.25 26V27C18.25 27.6904 17.6904 28.25 17 28.25H7C6.30964 28.25 5.75 27.6904 5.75 27V13ZM16.5303 23.5303L19.5303 20.5303C19.8232 20.2374 19.8232 19.7626 19.5303 19.4697L16.5303 16.4697C16.2374 16.1768 15.7626 16.1768 15.4697 16.4697C15.1768 16.7626 15.1768 17.2374 15.4697 17.5303L17.1893 19.25H12C11.5858 19.25 11.25 19.5858 11.25 20C11.25 20.4142 11.5858 20.75 12 20.75H17.1893L15.4697 22.4697C15.1768 22.7626 15.1768 23.2374 15.4697 23.5303C15.7626 23.8232 16.2374 23.8232 16.5303 23.5303Z" fill="#004A4C"/>
      </svg>
       },
  ];
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="trends-container">
      {/* Sidebar */}
      <div className="sidebar-wrapper">
      <div className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
      <div className="logo-container">
          {!isSidebarCollapsed && <svg width="289" height="73" viewBox="0 0 289 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.8229 16.732V0H28.0363L20.4129 14.996L12.7866 0H0V16.732H5.41261V5.46606H9.48258L17.3702 20.978L9.96918 35.5309H5.61085L5.41261 23.4819L0 23.576L0.28835 41H13.2732L20.4129 26.96L27.5527 41H40.5345L40.8229 23.576L35.4103 23.4819L35.212 35.5309H30.8537L23.4527 20.978L31.3403 5.46606H35.4103V16.732H40.8229Z" fill="#004A4C"/>
<path d="M125.424 6.74075L134.462 20.0705L125.04 33.9466H130.116L137.039 23.7641L143.924 33.9466H149L139.577 20.0705L148.616 6.74075H143.578L137.039 16.3405L130.5 6.74075H125.424Z" fill="#004A4C"/>
<path d="M115.269 32.4686C114.269 31.4853 113.77 29.9283 113.77 27.8038V18.3983H110.385V14.5499H113.884V8.68017H118.191V14.5499H123.192V18.3983H118.191V27.649C118.191 28.5049 118.357 29.1271 118.69 29.5155C119.023 29.904 119.549 30.0983 120.267 30.0983H123.189V33.9466H120.036C117.855 33.9466 116.266 33.455 115.266 32.4686H115.269Z" fill="#004A4C"/>
<path d="M85.1119 20.9658C85.1119 18.9172 84.5533 17.2844 83.4389 16.0673L83.4449 16.0704C82.3305 14.8533 80.8347 14.2433 78.9634 14.2433H76.7707C75.8727 14.2433 75.0286 14.4982 74.2326 15.002C73.4367 15.5089 72.7578 16.213 72.1932 17.1205C71.7576 16.213 71.1539 15.5059 70.3849 15.002C69.616 14.4952 68.7419 14.2433 67.7687 14.2433H65.5761C64.8041 14.2433 64.0502 14.4891 63.3053 14.9808C62.5604 15.4725 61.9446 16.1462 61.458 17.0021V14.5529H57.343V33.9466H61.7674V22.2466C61.9446 21.0265 62.3501 20.0371 62.9779 19.2723C63.6057 18.5075 64.3416 18.1251 65.1886 18.1251H66.9187C67.5585 18.1251 68.0721 18.3922 68.4566 18.9233C68.8411 19.4544 69.0333 20.1616 69.0333 21.0417V33.9466H73.4186V21.5091C73.5959 20.4742 73.9803 19.6517 74.5721 19.0416C75.1608 18.4316 75.8787 18.1281 76.7257 18.1281H78.5729C79.2127 18.1281 79.7264 18.383 80.1108 18.8869C80.4953 19.3907 80.6875 20.0705 80.6875 20.9264V33.9466H85.1119V20.9658Z" fill="#004A4C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M89.1909 28.7749C89.1909 30.4351 89.7856 31.7614 90.9781 32.7599L90.9811 32.7629C92.1736 33.7615 93.7445 34.2592 95.6939 34.2592H98.0788C98.9739 34.2592 99.887 34.0043 100.809 33.5005C101.731 32.9966 102.5 32.3289 103.116 31.5004V33.9496H107.231V20.6957C107.231 18.7533 106.576 17.1933 105.27 16.0127C103.96 14.8321 102.23 14.2433 100.076 14.2433H96.8443C94.7147 14.2433 92.9966 14.7866 91.69 15.8761C90.3834 16.9627 89.7286 18.4012 89.7286 20.1889H94.0358C94.0358 19.5394 94.2912 19.0143 94.8048 18.6137C95.3184 18.21 95.9973 18.0097 96.8443 18.0097H100.076C100.896 18.0097 101.563 18.2556 102.077 18.7472C102.59 19.2389 102.846 19.8854 102.846 20.6897V23.0995C102.203 22.7626 101.473 22.4894 100.653 22.283C99.8329 22.0767 99.064 21.9735 98.3461 21.9735H95.9612C93.9337 21.9735 92.2997 22.4682 91.0562 23.4515C89.8127 24.4349 89.1909 25.7429 89.1909 27.3758V28.7749ZM101.115 29.8857C100.295 30.4685 99.3704 30.7598 98.3461 30.7598H96.1504C95.3575 30.7598 94.7147 30.5656 94.2281 30.1771C93.7415 29.7886 93.4982 29.2696 93.4982 28.6232V27.5336C93.4982 26.9145 93.7355 26.4076 94.2101 26.0191C94.6846 25.6307 95.3064 25.4364 96.0753 25.4364H98.4993C99.3704 25.4364 100.202 25.5487 100.998 25.7672C101.794 25.9888 102.41 26.2801 102.846 26.6413V27.5731C102.512 28.5321 101.935 29.303 101.115 29.8857Z" fill="#004A4C"/>
</svg>
}
        </div>
        <div className="sidebar-items">
          {sidebarItems.map((item, index) => (
            <Link 
            to={item.path} // Use Link for navigation
            className={`sidebar-item ${selectedItem === index ? 'selected' : ''}`} 
            key={index} 
            onClick={() => handleItemClick(index)}
          >
            <div className="sidebar-item-icon">{item.icon}</div>
            {!isSidebarCollapsed && <span className="sidebar-item-text">{item.text}</span>}
          </Link>
          ))}
        </div>
        {/* <div className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars />
        </div> */}
      </div>

</div>
      {/* Main Content */}
      <div className="main-content">
        {/* Selected Sidebar Text and Profile */}
        <div className="header-section">
          <div className="selected-item-text">
            {sidebarItems[selectedItem].text}
          </div>

          <div className="profile-icon">
            <FaUserCircle size={48} />
          </div>
        </div>
        <div className="col-12 segment">
          <div className="nav-bar1 col-6 ">
            <div className="consumption-level">
              <div>
              <button className="high-consumption">
              High Consumption
              </button>
              </div>
              <div>
              <button className="low-consumption">
              Low Consumption
              </button>
              </div>
            </div>
          </div>
          <div className="nav-bar col-6">
            <div className="filters-container float-end">
              <button className="filter-button">
                {filterType} <FaChevronDown />
              </button>
              <button className="filter-button">
                {filterLocation} <FaChevronDown />
              </button>
            </div>
          </div>
        </div>

        {/* Top Cards */}
        <div className="top-cards">
          <div className="small-card">
            <div className="card-text">By time period</div>
            <div className="card-number">
              234 Kg
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 2.5C8.25 2.08579 8.58579 1.75 9 1.75H15C15.4142 1.75 15.75 2.08579 15.75 2.5C15.75 2.91421 15.4142 3.25 15 3.25L9 3.25C8.58579 3.25 8.25 2.91421 8.25 2.5ZM12 9.75C12.4142 9.75 12.75 10.0858 12.75 10.5L12.75 14.5C12.75 14.9142 12.4142 15.25 12 15.25C11.5858 15.25 11.25 14.9142 11.25 14.5L11.25 10.5C11.25 10.0858 11.5858 9.75 12 9.75ZM4.75 14.5C4.75 10.4959 7.99594 7.25 12 7.25C16.0041 7.25 19.25 10.4959 19.25 14.5C19.25 18.5041 16.0041 21.75 12 21.75C7.99594 21.75 4.75 18.5041 4.75 14.5ZM12 5.75C7.16751 5.75 3.25 9.66751 3.25 14.5C3.25 19.3325 7.16751 23.25 12 23.25C16.8325 23.25 20.75 19.3325 20.75 14.5C20.75 9.66751 16.8325 5.75 12 5.75Z" fill="#004A4C"/>
</svg>

            </div>
            <div className="card-subtext">From 12:30 PM to 2:45 PM</div>
          </div>
          <div className="small-card">
            <div className="card-text">By day of the wek</div>
            <div className="card-number">
              470 Kg
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 18.5C20 19.1904 19.4404 19.75 18.75 19.75H6.75C6.05964 19.75 5.5 19.1904 5.5 18.5V6.5C5.5 5.80964 6.05965 5.25 6.75 5.25H12V9.5C12 9.91421 12.3358 10.25 12.75 10.25C13.1642 10.25 13.5 9.91421 13.5 9.5V5.25H18.75C19.4403 5.25 20 5.80964 20 6.5L20 18.5ZM12.75 3.75H18.75C20.2687 3.75 21.4999 4.98121 21.5 6.49999L21.5 18.5C21.5 20.0188 20.2688 21.25 18.75 21.25H6.75C5.23122 21.25 4 20.0188 4 18.5V6.5C4 4.98122 5.23122 3.75 6.75 3.75H12.75Z" fill="#004A4C"/>
</svg>

            </div>
            <div className="card-subtext">Friday</div>
          </div>
          <div className="small-card">
            <div className="card-text">By date of the month</div>
            <div className="card-number">
              467 Kg
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 2.75C7.42893 2.75 5.75 4.42893 5.75 6.5V12.8089C3.48301 13.1685 1.75 15.1318 1.75 17.5C1.75 20.1234 3.87665 22.25 6.5 22.25H12.5C12.9142 22.25 13.25 21.9142 13.25 21.5C13.25 21.0858 12.9142 20.75 12.5 20.75H6.5C4.70507 20.75 3.25 19.2949 3.25 17.5C3.25 15.7051 4.70507 14.25 6.5 14.25H15.0359C14.2384 15.0997 13.75 16.2428 13.75 17.5C13.75 20.1234 15.8766 22.25 18.5 22.25C21.1234 22.25 23.25 20.1234 23.25 17.5V14.5V6.5C23.25 4.42893 21.5711 2.75 19.5 2.75H9.5ZM21.75 14.5V6.5C21.75 5.25736 20.7426 4.25 19.5 4.25H9.5C8.25736 4.25 7.25 5.25736 7.25 6.5V12.75H18.5C18.9142 12.75 19.25 13.0858 19.25 13.5C19.25 13.9142 18.9142 14.25 18.5 14.25C16.7051 14.25 15.25 15.7051 15.25 17.5C15.25 19.2949 16.7051 20.75 18.5 20.75C20.2949 20.75 21.75 19.2949 21.75 17.5V14.5Z" fill="#004A4C"/>
</svg>

            </div>
            <div className="card-subtext">23rd Each month</div>
          </div>
          <div className="small-card">
            <div className="card-text">By month</div>
            <div className="card-number">
              1.20 tons
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 2.5C16 2.08579 15.6642 1.75 15.25 1.75C14.8358 1.75 14.5 2.08579 14.5 2.5V3.75H10.75C10.3358 3.75 10 4.08579 10 4.5C10 4.91421 10.3358 5.25 10.75 5.25H14.5V6.5C14.5 6.91421 14.8358 7.25 15.25 7.25C15.6642 7.25 16 6.91421 16 6.5V2.5ZM2.5 10.5V6.5C2.5 4.98122 3.73122 3.75 5.25 3.75H6.5V2.5C6.5 2.08579 6.83579 1.75 7.25 1.75C7.66421 1.75 8 2.08579 8 2.5V4.5V6.5C8 6.91421 7.66421 7.25 7.25 7.25C6.83579 7.25 6.5 6.91421 6.5 6.5V5.25H5.25C4.55964 5.25 4 5.80964 4 6.5V9.75H20.5V6.5C20.5 5.80964 19.9404 5.25 19.25 5.25H18.75C18.3358 5.25 18 4.91421 18 4.5C18 4.08579 18.3358 3.75 18.75 3.75H19.25C20.7688 3.75 22 4.98122 22 6.5V10.5V19.5C22 21.0188 20.7688 22.25 19.25 22.25H5.25C3.73122 22.25 2.5 21.0188 2.5 19.5V10.5ZM4 19.5V11.25H20.5V19.5C20.5 20.1904 19.9404 20.75 19.25 20.75H5.25C4.55964 20.75 4 20.1904 4 19.5Z" fill="#004A4C"/>
</svg>

            </div>
            <div className="card-subtext">May</div>
          </div>
        </div>

        {/* Large Card with Filters */}
        <div className="large-card">
          <div className="large-card-header">
            <h3>Consumption Within 24 Hours</h3>

            <div className="filters-container">
              <button className="filter-button">
                {filterType} <FaChevronDown />
              </button>
              <button className="filter-button">
                {filterLocation} <FaChevronDown />
              </button>
              <button className="filter-button">
                {filterYear} <FaChevronDown />
              </button>
            </div>
          </div>
          {/* Total consumption Graph  */}

          <div className="graph-holder">
            <div className="vertical-bar"></div>
            <div className="months-data">
              <div className="month-container">
                <button
                  className="month-button"
                  id="12AM-button"
                  onClick="showReading('12  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('12  AM')"
                >
                  <div className="month-reading" id="12AM-reading">
                    0
                  </div>
                </div>
                <div className="month-label">12 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="1AM-button"
                  onClick="showReading('1 AM')"
                >
                  Show
                </button>

                <div className="graph-bar" onClick="toggleMonthReading('1 AM')">
                  <div className="month-reading" id="1AM-reading">
                    0
                  </div>
                </div>
                <div className="month-label">1 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="2AM-button"
                  onClick="showReading('2  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="2AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">2 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="3AM-button"
                  onClick="showReading('3 AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="3AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">3 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="4AM-button"
                  onClick="showReading('4  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="4 AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">4 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="5AM-button"
                  onClick="showReading('5 AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="5AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">5 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="6AM-button"
                  onClick="showReading('6  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="6AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">6 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="7AM-button"
                  onClick="showReading('7  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="7AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">7 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="8AM-button"
                  onClick="showReading('8  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="8AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">8 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="9AM-button"
                  onClick="showReading('9  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="9AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">9 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="10AM-button"
                  onClick="showReading('10  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="10AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">10 AM</div>
              </div>
              <div className="month-container">
                <button
                  className="month-button"
                  id="11AM-button"
                  onClick="showReading('11  AM')"
                >
                  Show
                </button>

                <div
                  className="graph-bar"
                  onClick="toggleMonthReading('2  AM')"
                >
                  <div className="month-reading" id="11AM-reading">
                    15
                  </div>
                </div>
                <div className="month-label">11 AM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="location-title">
          <div className="location-text">Consumption By Cylinders </div>
          <div className="filters-container1">
            <button className="filter-button1">
              {filterType} <FaChevronDown />
            </button>
            <button className="filter-button1">
              {filterLocation} <FaChevronDown />
            </button>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="bottom-cards">
          <div className="cylinder-medium-card">
            <div className="cylinder-highest">
              <div className="cylinder-highest-data">
                <div className="cylinder-highest-text">Total</div>
                <div className="cylinder-highest-kg">200 <span className="span-cylinder">cylinder</span> </div>
                <div className="cylinder-highest-quantity">9 tons</div>
              </div>
            </div>
          </div>

          <div className="cylinder-medium-card">
            <div className="cylinder-second-highest">
              <div className="cylinder-second-highest-data">
                <div className="cylinder-second-highest-text"> Weekly</div>
                <div className="cylinder-second-highest-kg">4 <span className="span-cylinder">cylinder</span> </div>
                <div className="cylinder-second-highest-quantity">180 Kg</div>
              </div>
            </div>
          </div>
          <div className="cylinder-medium-card">
            <div className="cylinder-lowest">
              <div className="cylinder-lowest-data">
                <div className="cylinder-lowest-text">Monthly</div>
                <div className="cylinder-lowest-kg">16 <span className="span-cylinder">cylinder</span></div>
                <div className="cylinder-lowest-quantity">720 kg </div>
              </div>
            </div>
          </div>

          <div className="cylinder-medium-card">
            <div className="cylinder-furthest">
              <div className="cylinder-furthest-data">
                <div className="cylinder-furthest-text">Yearly</div>
                <div className="cylinder-furthest-kg">192 <span className="span-cylinder">cylinder</span></div>
                <div className="cylinder-furthest-quantity"> 8.6 tons </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trends;