import React from 'react'

export default function ModalCountry() {
    return (
     <>
     	<div id="myCunt" className="modal fade" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal">&times;</button>
								<h4 className="modal-title">Select Conuntry</h4>
							</div>
							<div className="modal-body">
								<div className="cunt-flag">
									<div className="container">
										<div className="cunt-flag1">
											<h3><img src="img/india-flag.png" alt="india-flag" /> <span>INDIA</span></h3>
											<h3><img src="img/UAE-flag.png" alt="UAE-flag" /> <span>UAE</span></h3>
											<h3><img src="img/USA-flag.png" alt="USA-flag" /> <span>US</span></h3>
											<h3><img src="img/UK-flag.png" alt="UK-flag" /> <span>UK</span></h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
     </>
    )
}
