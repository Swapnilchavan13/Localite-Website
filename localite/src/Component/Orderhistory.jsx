import React, { useEffect, useState } from 'react';
import '../styles/order.css'; // Import the CSS file

export const Orderhistory = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const apiUrlAll = 'https://qljsn1wzw2.execute-api.ap-south-1.amazonaws.com/prod/api/order/all';
  const apiUrlPage = 'https://qljsn1wzw2.execute-api.ap-south-1.amazonaws.com/prod/api/order/all';

  // Function to play notification sound
  const playNotificationSound = () => {
    const audio = new Audio('/notification.mp3');
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  };

  // Function to fetch orders for the current page
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrlPage}?page=${currentPage}`);
      const data = await response.json();
      setOrders(data.order);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to check for new orders
  const checkForNewOrders = async () => {
    try {
      const response = await fetch(apiUrlAll);
      const data = await response.json();
      const currentFirstOrderId = data.order.length > 0 ? data.order[0]?._id : null;

      // Get the stored first order ID from localStorage
      const storedFirstOrderId = localStorage.getItem('firstOrderId');

      // If there is a change in the first order ID
      if (storedFirstOrderId && currentFirstOrderId !== storedFirstOrderId) {
        playNotificationSound();
        await fetchOrders(); // Fetch updated orders
      }

      // Update the stored first order ID
      localStorage.setItem('firstOrderId', currentFirstOrderId);
    } catch (error) {
      console.error('Error checking for new orders:', error);
    }
  };

  // Initialize data and start checking for new orders
  useEffect(() => {
    const initializeData = async () => {
      await fetchOrders(); // Fetch initial page data
      await checkForNewOrders(); // Check initial orders
    };

    initializeData();

    const intervalId = setInterval(() => {
      checkForNewOrders(); // Check for new orders every 5 seconds
    }, 5000);

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to generate and copy message template
  const copyMessageTemplate = (order) => {
    const message = `
      Dear Merchant,
      
      Please fulfill the following order:

      Product: ${order?.postDetails?.title ?? 'N/A'}
      Quantity: ${order?.cartItems?.reduce((total, item) => total + item.quantity, 0) ?? 0}
      Total Price: ${order?.price ?? 'N/A'}
      Payment: ${order?.paymentMode ?? 'N/A'}
      
      User Details:
      Name: ${order?.userDetails?.[0]?.userName ?? 'N/A'}
      Address: ${order?.userDetails?.[0]?.address ?? 'N/A'}
      Phone: ${order?.userDetails?.[0]?.phoneNumber ?? 'N/A'}
      
      Thank you!
    `;

    navigator.clipboard.writeText(message)
      .then(() => alert('Message copied to clipboard!'))
      .catch(error => console.error('Error copying message:', error));
  };

  return (
    <div className="order-history-container">
      <h2 className="order-history-title">Order History</h2>
      {loading ? (
        <p className="loading-message">Loading...</p>
      ) : (
        <>
          <table className="order-history-table">
            <thead>
              <tr>
                <th>Product Title</th>
                <th>Product Quantity</th>
                <th>Total Price</th>
                <th>User Name</th>
                <th>User Address</th>
                <th>User Mobile Number</th>
                <th>Brand Name</th>
                <th>Brand Address</th>
                <th>Brand Mobile Number</th>
                <th>Order Date</th>
                <th>Payment Status</th>
                <th>Action</th> {/* Added Action column for Copy Button */}
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order?._id}>
                  <td>{order?.postDetails?.title ?? 'N/A'}</td>
                  <td>{order?.cartItems?.reduce((total, item) => total + item.quantity, 0) ?? 0}</td>
                  <td>{order?.price ?? 'N/A'}</td>
                  <td>{order?.userDetails?.[0]?.userName ?? 'N/A'}</td>
                  <td>{order?.userDetails?.[0]?.address ?? 'N/A'}</td>
                  <td>
                    <a
                      href={`https://wa.me/${order?.userDetails?.[0]?.phoneNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="phone-link"
                    >
                      {order?.userDetails?.[0]?.phoneNumber ?? 'N/A'}
                    </a>
                  </td>
                  <td>{order?.postDetails?.brandName ?? 'N/A'}</td>
                  <td>{order?.postDetails?.merchantDetails?.[0]?.address ?? 'N/A'}</td>
                  <td>
                    <a
                      href={`https://wa.me/${order?.postDetails?.merchantDetails?.[0]?.phoneNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="phone-link"
                    >
                      {order?.postDetails?.merchantDetails?.[0]?.phoneNumber ?? 'N/A'}
                    </a>
                  </td>
                  <td>{new Date(order?.createdAt).toLocaleDateString()}</td>
                  <td>{order?.paymentMode ?? 'N/A'}</td>
                  <td>
                    <button onClick={() => copyMessageTemplate(order)} className="copy-button">
                      Copy Message
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button
              className="pagination-button"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="pagination-info">Page {currentPage} of {totalPages}</span>
            <button
              className="pagination-button"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
      <button onClick={playNotificationSound} className="test-sound-button">
        Test Sound
      </button>
    </div>
  );
};
