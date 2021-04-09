import React from "react";

const CompanyLogo = ({ logo }) => {
  return (
    <div className="logo">
      <img src={logo} alt="" />
      Logo
    </div>
  );
};

export default CompanyLogo;
