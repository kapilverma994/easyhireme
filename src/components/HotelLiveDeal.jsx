function HotelLiveDeal() {
    return (
        <div class="hotel-bk-live">
        <div class="container-fluid">
            <div class="hotel-bk-live1">
                <h3>LIVE DEALS<small>(123)</small></h3>
            </div>
            <div class="hotel-bk-live2">
                <div class="row">
                    <div class="col-md-1">
                        <p class="hotel-loc-search"><i class="fa fa-map-marker" aria-hidden="true"></i> <span>New Delhi</span></p>
                    </div>
                    <div class="col-md-11">
                        <div class="hotel-loc-search1">
                            <p class="loc-search1n loc-cate">CAGEGORIES:</p>
                            <p class="loc-search1n loc-hotel">Hotel</p>
                            <p class="loc-search1n loc-flight">Flight</p>
                            <p class="loc-search1n loc-cate">BOOKING DATES:</p>
                            <p class="loc-search1n loc-hotel">Mar</p>
                            <p class="loc-search1n loc-hotel">Apr</p>
                            <p class="loc-search1n loc-hotel">May</p>
                            <p class="loc-search1n loc-hotel">Jun</p>
                            <p class="loc-search1n loc-hotel">Jul</p>
                            <p class="loc-search1n loc-hotel">Aug</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- select hotel facilities--> */}
            <div class="hotel-bk-livn1">
                <ul class="hotel-bk-livn2">
                    <li class="select-hotel">Seclect Hotel Facilities : </li>
                    <li><input type="checkbox" value=""/> Free Wi-fi</li>
                    <li><input type="checkbox" value=""/> Caretaker</li>
                    <li><input type="checkbox" value=""/> 24Hour Reception Desk</li>
                    <li><input type="checkbox" value=""/> Electronic security key card system</li>
                    <li><input type="checkbox" value=""/> Emergency </li>
                    <li><input type="checkbox" value=""/> Doctor on Call</li>
                    <li><input type="checkbox" value=""/> Iron and Ironing board</li>
                    <li><input type="checkbox" value=""/> Electronic smoke detertor</li>
                    <li><input type="checkbox" value=""/> Bathroom</li>
                    <li><input type="checkbox" value=""/> TV with Cable chanels</li>
                    <li><input type="checkbox" value=""/> cctv</li>
                    <li><input type="checkbox" value=""/> Laundry service</li>
                    <li><input type="checkbox" value=""/> Daily housdeeping and turn-down</li>
                    <li><input type="checkbox" value=""/> Elevator</li>
                    <li><input type="checkbox" value=""/> Air Conditioning</li>
                    <li><input type="checkbox" value=""/> Room Service</li>
                </ul>
                <div class="hotel-bk-livn3">
                    <button type="button" >GO</button>
                </div>
                <div class="clr"></div>
            </div>
            {/* <!-- /select hotel facilities--> */}
        </div>
    </div>
    )
}

export default HotelLiveDeal