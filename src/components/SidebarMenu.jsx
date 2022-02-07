import { Link } from "react-router-dom";

export default function SidebarMenu() {
  return (
    <div className="flex flex-col gap-4 justify-around items-center text-white mt-40">
      <Link to="/evraklar">
        <div className="hover:cursor-pointer hover:text-slate-400">
          Evraklar
        </div>
      </Link>
      <Link to="/etkinlikler">
        <div className="hover:cursor-pointer hover:text-slate-400">
          Etkinlikler
        </div>
      </Link>
      <Link to="profili-duzenle">
        <div className="hover:cursor-pointer hover:text-slate-400">
          Profili Duzenle
        </div>
      </Link>
      {/* <div>Klup Profili Duzenler</div> */}
      <button className="text-red-300 hover:text-red-500">Cikis Yap</button>
    </div>
  );
}
