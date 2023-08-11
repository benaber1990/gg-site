import React, { useState } from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "poppins",
  justifyContent: "center",
  display: "flex",
  // backgroundColor: "red",
};

const cardStyle = {
  backgroundColor: "green",
  width: 400,
  height: 250,
  paddingRight: 20,
  paddingLeft: 20,
  paddingTop: 30,
  paddingBottom: 30,
  borderRadius: 20,
  marginTop: 10,
};

const submitButtonStyle = {
  backgroundColor: "yellow",
  paddingTop: 1,
  paddingBottom: 1,
  paddingRight: 5,
  paddingLeft: 5,
  borderRadius: 6,
  marginTop: 20,
  width: "50%",
};

const button2Style = {
  backgroundColor: "yellow",
  paddingTop: 1,
  paddingBottom: 1,
  paddingRight: 5,
  paddingLeft: 5,
  borderRadius: 6,
  marginTop: 20,
  // width: "50%",
};

const IndexPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(true);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  // const [hasSubmitted, setHasSubmitted] = useState(false);

  // let enteredNumber = "a";
  // let outputNumber = " 0001 ";

  let demoText = "";

  if (inputValue.length >= 1) {
    demoText = "Yessss";
  } else {
    demoText = "Noooo";
  }

  return (
    <main style={pageStyles}>
      {hasSubmitted ? (
        <div style={cardStyle}>
          <div style={{ color: "white", fontSize: 32, textAlign: "center" }}>
            Enter your ticket to see your time
          </div>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <label>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                style={{
                  height: 50,
                  width: 240,
                  marginTop: 10,
                  paddingLeft: 25,
                }}
              />
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              onClick={() => setHasSubmitted((prevState) => !prevState)}
              style={submitButtonStyle}
            >
              <h3
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                Submit
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div style={cardStyle}>
            <div style={{ color: "white", fontSize: 32, textAlign: "center" }}>
              Your time is:
            </div>
            <div
              style={{
                color: "white",
                fontSize: 42,
                fontWeight: "600",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              {demoText}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                onClick={() => setHasSubmitted((prevState) => !prevState)}
                style={button2Style}
              >
                <h3
                  style={{
                    textAlign: "center",
                    alignSelf: "center",
                  }}
                >
                  Check another ticket
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
