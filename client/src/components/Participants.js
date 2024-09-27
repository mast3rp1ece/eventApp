import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMethod } from "../api/api";
import Pagination from "./Pagination";

const Participants = () => {
  let { id } = useParams();
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [participantsPerPage, setEventsPerPage] = useState(12);
  //   console.log(id);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await getMethod(`/events/${id}`);
        setEvent(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvent();
  }, []);

  const indexOfLastEvent = currentPage * participantsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - participantsPerPage;
  const currentParticipants = event.Participants?.slice(
    indexOfFirstEvent,
    indexOfLastEvent,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="text-white bg-gray-800 min-h-screen">Loading...</div>
    );
  }

  return (
    <div className="bg-gray-800 p-7 min-h-screen flex flex-col">
      <Link
        to="/"
        className="text-white text-xl absolute top-5 left-5 hover:text-gray-500 transition"
      >
        <span className="mr-2">&#8592;</span>Back
      </Link>
      <h1 className="text-white text-4xl mb-5 text-center">
        "{event.title}" participants
      </h1>
      <div className="border border-gray-500 flex flex-col flex-grow">
        <ul className="grid p-5 gap-10 grid-cols-4">
          {currentParticipants?.map((participant) => {
            return (
              <li
                key={participant.id}
                className="flex flex-col border border-gray-500 hover:border-gray-600 transition p-5 text-white gap-5 bg-gray-900"
              >
                <h2 className="text-2xl">{participant.full_name}</h2>
                <h3 className="italic text-gray-300">{participant.email}</h3>
                <p className="font-mono">
                  <span className="mr-2">Birthdate:</span>
                  {new Date(participant.date_of_birth).toLocaleDateString(
                    "en-GB",
                    {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                      timeZone: "Europe/Kiev",
                    },
                  )}
                </p>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto">
          <Pagination
            eventsPerPage={participantsPerPage}
            totalEvents={event.Participants?.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Participants;
