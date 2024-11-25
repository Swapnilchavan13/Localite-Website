import React, { useState, useEffect } from 'react';
import '../styles/event.css'; // Import the CSS file

export const EventTable = () => {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(10); // Set the number of events per page
  const [totalEvents, setTotalEvents] = useState(0); // Total number of events

  const fetchData = async (page) => {
    try {
      const response = await fetch(`https://qljsn1wzw2.execute-api.ap-south-1.amazonaws.com/prod/api/feature/event?page=${currentPage}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setEvents(data.event || []);
      setCategories(data.categories || []);
      setTotalEvents(data.total || 0); // Assuming the API returns total events
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage); // Fetch data whenever the current page changes
  }, [currentPage]);

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalEvents / eventsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="event-table-container">
      <h2>Event List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Organizer</th>
            <th>Date(s)</th>
            <th>Tickets</th>
            <th>User Bookings (User IDs and Tickets)</th>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 ? (
            events.map(event => (
              <tr key={event._id}>
                <td data-label="Name">{event.name || 'N/A'}</td>
                <td data-label="Location">
                  {`${event.city || 'N/A'}, ${event.state || 'N/A'}, ${event.area || 'N/A'}`}
                </td>
                <td data-label="Organizer">{event.eventOrganiserName || 'N/A'}</td>
                <td data-label="Date(s)">
  {event.eventDate && event.eventDate.length > 0 ? (
    event.eventDate.map((dateItem, idx) => (
      <div key={idx}>
        {dateItem.date ? new Date(dateItem.date).toLocaleDateString() : 'N/A'}
      </div>
    ))
  ) : (
    <span>N/A</span>
  )}
</td>

<td data-label="Tickets">
  {event.eventDate && event.eventDate.length > 0 ? (
    event.eventDate.map((dateItem, idx) => (
      <div key={idx}>
        {dateItem.tickets && dateItem.tickets.length > 0 ? (
          dateItem.tickets.map(ticket => (
            <div key={ticket._id}>
              {ticket.ticketName || ticket.ticketType || 'N/A'}: ₹{ticket.ticketPrice !== undefined ? ticket.ticketPrice : 'N/A'} 
              {ticket.ticketDescription && `- ${ticket.ticketDescription}`}
            </div>
          ))
        ) : (
          <span>No tickets available for this date</span>
        )}
      </div>
    ))
  ) : (
    <span>No tickets available</span>
  )}
</td>

                <td data-label="User Bookings">
                  {event.orders && event.orders.length > 0 ? (
                    event.orders.map((order, idx) => (
                      <div key={idx}>
                        <div>User ID: {order.emailID || 'N/A'}</div>
                        <div>Event Date: {order.eventDate || 'N/A'}</div>
                        {order.ticketItems && order.ticketItems.length > 0 ? (
                          order.ticketItems.map((ticketItem, ticketIdx) => (
                            <div key={ticketIdx}>
                              {ticketItem.ticketName || 'N/A'}: Count: {ticketItem.count || 0}, Price: ₹{ticketItem.price || 0}
                            </div>
                          ))
                        ) : (
                          <span>No tickets booked</span>
                        )}
                      </div>
                    ))
                  ) : (
                    <span>N/A</span>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Events Available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};
