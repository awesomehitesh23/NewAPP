import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';

const FavouriteEvents = ({ wishlist }) => {
  return (
    <div>
      <Card className="text-center" style={{
        backgroundColor: 'rgb(31 41 55)',
        color: 'white',
        border: '2px solid #d3d3d3',
        borderRadius: '3em',
        marginBottom: '1em',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
        width: '500px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}>
        <CardBody className="text-center">
          <CardTitle tag="h5">
            <h2>{wishlist.wishlistId}</h2>
          </CardTitle>
          <p> Event ID: {wishlist.eventId}</p>
          <p> User ID: {wishlist.eventId}</p>
          <p> Username: {wishlist.username}</p>
          <p> Event Type: {wishlist.eventType}</p>
          <CardText className="text-center">
            <p>DateTime UTC: {wishlist.datetime_utc}</p>
          </CardText>
          <CardText className="text-center">
            <p>Venue:</p>
            Name:{wishlist.venueName}<br />
            Capacity:{wishlist.venueCapacity}<br />
          </CardText>

          <CardText className="text-center">
            <p>Performers:</p>
            Name:{wishlist.performerName}<br />
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default FavouriteEvents;