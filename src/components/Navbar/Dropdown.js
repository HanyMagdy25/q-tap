import React, { useState } from "react";
// Icons
import { AiOutlineUser } from "react-icons/ai";
import { MdLogout } from "react-icons/md";

// MdLogout
// const url_main = 'https://qtap-dashboard.qutap.co'
const Dropdown = ({ lang }) => {
  const [drop, setDrop] = useState(false);
  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   // const blog = {
  //   //   password,
  //   //   email,
  //   // };
  //   fetch(`${url_main}/api/logout`, {
  //     method: "POST",
  //     // credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //       lang: "en",
  //     },
  //     // body: JSON.stringify(blog),
  //   })
  //     .then((data) => data.json())
  //     .then((res) => {
    

  //       console.log("res", res);
  //       if (res.status === true) {
  //         // setUserTokenQTap(res.user)
        
  //         localStorage.removeItem("token-q-tap");
  //         window.location.href = "/";
  //       }
  //     })
  //     .catch((error) => alert(error));
  // };
  return (
    <>
      <ul onClick={() => setDrop(!drop)} className="dropdown-main">
        <li>
          <a href="/dashboard/main" onClick={() => setDrop(!drop)}>
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
            onClick={() => window.localStorage.removeItem("token-q-tap")}
            // onClick={handleLogout}
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
