import React, { useState, useEffect } from 'react';

function SideForm({ onSubmit }) {

  const [interests, setInterests] = useState([]);
  const [interest, setInterest] = useState("");
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");

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

    setInterest("");
    setActivity("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="What you like?">Add interest</label>
        <input
          name="interest"
          id="interest-side-form"
          required
          placeholder="What you like?"
          value={interest}
          onChange={e => setInterest}
        />
      </div>

      <div className="input-block">
        <label htmlFor="What are yoou doing?">Add activity</label>
        <input
          name="activity"
          id="activity-side-form"
          required
          placeholder="What are you doing?"
          value={activity}
          onChange={e => setActivity}
        />
      </div>

      <div className="input-block">
        <label htmlFor="Say something about you">Add description</label>
        <input
          name="desc"
          id="desc-side-form"
          placeholder="Say something about you"
          value={description}
          onChange={e => setDescription}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="float"
            name="latitude"
            id="latitude"
            required
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="float"
            name="longitude"
            id="longitude"
            required
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
          />
        </div>
      </div>

      <button type="submit">Send</button>

    </form>
  )

}

export default SideForm;