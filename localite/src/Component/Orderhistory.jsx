import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import '../styles/order.css'; // Import the CSS file

export const Orderhistory = () => {
  const [orders, setOrders] = useState([]);
  const [brands, setBrands] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const apiUrlAll = 'https://hc29cfp8vj.execute-api.ap-south-1.amazonaws.com/prod/api/order/all';
  const apiUrlPage = 'https://hc29cfp8vj.execute-api.ap-south-1.amazonaws.com/prod/api/order/all';
  const apiUrlBrands = 'https://hc29cfp8vj.execute-api.ap-south-1.amazonaws.com/prod/api/brand/all';

  const playNotificationSound = () => {
    const audio = new Audio('/notification.mp3');
    audio.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
  };

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

  const fetchBrands = async () => {
    try {
      // Create an array of fetch promises for pages 1 to 14
      const fetchPromises = [];
      for (let page = 1; page <= 14; page++) {
        fetchPromises.push(fetch(`${apiUrlBrands}?page=${page}`));
      }
  
      // Await all fetch promises
      const responses = await Promise.all(fetchPromises);
  
      // Convert all responses to JSON
      const allData = await Promise.all(responses.map((res) => res.json()));
  
      // Combine all brand data
      const allBrands = allData.flatMap((data) => data.brands || []); // Combine all brands from all pages
  
      // Map brand details by brandId
      const brandMap = allBrands.reduce((acc, brand) => {
        acc[brand.brandId] = {
          phone: brand.phone || 'N/A',
          address: brand.address || 'N/A',
        };
        return acc;
      }, {});
  
      setBrands(brandMap);
    } catch (error) {
      console.error('Error fetching all brands:', error);
    }
  };

  const sendEmailNotification = (order) => {
    const templateParams = {
      product_title: order?.postDetails?.title ?? 'N/A',
      product_quantity: order?.cartItems?.reduce((total, item) => total + item.quantity, 0) ?? 0,
      total_price: order?.price ?? 'N/A',
      user_name: order?.userDetails?.[0]?.userName ?? 'N/A',
      user_address: order?.userDetails?.[0]?.address ?? 'N/A',
      user_phone: order?.userDetails?.[0]?.phoneNumber ?? 'N/A',
      brand_name: order?.postDetails?.brandName ?? 'N/A',
      brand_address: brands[order?.postDetails?.brandId]?.address ?? 'N/A',
      brand_phone: brands[order?.postDetails?.brandId]?.phone ?? 'N/A',
      order_date: new Date(order?.createdAt).toLocaleDateString(),
      payment_status: order?.paymentMode ?? 'N/A',
    };

    emailjs
      .send('service_qd6wjis', 'template_38jnodk', templateParams, 'qAkPR5RhKGseM24tp')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
        },
        (error) => {
          console.error('Error sending email:', error.text);
        }
      );
  };

  const checkForNewOrders = async () => {
    try {
      const response = await fetch(apiUrlAll);
      const data = await response.json();
      const currentFirstOrderId = data.order.length > 0 ? data.order[0]?._id : null;

      const storedFirstOrderId = localStorage.getItem('firstOrderId');

      if (storedFirstOrderId && currentFirstOrderId !== storedFirstOrderId) {
        playNotificationSound();
        await fetchOrders();

        // Send email notification for the new order
        if (data.order.length > 0) {
          sendEmailNotification(data.order[0]); // Send email for the first (newest) order
        }
      }

      localStorage.setItem('firstOrderId', currentFirstOrderId);
    } catch (error) {
      console.error('Error checking for new orders:', error);
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      await fetchBrands();
      await fetchOrders();
      await checkForNewOrders();
    };

    initializeData();

    const intervalId = setInterval(() => {
      checkForNewOrders();
    }, 5000);

    return () => clearInterval(intervalId);
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
  {orders.map((order) => {
    // Check if the order date is today's date
    const isToday = new Date(order?.createdAt).toDateString() === new Date().toDateString();

    return (
      <tr
        key={order?._id}
        style={{
          backgroundColor: isToday ? 'green' : 'transparent', // Green background for today's orders
          color: isToday ? 'white' : 'inherit', // Optional: Make text white for contrast
        }}
      >
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
        <td>{brands[order?.postDetails?.brandId]?.address ?? 'N/A'}</td>
        <td>
          <a
            href={`https://wa.me/${brands[order?.postDetails?.brandId]?.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="phone-link"
          >
            {brands[order?.postDetails?.brandId]?.phone ?? 'N/A'}
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
    );
  })}
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
        Test Notification Sound
      </button>
    </div>
  );
};
