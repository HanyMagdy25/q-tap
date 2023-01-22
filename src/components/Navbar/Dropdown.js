import React, { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import { AiOutlineUser } from "react-icons/ai";
import { MdLogout } from "react-icons/md";

const navProfile = [
  {
    titleEn: "Profile",
    titleAr: "حسابك",
    path: "/profile",
    icon: <AiOutlineUser />,
  },
];

// MdLogout

const Dropdown = ({ lang }) => {
  const [drop, setDrop] = useState(false);
  return (
    <>
      <ul onClick={() => setDrop(!drop)} className="dropdown-main">
        {navProfile.map((item, index) => (
          <li key={index}>
            <Link to={item.path} onClick={() => setDrop(!drop)}>
              {lang === "en" ? (
                <>
                  <span className="flex-center">{item.icon}</span>
                  {item.titleEn}
                </>
              ) : (
                <>
                  <span className="flex-center">{item.icon}</span>
                  {item.titleAr}
                </>
              )}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="/"
            onClick={() => window.localStorage.removeItem("user-livre")}
          >
            <span className="flex-center">
              <MdLogout />
            </span>{" "}
            {lang === "en" ? "Logout" : "تسجيل الخروج"}
          </a>
        </li>
      </ul>
    </>
  );
};

export default Dropdown;
