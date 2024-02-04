import React, { useEffect, useState} from 'react';
import Navbars from '../../layouts/Navbars';
import backgroundImage from './../../assets/favouritevents.png'
import axios from 'axios';
import FooterPage from '../../pages/footer/FooterPage';
import {Card} from 'react-bootstrap';
import FavouriteEvents from './FavouriteEvents';



const Wishlist = () =>{
    const [error, setError] = useState(" ")
    const [wishlists, setWishlist] = useState([]);
    useEffect(() => {
      document.title = 'Events';
    }, []);
  
    const eventId = 1557;
    const userId =1;
    const token = localStorage.getItem('token');
    useEffect(() => {
      axios.get(`http://localhost:8088/wishlist/viewFavourite/${eventId}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(response => {
        if (response.data.status === 200 && Array.isArray(response.data.responseObj)) {
          setWishlist(response.data); // Wrap the single wishlist item in an array
        } else {
          setError(response.data.message); // Update error message
        }
      }).catch(error => {
        console.error('Error fetching event data:', error);
        setError('Error fetching event data');
      });
    }, []);
  
   
   
     
   
    return (
      <div>
          <Navbars />
          <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        padding: '20px',
      }}
      >
         <div>
          <Card>

          
          {wishlists.length > 0 ? (
  wishlists.map((wishlist) => (
    <div key={wishlist.wishlistId}>
      <FavouriteEvents wishlist={wishlist} /> {/* Correct prop name: wishlist instead of wishlists */}
    </div>
  ))
) : (
  <p>No Events</p>
)}
            </Card>
        </div>
      
      </div>
      <FooterPage/>
      </div>
    );
}

export default Wishlist;

