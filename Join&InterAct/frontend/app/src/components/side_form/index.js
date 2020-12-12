import React, { useState, useEffect } from 'react';

function SideForm({ onSubmit }) {

  const [interests, setInterests] = useState([]);
  const [interest, setInterest] = useState('');
  const [activity, setActivity] = useState('');
  const [description, setDescription] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);

        const lng = Math.floor(Math.random() * (1 + 180 - (-180))) - 180;
        const lat = Math.floor(Math.random() * (1 + 90 - (-90))) - 90;
        setLongitude(lng);
        setLatitude(lat);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      interest,
      activity,
      description
    });

    setInterest('');
    setActivity('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="interest"
        >Add interest</label>
        <input
          name="interest"
          id="interest"
          required
          placeholder="What you like?"
          value={interest}
          onChange={e => setInterest(e.target.value)}
        />
      </div>

      <div className="input-block">
        <input
          name="activity"
          id="activity"
          required
          placeholder="What are you doing?"
          value={activity}
          onChange={e => setActivity(e.target.value)}
        />
        <label htmlFor="activity"
        >Add activity</label>
      </div>

      <div className="input-block">
        <input
          name="desc"
          id="desc-side-form"
          placeholder="Some cool description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <label htmlFor="description"
        >Add description</label>
      </div>

      <div className="input-group">
        <div className="input-block">
          <input
            type="float"
            name="latitude"
            id="latitude"
            required
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
          />
          <label htmlFor="latitude">Latitude</label>
        </div>

        <div className="input-block">
          <input
            type="float"
            name="longitude"
            id="longitude"
            required
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
          />
          <label htmlFor="longitude">Longitude</label>
        </div>
      </div>

      <button type="submit">Send</button>

    </form>
  )

}

export default SideForm;