import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these OUTDOOR fitness events on campus!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Trail Running with Coach Pax from Restore Human'
              label='Running &Jogging'
              path='/event1'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Restorative Yoga'
              label='Yoga & Meditation'
              path='/event2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Outdoor Hip Hop Flow'
              label='Dance Fitness'
              path='/event3'
            />
            <CardItem
              src='images/img-4.jpg'
              text='OUTDOOR Zumba on Tuesday Nights'
              label='Dance Fitness'
              path='/event4'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Charles River Biking'
              label='Biking'
              path='/event5'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
