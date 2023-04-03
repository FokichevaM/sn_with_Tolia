import React from 'react';

import CustomScrollbar from '../common/CustomScrollbar';

import { ReactComponent as CalendarIcon } from '../../assets/svg/calendar.svg';
import { ReactComponent as LocationIcon } from '../../assets/svg/location.svg';
import { ReactComponent as TeamIcon } from '../../assets/svg/team.svg';
import { ReactComponent as InterestsIcon } from '../../assets/svg/interests.svg';

import { events } from './constants';

import './Events.scss';

const Events = () => {
  return (
    <div className="events">
      <CustomScrollbar>
        {events.map((event, idx) => {
          return (
            <div className="event" key={`event-${idx}`}>
              <img className="avatar" src={event.user.photo} />
              <div className="info">
                <div className="description">
                  <div className="user-name">
                    {event.user.name} {event.user.surname}
                  </div>
                  <div className="title">{event.title}</div>
                </div>
                <div className="details">
                  <div className="date">
                    <CalendarIcon />
                    {event.date}
                  </div>
                  <div className="location">
                    <LocationIcon />
                    {event.location}
                  </div>
                  <div className="team">
                    <TeamIcon />
                    {event.team}
                  </div>
                </div>
                <div className="related-interests">
                  <div className="label">
                    <InterestsIcon />
                    Related interests
                  </div>
                  <div>
                    {event.interests[0]}, {event.interests[1]}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </CustomScrollbar>
    </div>
  );
};

export default Events;
