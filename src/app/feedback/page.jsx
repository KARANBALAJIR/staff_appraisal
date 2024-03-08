import { auth, currentUser } from "@clerk/nextjs";
import SideNavbar from "./../../components/SideNavbar";
export default async function Feedback() {
   

    
    return (
        
        <div className="flex">
            {/* <div className="ml-35 text-border">Have a nice day {user.firstName}.....</div> */}
            <SideNavbar/>
            <h1 className="text-center">Feedback</h1>
        </div>
        
    );
}
