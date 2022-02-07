import EventCard from "./EventCard";

export default function EventCards() {
  return (
    <div className="flex justify-center items-center m-6">
      <div className="grid grid-cols-3">
        <EventCard name="Hardlev" description="lorem ipsum so" />
        <EventCard name="Hardlev" description="lorem ipsum so" />
        <EventCard name="Hardlev" description="lorem ipsum so" />
        <EventCard name="Hardlev" description="lorem ipsum so" />
        <EventCard name="Hardlev" description="lorem ipsum so" />
        <EventCard name="Hardlev" description="lorem ipsum so" />
      </div>
    </div>
  );
}
