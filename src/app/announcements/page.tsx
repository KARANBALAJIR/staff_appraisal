import { auth, currentUser } from "@clerk/nextjs";
import SideNavbar from "./sidenavbar.js";
export default async function Announcements() {
   

    
    return (
        <div>
            {/* <div className="ml-35 text-border">Have a nice day {user.firstName}.....</div> */}
            <SideNavbar/>
            <h1 className="text-center">Announcements</h1>
        </div>
        
    );
}
