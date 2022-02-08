import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default function EventCard({ name, description }) {
  return (
    <div className="w-52 h-52 rounded-md bg-slate-200 m-4 break-words flex flex-col justify-between">
      <div className="m-6">
        <div className="text-xl">{name}</div>
        <div className="text-sm">{description}</div>
      </div>
      <div className="flex p-2 justify-start">
        <EditButton/>
        <DeleteButton/>
      </div>
    </div>
  );
}
