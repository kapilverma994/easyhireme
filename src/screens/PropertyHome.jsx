import Footer from "../components/Footer";
import ModalCountry from "../components/ModalCountry";
import PagiNation from "../components/PagiNation";
import PropertyCard from "../components/Property/PropertyCard";
import PropertySearchBar from "../components/Property/PropertySearchBar";
import PropertySlider from "../components/Property/PropertySlider";
import TopNavigation from "../components/TopNavigation";
function PropertyHome() {
  return (
    <>
      <TopNavigation />
      <div className="main-content">
        <div className="property">
          {/* Property search bar */}
          <PropertySearchBar />
          {/* <div className="property2">
				<div className="container-fluid">
					<section id="property2-owl-carousel">
                    <PropertyCrousel/>
					</section>
				</div>
			</div> */}
          <PropertySlider />
          <PropertyCard
            img="images/property-img3.jpeg"
            title="Nearby Properties"
          />
          <PropertyCard
            img="images/propertyb-img2.jpg"
            title="Owner Properties for Sale"
          />

          <PagiNation />
          <div className="clr"></div>
        </div>
        {/* <!-- Modal Country--> */}
        <ModalCountry />
        {/* <!-- /Modal Country--> */}
      </div>
      <Footer />
    </>
  );
}

export default PropertyHome;
