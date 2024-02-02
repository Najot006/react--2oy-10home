import React from "react";
import {
  useGetHederQuery,
  useGetImageQuery,
  useGetNavbarQuery,
} from "./NavbarSlice";
import "../Navbar/Navbar.css";
import Main from "../Main/Main";

export default function Navbar() {
  const { data: navbar } = useGetNavbarQuery();
  console.log(navbar, "navbars");
  const { data: heder } = useGetHederQuery();
  console.log(heder, "heder");
  const { data: image } = useGetImageQuery();
  console.log(image, "image");
  return (
    <div className="navbar">
      <div>
        {navbar?.map((item, index) => {
          return (
            <header key={index}>
              <div className="navbar_boshi">
                <h1 className="titel_1">{item.title_1}</h1>
                <div className="nav_link">
                  <h3>{item.title_2}</h3>
                  <h3>{item.title_3}</h3>
                  <h3>{item.title_4}</h3>
                  <button className="nav_btn">{item.title_5}</button>
                </div>
              </div>
            </header>
          );
        })}

     <div className="flex">
     {heder?.map((item, index) => {
          return (
            <nav key={index}>
              <div className="heder_item">
                <div className="heder_body">
                  <h1 className="title_6">{item.title_6}</h1>
                  <h1 className="title_7">{item.title_7}</h1>
                  <button className="btn_text">{item.btn_text}</button>
                  <div className="btn_clas">
                    <div>
                      <h3>{item.nt_num1}</h3>
                      <h3>{item.nt_text1}</h3>
                    </div>
                    <div>
                      <h3>{item.nt_num2}</h3>
                      <h3>{item.nt_text2}</h3>
                    </div>
                    <div>
                      <h3>{item.nt_num1}</h3>
                      <h3>{item.nt_text3}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          );
        })}
          {image?.map((item, index) => {
        return (
          <div key={index}>
            <div className="main_bosh">
              <img className="img_1" src={item.img_1} alt="" />
              <div className="hello">
                <h3>Space Walking</h3>
                <div className="asus">
                  <img className="achki" src={item.img_2} alt="" />
                  <h5 className="asil">Asilbek</h5>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
     </div>
      <Main/>
    </div>
  );
}
