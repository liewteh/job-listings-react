import React from 'react'

const CompanyInfo = ({postedAt, contract, location}) => {
    return (
       <div className="detail">
          <span>{postedAt}</span>
          <span>{contract}</span>
          <span>{location}</span>
        </div>
    )
}

export default CompanyInfo
