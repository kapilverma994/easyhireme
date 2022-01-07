import {
    Home,
    About,
    HotelHome,
    Membership,
    PropertyHome,
    RegisterCompany,
    MachineryHome,
    FreeLancerHome,
    JobSeekerHome,
    JobProviderHome,
    HireMaintainceHome,
    HomeService,
    PropertyDetail,
    HotelProfilePage,
    FreelancerHire,
    JobSeekerProfile,
    MachineryStore,
    CompanyPostJob,
    JobProviderDetail,
    PropertyProfile ,
    PrivacyPolicy,
    
   
} from '../screens';

import  Applyjob1  from '../screens/PostJobs/Applyjob1';
import  Applyjob2  from '../screens/PostJobs/Applyjob2';
import  Applyjob3  from '../screens/PostJobs/Applyjob3';
import  Applyjob4  from '../screens/PostJobs/Applyjob4';
import  Applyjob5  from '../screens/PostJobs/Applyjob5';
import  Applyjob6  from '../screens/PostJobs/Applyjob6';
import  Applyjob7  from '../screens/PostJobs/Applyjob7';

import Login from '../screens/User/Login';
import Mangeprofile from '../screens/User/Mangeprofile';
import Myorder from '../screens/User/Myorder';
import Activeorder from '../screens/User/Activeorder';
import Myaddress from '../screens/User/Myaddress';
import Acceptorder from '../screens/User/Acceptorder';
import Completeorder from '../screens/User/Completeorder';
import Totalorder from '../screens/User/Totalorder';
import Property from '../screens/User/Property';
import Machinery from '../screens/User/Machinery';
import Freelancer from '../screens/User/Freelancer';
import Jobseeker from '../screens/User/Jobseeker';
import Applyjob from '../screens/User/Applyjob';
import Maintenance from '../screens/User/Maintenance';
import Userhomeservice from '../screens/User/Userhomeservice';



const routeKey = [
    {
        route: '/',
        component: Home,
        shouldAuthenticate: false,
    },
    // {
    //     route: '/login',
    //     component: Login,
    //     shouldAuthenticate: false,
    // },
    {
        route: '/about',
        component: About,
        shouldAuthenticate: false,
    },
    {
        route: '/register-company',
        component: RegisterCompany,
        shouldAuthenticate: false,
    },
    {
        route: '/membership',
        component: Membership,
        shouldAuthenticate: false,
    },
    {
        route: '/hotel-booking-home',
        component: HotelHome,
        shouldAuthenticate: false,
    },
    {
        route: '/property',
        component: PropertyHome,
        shouldAuthenticate: false,
    },
    {
        route: '/machinery-home',
        component: MachineryHome,
        shouldAuthenticate: false,
    },
    {
        route: '/Freelancer-Home',
        component: FreeLancerHome,
        shouldAuthenticate: false,
    },
    {
        route: '/jobseeker-Home',
        component: JobSeekerHome,
        shouldAuthenticate: false,
    },
    {
        route: '/job-provider',
        component: JobProviderHome,
        shouldAuthenticate: false,
    },
    {
        route: '/maintaince-home',
        component: HireMaintainceHome,
        shouldAuthenticate: false,
    },
    {
        route: '/home-service',
        component: HomeService,
        shouldAuthenticate: false,
    },
    {
        route: '/property-detail',
        component: PropertyDetail,
        shouldAuthenticate: false,
    },
    {
        route: '/hotel-profile',
        component: HotelProfilePage,
        shouldAuthenticate: false,
    },
    {
        route: '/hire-freelancer',
        component: FreelancerHire,
        shouldAuthenticate: false,
    },
    {
        route: '/job-seeker-profile',
        component: JobSeekerProfile,
        shouldAuthenticate: false,
    },
    {
        route: '/machinery-store',
        component: MachineryStore,
        shouldAuthenticate: false,
    },
    {
        route: '/post-jobs',
        component: CompanyPostJob,
        shouldAuthenticate: false,
    },
    {
        route: '/apply-job1',
        component: Applyjob1,
        shouldAuthenticate: false,
    },
    {
        route: '/apply-job2',
        component: Applyjob2,
        shouldAuthenticate: false,
    },
    {
        route: '/apply-job3',
        component: Applyjob3,
        shouldAuthenticate: false,
    },
    {
        route: '/apply-job4',
        component: Applyjob4,
        shouldAuthenticate: false,
    },
    {
        route: '/apply-job5',
        component: Applyjob5,
        shouldAuthenticate: false,
    },
    {
        route: '/apply-job6',
        component: Applyjob6,
        shouldAuthenticate: false,
    },
    {
        route: '/apply-job7',
        component: Applyjob7,
        shouldAuthenticate: false,
    },
    {
        route: '/job-provider-profile',
        component: JobProviderDetail,
        shouldAuthenticate: false,
    },
    {
        route: '/property-profile',
        component: PropertyProfile,
        shouldAuthenticate: false,
    },
    {
        route: '/login',
        component: Login,
        shouldAuthenticate: false,
    },
    {
        route: '/manage-profile',
        component: Mangeprofile,
        shouldAuthenticate: false,
    },
    {
        route: '/my-order',
        component: Myorder,
        shouldAuthenticate: false,
    },
    {
        route: '/active-order',
        component: Activeorder,
        shouldAuthenticate: false,
    },
    {
        route: '/my-address',
        component: Myaddress,
        shouldAuthenticate: false,
    },
    {
        route: '/accept-order',
        component: Acceptorder,
        shouldAuthenticate: false,
    },
    {
        route: '/complete-order',
        component: Completeorder,
        shouldAuthenticate: false,
    },
    {
        route: '/total-order',
        component: Totalorder,
        shouldAuthenticate: false,
    },
    {
        route: '/user-property',
        component: Property,
        shouldAuthenticate: false,
    },
    {
        route: '/user-machinery',
        component: Machinery,
        shouldAuthenticate: false,
    },
    {
        route: '/user-freelancer',
        component: Freelancer,
        shouldAuthenticate: false,
    },
    {
        route: '/user-jobseeker',
        component: Jobseeker,
        shouldAuthenticate: false,
    },
    {
        route: '/user-apply-job',
        component: Applyjob,
        shouldAuthenticate: false,
    },
    {
        route: '/user-maintenance',
        component: Maintenance,
        shouldAuthenticate: false,
    },
    {
        route: '/user-home-service',
        component: Userhomeservice,
        shouldAuthenticate: false,
    },
    {
        route: '/privacy-policy',
        component: PrivacyPolicy,
        shouldAuthenticate: false,
    }
]

export default routeKey;