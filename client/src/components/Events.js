import React, { useEffect, useState } from "react";
import { getMethod } from "../api/api";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await getMethod("/events");
        setEvents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    console.log("Events:", events);
  }, [events]);

  return (
    <div className="grid border border-gray-500 p-5 gap-10 grid-cols-5">
      {events.map((event) => {
        return (
          <div
            key={event.id}
            className="flex flex-col border border-gray-500 p-3 text-white gap-5"
          >
            <h2 className="text-2xl">{event.title}</h2>
            <h3 className="italic text-gray-300">{event.description}</h3>
            <p>Orginized by: "{event.organizer}"</p>
            <p>
              {new Date(event.event_date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "Europe/Kiev",
              })}
            </p>
          </div>
        );
        border;
        p - 3;
      })}
    </div>
  );
};

export default Events;
