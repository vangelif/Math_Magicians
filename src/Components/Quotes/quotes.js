import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './quotes.css';

const Quotes = ({ category }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const API_URL = 'https://api.api-ninjas.com/v1/quotes?category=';
  const token = 'T1Y9s/5FzZtrHk7QSF4JIQ==7Ld1PDV8j8SRMOxG';
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}${category}`, {
          headers: {
            'X-Api-Key': token,
            'Content-Type': 'application/json',
          },
        });
        const jsonResponse = await response.json();
        setData(jsonResponse);
        setLoading(false);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, [setData]);

  return (
    <div key="quotes" className="quote-wrapper">
      {data.map((item) => (
        <>
          <h2 key={item.author}>{item.author}</h2>
          <p key={Math.trunc(Math.random * 10000)}>{item.quote}</p>
          <p className="loading">{loading ? 'Loading....' : ''}</p>
          <p className="error">{error ? 'Houston we have a problem...' : ''}</p>
        </>
      ))}
    </div>
  );
};
Quotes.propTypes = {
  category: PropTypes.string.isRequired,
};
export default Quotes;
