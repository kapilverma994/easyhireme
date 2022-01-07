import React from "react";
import Footer from "../components/Footer";
import Header from "../components/TopNavigation";
import MembershipCard from "../components/MembershipCard";

export default function Membership() {
  return (
    <>
      <Header />
      <div className="main-content">
        <MembershipCard />
        <MembershipCard />
        <MembershipCard />
      </div>

      <Footer />
    </>
  );
}
