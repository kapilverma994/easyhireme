function PropertySearchBar() {
    return (
       <>
       		<div className="container-fluid">
					<div className="property-loc">
						<div className="row">
							<div className="col-md-4">
								<div className="property-loc1">
									<h3>BUY</h3>
									<h3>RENT</h3>
									<h3>SELL</h3>
								</div>
							</div>
							<div className="col-md-8">
								<div className="property-loc2">
									<h3 className="loc2-serch"><span><i className="fa fa-map-marker"></i></span><input type="text" className="form-control" placeholder="Enter Location, Project or Landmark"/></h3>
									<h3 className="loc2-serch1">
										<select className="form-control">
											<option>Property Type</option>
											<option>Property Type 1</option>
											<option>Property Type 2</option>
											<option>Property Type 3</option>
										</select>
									 </h3>
									<h3 className="loc2-serch2">
										<select className="form-control">
											<option>Budget </option>
											<option>Budget 1</option>
											<option>Budget 2</option>
											<option>Budget 3</option>
										</select>
										<span><i className="fa fa-search"></i></span>
									</h3>
									<div className="clr"></div>
								</div>
							</div>
							<div className="col-md-12">
								<div className="property-loc2n">
									<h3>
										<select className="form-control">
											<option>Property Type</option>
											<option>Apartment</option>
											<option>Villa</option>
											<option>Townhouse</option>
											<option>Penthose</option>
											<option>Office</option>
											<option>Shop</option>
											<option>Warehouse</option>
											<option>Labour Camp</option>
										</select>
									</h3>
									<h3>
									<select className="form-control">
											<option>Rent Frequency</option>
											<option>Yearly</option>
											<option>Monthly</option>
											<option>Weekly</option>
											<option>Daily</option>
											<option>Any</option>
										</select>
									</h3>
									<h3>
										<select className="form-control">
											<option>Price</option>
											<option>0</option>
											<option>10000</option>
											<option>20000</option>
											<option>50000</option>
											<option>100000</option>
											<option>2500000</option>
										</select>
									</h3>
									<h3>
										<select className="form-control">
											<option>All</option>
											<option>Studio</option>
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
											<option>6</option>
											<option>7</option>
											<option>8+</option>
										</select>
									</h3>
									<h3>
										<select className="form-control">
											<option>Area (sqft)</option>
											<option>100</option>
											<option>200</option>
											<option>800</option>
											<option>1500</option>
											<option>2000</option>
											<option>3000</option>
										</select>
									</h3>
									<h3>
										<input type="text" className="form-control" placeholder="Agency"/>
									</h3>
								</div>
							</div>
							<div className="clr"></div>
						</div>
					</div>
				<div className="clr"></div>
			</div>
       </>
    )
}

export default PropertySearchBar