import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './result.css';

const result = () => {
  // Sample data for multiple itineraries
  const itineraries = [
    {
      title: 'Plan 1',
      places: [
        { id: 1, name: 'Place 1', image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-10/11/full/1696998619-2089.jpg?im=FeatureCrop,size=(826,465)', price: 'Free', timeSpent: '1-2 hours' },
        { id: 2, name: 'Place 2', image: 'place2.jpg', price: 'Rs. 50', timeSpent: '2-3 hours' },
        { id: 3, name: 'Place 3', image: 'place3.jpg', price: 'Rs. 100', timeSpent: '3-4 hours' },
        // Add more places
      ]
    },
    {
      title: 'Plan 2',
      places: [
        { id: 4, name: 'Place 4', image: 'place4.jpg', price: 'Rs. 75', timeSpent: '2-3 hours' },
        { id: 5, name: 'Place 5', image: 'place5.jpg', price: 'Rs. 120', timeSpent: '3-4 hours' },
        { id: 6, name: 'Place 6', image: 'place6.jpg', price: 'Free', timeSpent: '1-2 hours' },
        // Add more places
      ]
    },
    // Add more itineraries
  ];

  // Customize carousel responsive settings
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="itinerary-slider">
      {itineraries.map((itinerary, index) => (
        <div key={index} className="itinerary">
          <h7>{itinerary.title}</h7>
          <Carousel
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={false}
            arrows={true}
            draggable={true}
            swipeable={true}
          >
            {itinerary.places.map(place => (
              <div key={place.id} className="place">
                <div className="destination-item">
                  <img src={place.image} alt={place.name} />
                  <div className="destination-details">
                    <h3>{place.name}</h3>
                    <p>Price: <span className="price">{place.price}</span></p>
                    <p>Time spent: <span className="price">{place.timeSpent}</span></p>
                    
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default result;


