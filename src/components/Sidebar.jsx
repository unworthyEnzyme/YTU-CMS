import Pic from "./Pic";
import SidebarMenu from "./SidebarMenu";
import UserInfo from "./UserInfo";

export default function Sidebar() {
  return (
    <div className="h-full w-1/4 bg-slate-700 text-lg">
      <Pic />
      <UserInfo />
      <SidebarMenu />
    </div>
  );
}
