import SideNavbar from "./../../components/SideNavbar";
import GeneralInfo from "./GeneralInfo";

export default async function Application() {
  //
  return (
    <div className="flex">
      {/* <div className="ml-35 text-border">Have a nice day {user.firstName}.....</div> */}
      <SideNavbar />
      <GeneralInfo />
    </div>
  );
}
