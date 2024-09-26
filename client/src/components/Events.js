import React, { useEffect, useState } from "react";
import { getMethod } from "../api/api";
import { Link } from "react-router-dom";

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
    <div>
      <h1 className="text-white text-4xl mb-5 text-center">Events</h1>
      <ul className="grid border border-gray-500 p-5 gap-10 grid-cols-4">
        {events.map((event) => {
          return (
            <li
              key={event.id}
              className="flex flex-col border border-gray-500 p-3 text-white gap-5 bg-gray-900"
            >
              <h2 className="text-2xl">{event.title}</h2>
              <h3 className="italic text-gray-300">{event.description}</h3>
              <p>Orginized by: "{event.organizer}"</p>
              <p className="font-mono">
                {new Date(event.event_date).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "Europe/Kiev",
                })}
              </p>
              <div className="flex justify-between [&>*]:text-indigo-500 hover:text-indigo-300 [&>*]:transition">
                <Link className="hover:text-indigo-300" to="#">
                  Register
                </Link>
                <Link className="hover:text-indigo-300" to="#">
                  View
                </Link>
              </div>
            </li>
          );
          border;
          p - 3;
        })}
      </ul>
    </div>
  );
};

export default Events;
