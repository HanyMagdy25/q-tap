import React, { useState } from "react";
// Icons
import { AiOutlineUser } from "react-icons/ai";
import { MdLogout } from "react-icons/md";

// MdLogout

const Dropdown = ({ lang }) => {
  const [drop, setDrop] = useState(false);
  return (
    <>
      <ul onClick={() => setDrop(!drop)} className="dropdown-main">
        <li>
          <a href="https://www.dibiz.com/?a_l=1" onClick={() => setDrop(!drop)}>
            {lang === "en" ? (
              <>
                <span className="flex-center">
                  <AiOutlineUser />
                </span>
                Profile
              </>
            ) : (
              <>
                <span className="flex-center">
                  <AiOutlineUser />
                </span>
                حسابك
              </>
            )}
          </a>
        </li>

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
