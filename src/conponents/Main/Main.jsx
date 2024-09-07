import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <p>Codeify</p>
        </Link>
        <img src={assets.user_icon} />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            {" "}
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Can you debug my code?</p>
                <img src={assets.compass_icon} />
              </div>
              <div className="card">
                <p>
                  Suggest fun Python projects I could work on as a beginner
                  coder.
                </p>
                <img src={assets.bulb_icon} />
              </div>
              <div className="card">
                <p>What is React Native?</p>
                <img src={assets.message_icon} />
              </div>
              <div className="card">
                <p>What is the best coding language for game development?</p>
                <img src={assets.code_icon} />
              </div>
            </div>{" "}
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter your code..."
            ></input>
            <div>
              <img src={assets.gallery_icon} />
              <img src={assets.mic_icon} />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            The code generated from Codeify may have bugs. The best way to use
            us is to train our AI and add human-touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
