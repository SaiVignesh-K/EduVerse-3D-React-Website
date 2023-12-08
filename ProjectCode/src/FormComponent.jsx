import React, { useState } from 'react';
import './FormComponent.css'; // Import your CSS file
import axios from 'axios';
const FormComponent = () => {
  const [isChatBoxOpen, setChatBoxOpen] = useState(false);
  const [isTextareaVisible, setTextareaVisible] = useState(false);
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  const [activeEmoji, setActiveEmoji] = useState(null);
  const [textareaValue, setTextareaValue] = useState('');

  const toggleChatBox = () => {
    setChatBoxOpen(true);
  };


  const toggleTextarea = (emojiId) => {
    setTextareaVisible(true);
    setActiveEmoji(emojiId);
  };

  const closeChatBox = () => {
    setChatBoxOpen(false);
    setTextareaVisible(false);
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
    if (event.target.value) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };

  

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    
    // Send a POST request to your backend endpoint using Axios
    axios.post('https://eduverse-chat-backend.onrender.com/api/submit-feedback', {
      text: textareaValue,
      emoji: activeEmoji,
    })
    .then(response => {
      // Handle the response from the backend if needed
      console.log(response.data);
    })
    .catch(error => {
      // Handle errors if any
      console.error('Error:',error);
});
  
    setTextareaValue('');
    window.alert("Thank you for your feedback!");
    closeChatBox();
  };
  

  return (
    <div>
      <div className="chatBox" onClick={toggleChatBox}>
        <span>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laugh"
            className="svg-inline--fa fa-laugh fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512">
            <path fill="#fff"
              d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 152c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm88 272h-16c-73.4 0-134-55-142.9-126-1.2-9.5 6.3-18 15.9-18h270c9.6 0 17.1 8.4 15.9 18-8.9 71-69.5 126-142.9 126z">
            </path>
          </svg>
        </span>
        <p>Feed Back</p>
      </div>
      <div className="MainChatBox" style={{ display: isChatBoxOpen ? 'block' : 'none' }}>
        <div className="chatIco">
          <div className="closeIcon" onClick={closeChatBox}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
              className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512">
              <path fill="#fff"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
              </path>
            </svg>
          </div>
          <div className="chatTxt">
            <p>How would you rate your<br />experience?</p>
          </div>
          <div className="IconsChat">
            <a href="#." className={`emoji iconBtn ${activeEmoji === 'emoji1' ? 'active' : ''}`} id="emoji1" onClick={() => toggleTextarea('emoji1')}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angry" className="svg-inline--fa fa-angry fa-w-16"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path fill="currentColor"
                  d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 240c0-9.3 4.1-17.5 10.5-23.4l-31-9.3c-8.5-2.5-13.3-11.5-10.7-19.9 2.5-8.5 11.4-13.2 19.9-10.7l80 24c8.5 2.5 13.3 11.5 10.7 19.9-2.1 6.9-8.4 11.4-15.3 11.4-.5 0-1.1-.2-1.7-.2.7 2.7 1.7 5.3 1.7 8.2 0 17.7-14.3 32-32 32s-32-14.3-32-32zm168 154.2c-27.8-33.4-84.2-33.4-112.1 0-13.5 16.3-38.2-4.2-24.6-20.5 20-24 49.4-37.8 80.6-37.8s60.6 13.8 80.6 37.8c13.8 16.5-11.1 36.6-24.5 20.5zm76.6-186.9l-31 9.3c6.3 5.8 10.5 14.1 10.5 23.4 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-2.9.9-5.6 1.7-8.2-.6.1-1.1.2-1.7.2-6.9 0-13.2-4.5-15.3-11.4-2.5-8.5 2.3-17.4 10.7-19.9l80-24c8.4-2.5 17.4 2.3 19.9 10.7 2.5 8.5-2.3 17.4-10.8 19.9z">
                </path>
              </svg>
              <span>Hate</span>
            </a>
            <a href="#." className={`emoji iconBtn ${activeEmoji === 'emoji2' ? 'active' : ''}`} id="emoji2" onClick={() => toggleTextarea('emoji2')}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="frown" className="svg-inline--fa fa-frown fa-w-16"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path fill="currentColor"
                  d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm170.2 218.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320s86.3 19.6 114.7 53.8c13.6 16.2-11 36.7-24.5 20.4z">
                </path>
              </svg>
              <span>Dislike</span>
            </a>
            <a href="#." className={`emoji iconBtn ${activeEmoji === 'emoji3' ? 'active' : ''}`} id="emoji3" onClick={() => toggleTextarea('emoji3')}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="meh" className="svg-inline--fa fa-meh fa-w-16"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path fill="currentColor"
                  d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm176 192H152c-21.2 0-21.2-32 0-32h192c21.2 0 21.2 32 0 32zm-16-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z">
                </path>
              </svg>
              <span>Neutral</span>
            </a>
            <a href="#." className={`emoji iconBtn ${activeEmoji === 'emoji4' ? 'active' : ''}`} id="emoji4" onClick={() => toggleTextarea('emoji4')}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laugh" className="svg-inline--fa fa-laugh fa-w-16"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path fill="currentColor"
                  d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 152c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm88 272h-16c-73.4 0-134-55-142.9-126-1.2-9.5 6.3-18 15.9-18h270c9.6 0 17.1 8.4 15.9 18-8.9 71-69.5 126-142.9 126z">
                </path>
              </svg>
              <span>Like</span>
            </a>
            <a href="#." className={`emoji iconBtn ${activeEmoji === 'emoji5' ? 'active' : ''}`} id="emoji5" onClick={() => toggleTextarea('emoji5')}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grin-hearts"
                className="svg-inline--fa fa-grin-hearts fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512">
                <path fill="currentColor"
                  d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM90.4 183.6c6.7-17.6 26.7-26.7 44.9-21.9l7.1 1.9 2-7.1c5-18.1 22.8-30.9 41.5-27.9 21.4 3.4 34.4 24.2 28.8 44.5L195.3 243c-1.2 4.5-5.9 7.2-10.5 6l-70.2-18.2c-20.4-5.4-31.9-27-24.2-47.2zM248 432c-60.6 0-134.5-38.3-143.8-93.3-2-11.8 9.2-21.5 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.4-3.6 22.6 6.1 20.7 17.9-9.3 55-83.2 93.3-143.8 93.3zm133.4-201.3l-70.2 18.2c-4.5 1.2-9.2-1.5-10.5-6L281.3 173c-5.6-20.3 7.4-41.1 28.8-44.5 18.6-3 36.4 9.8 41.5 27.9l2 7.1 7.1-1.9c18.2-4.7 38.2 4.3 44.9 21.9 7.7 20.3-3.8 41.9-24.2 47.2z">
                </path>
              </svg>
              <span>Love</span>
            </a>
          </div>

          <div className="txtAreaBox" id="txtAreaBox" style={{ display: isTextareaVisible ? 'block' : 'none' }}>
            <form onSubmit={handleFormSubmit}>
            <textarea
          name="messageBox"
          autoFocus
          placeholder="Tell us about your experience..."
          value={textareaValue} // Set the value of the textarea to the state variable
          onChange={handleTextareaChange}
        ></textarea>
              {/* <div className="selectIcon"
                data-tip="Sed ut perspiciatis unde omnis iste natus error sit voluptatem">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mouse-pointer"
                  className="svg-inline--fa fa-mouse-pointer fa-w-10" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor"
                    d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"></path>
                </svg>
              </div> */}
              <div className="sndBtn">
                <input type="submit" value="Send" className="link-button-blue" disabled={isSubmitDisabled} toast /> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
