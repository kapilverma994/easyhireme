import React from 'react'

import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Pagination from '../components/PagiNation'

import SearchCompany from '../components/SearchCompany'
import TopNavigation from '../components/TopNavigation'

function Home() {
    return (
<>
<TopNavigation/>    
<Banner/>
<SearchCompany/>
<h1 className="text-center servicetitle">Apply Jobs</h1>
         
<div className="bottom"></div>
<Card/>
<Pagination/>
<Footer/>
</>
    )
}

export default Home
