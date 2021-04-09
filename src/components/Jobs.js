import React from "react";
import Job from "./Job";

const Jobs = ({ data }) => {
  return (
    <div>
      {data.map((jobData) => 
        <Job jobData={jobData} key={jobData.id} />
      )}
    </div>
  );
};

export default Jobs;
