import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Quotes = ({ category }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        {
          headers: {
            'X-Api-Key': 'T1Y9s/5FzZtrHk7QSF4JIQ==7Ld1PDV8j8SRMOxG',
            'Content-Type': 'application/json',
          },
        }
      );
      const jsonResponse = await response.json();
      setData(jsonResponse);
      console.log(jsonResponse);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <>
          <h2>{item.author}</h2>
          <p>{item.quote}</p>
        </>
      ))}
    </div>
  );
};
Quotes.propTypes = {
  category: PropTypes.string.isRequired,
};
export default Quotes;
