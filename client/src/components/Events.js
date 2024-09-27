import React, { useEffect, useState } from "react";
import { getMethod } from "../api/api";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage, setEventsPerPage] = useState(8);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await getMethod("/events");
        setEvents(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
  }, []);

  // useEffect(() => {
  //   console.log("Events:", events);
  // }, [events]);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="text-white bg-gray-800 min-h-screen">Loading...</div>
    );
  }

  return (
    <div className="bg-gray-800 p-7 min-h-screen flex flex-col">
      <h1 className="text-white text-4xl mb-5 text-center">Events</h1>
      <div className="border border-gray-500 flex flex-col flex-grow">
        <ul className="grid p-5 gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {currentEvents.map((event) => {
            return (
              <li
                key={event.id}
                className="flex flex-col border border-gray-500 hover:border-gray-600 transition p-5 text-white gap-5 bg-gray-900"
              >
                <h2 className="text-2xl">{event.title}</h2>
                <h3 className="italic text-gray-300">{event.description}</h3>
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
                <p className="mb-10">Organized by: "{event.organizer}"</p>
                <div className="flex justify-between [&>*]:text-indigo-500 hover:text-indigo-300 [&>*]:transition mt-auto">
                  <Link
                    className="hover:text-indigo-300"
                    to={`${event.id}/register`}
                  >
                    Register
                  </Link>
                  <Link
                    className="hover:text-indigo-300"
                    to={`${event.id}/participants`}
                  >
                    View
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto">
          <Pagination
            postsPerPage={eventsPerPage}
            totalPosts={events.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
