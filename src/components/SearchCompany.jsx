import React from 'react'

export default function SearchCompany() {
    return (
        <div>
            <>
            <div className="search-company">
			<div className="search-company1">
				<div className="search-company-select">
					<div className="form-group">
					  <select className="form-control">
						<option>Select Category</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
					  </select>
					</div>
				</div>
				<div className="search-company-input">
					<input type="text" className="com-input" placeholder=" Location, Company" /><i className="fa fa-search"></i>
				</div>
				<div className="search-company-icon">
					<i className="fa fa-search"></i>
				</div>
				<div className="clr"></div>
			</div>
		</div>
            </>
        </div>
    )
}
