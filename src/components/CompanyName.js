import React from "react";

const CompanyName = ({jobData}) => {
  return (
    <div className="companyNameSection">
      <div className="companyName">{jobData.company}</div>
      {jobData.new && <div className="new">New</div>}
      {jobData.featured && <div className="featured">Featured</div>}
    </div>
  );
};

export default CompanyName;
