import React from "react";
import CompanyInfo from "./CompanyInfo";
import CompanyLogo from "./CompanyLogo";
import CompanyName from "./CompanyName";
import CompanyPosition from "./CompanyPosition";
import Languages from "./Languages";

const Job = ({ jobData }) => {
  const {
    contract,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
  } = jobData;

  const keywords = [role, level, ...languages, ...tools];

  return (
    <div className="jobContainer">
      <CompanyLogo logo={logo} />
      <div className="section1">
        <CompanyName jobData={jobData} />
        <CompanyPosition position={position} />
        <CompanyInfo
          postedAt={postedAt}
          contract={contract}
          location={location}
        />
      </div>
      <Languages keywords={keywords} />
      <div className="section2">
 
      </div>
    </div>
  );
};

export default Job;
