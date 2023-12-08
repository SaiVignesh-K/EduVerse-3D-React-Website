import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';

const Teleporter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ visible , setVisible ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        const apiUrl = `https://eduverse-backend-btma.onrender.com/api/search`;
        setLoading(true);

        try {
          const response = await axios.post(apiUrl, { term: searchTerm });
          const responseData = response.data;
          console.log(responseData);
          setResults(responseData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      } else {
        setResults([]);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
        <img
          src="https://cdn-icons-png.flaticon.com/512/815/815304.png"
          className="teleicon"
          style={{ zIndex: '99999999999999999999999999999999999999999' }}
          onClick={() => {
            if (visible) { 
              setVisible(false);
              document.querySelector(".teleporter").style.visibility = "collapse";
            }
            else {
              setVisible(true);
              document.querySelector(".teleporter").style.visibility = "visible";}
          }}
        />

      <div className="teleporter" style={{ zIndex: '9999999999999999999999999999999'}}>
        <input
          type="text"
          placeholder="🔎 Search"
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px',
            width: '100%',
            height: '40px',
            borderRadius: '5px',
            border: 'none',
          }}
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <center>
          <div className="telebutton" onClick={() => setSearchTerm("biology")}>
            <center>
              <img
                src="https://www.shareicon.net/data/512x512/2016/08/18/810713_science_512x512.png"
                height={40}
                width={40}
              />
              <p className="telebutton-p"> Biology </p>
            </center>
          </div>

          <div className="telebutton" onClick={() => setSearchTerm("physics")}>
            <center>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Circle-icons-physics-logo.svg/1200px-Circle-icons-physics-logo.svg.png"
                height={40}
                width={40}
              />
              <p className="telebutton-p"> Physics </p>
            </center>
          </div>

          <div className="telebutton" onClick={() => setSearchTerm("chemistry")}>
            <center>
              <img
                src="https://static-00.iconduck.com/assets.00/physics-icon-2048x2048-zm0gu5w8.png"
                height={40}
                width={40}
              />
              <p className="telebutton-p"> Chemistry </p>
            </center>
          </div>

          <div className="telebutton" onClick={() => setSearchTerm("astronomy")}>
            <center>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2072/2072130.png"
                height={40}
                width={40}
              />
              <p className="telebutton-p"> Astronomy </p>
            </center>
          </div>

          <div
            className="telebutton"
            onClick={() => setSearchTerm("miscellaneous")}
          >
            <center>
              <img
                src="https://cdn-icons-png.flaticon.com/128/9677/9677576.png"
                height={40}
                width={40}
              />
              <p className="telebutton-p"> Miscellaneous </p>
            </center>
          </div>
        </center>

        <div style={{ marginTop: '16px', color: 'white' }}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="searchbox">
              {results.map((result) => (
                <div key={result._id} className="searchlist" onClick={()=> window.location.href=result.url}>
                  {result.subject === 'biology' ? '🧬 ' : ''}
                  {result.subject === 'chemistry' ? '🧪 ' : ''}
                  {result.subject === 'physics' ? '💡 ' : ''}
                  {result.subject === 'astronomy' ? '🚀 ' : ''}
                  {result.subject === 'miscellaneous' ? '🧠 ' : ''}
                  {result.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Teleporter;
