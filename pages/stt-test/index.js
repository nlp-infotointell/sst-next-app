import { useState } from "react";
import Head from "next/head";
import startListening from "../../Scripts/index";

export default function SttTest() {
  const [lang, setLang] = useState("ar-EG");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const [correctText, setCorrectText] = useState("");

  const [selectedText, setSelectedText] = useState("");
  const [correctForm, setCorrectForm] = useState(false);

  return (
    <div>
      <Head>
        <title>infotointell - sst test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <style>
          {`
                      
            .textinput {
              background-color: white;
              opacity: 1;
              float: left;
              width: auto;
              min-width:250px;
              min-height: 75px;
              outline: none;
              resize: none;
              border: 1px solid grey;
            }

            .correct-input {
              background-color: white;
              opacity: 1;
              float: left;
              width: auto;
              min-width:250px;
              min-height: 30px;
              outline: none;
              resize: none;
              border: 1px solid grey;
            }

          * {
          box-sizing: border-box;
          }
          html, body {
          height: 100%;
          box-sizing: inherit;
          background: #24292E !important;
          color: #777;
          font-size: 18px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          }

          .hero--wrapper { 
          margin: 0 auto;
          width: 100%;
          }

          h1 {
          font-weight: 100;
          font-size: 48px;
          text-align: center;
          margin: 25px 0 0 0;
          }

          p {
          text-align: center;
          }

          #hero--buttons {
          margin: 0px auto; 
          text-align: center;
          }

          #finance-btn {
          width: 120px;
          height: 50px;
          background: #333;
          border: 0;
          display: inline-block;
          margin-right: 10px;
          
          color: #fff;
          cursor: pointer;
          border-radius: 5px;
          font-weight: 600;
          }


          #finance-btn:hover {

          background: white;
          border: 1px solid black;
          display: inline-block;
          margin-right: 10px;
          color: black;
          cursor: pointer;
          }
          #refer-btn {
          width: 250px;
          height: 50px;
          background: #d8bc5a;
          border: 0;
          display: inline-block;
          color: #fff;
          }



          .toggle-button-cover
          {
          display: table-cell;
          position: relative;
          width: 200px;
          height: 140px;
          box-sizing: border-box;
          }

          .button
          {
          position: relative;
          top: 50%;
          width: 74px;
          height: 36px;
          margin: -20px auto 0 auto;
          overflow: hidden;
          }

          .button.r, .button.r .layer
          {
          background: white;
          border-radius: 100px;
          }

          .button.b2
          {
          border-radius: 2px;
          }

          .checkbox
          {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          opacity: 0;
          cursor: pointer;
          z-index: 3;
          }

          .knobs
          {
          z-index: 2;
          }

          .layer
          {
          width: 100%;
          background-color: #ebf7fc;
          transition: 0.3s ease all;
          z-index: 1;
          }

          /* Button 1 */
          #button-1 .knobs:before
          {
          content: 'AR';
          position: absolute;
          top: 4px;
          left: 4px;
          width: 28px;
          height: 28px;
          color: #fff;
          font-size: 10px;
          font-weight: bold;
          text-align: center;
          line-height: 1;
          padding: 9px 4px;
          background-color: #03A9F4;
          border-radius: 50%;
          transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
          }

          #button-1 .checkbox:checked + .knobs:before
          {
          content: 'EN';
          left: 42px;
          background-color: #f44336;
          }

          #button-1 .checkbox:checked ~ .layer
          {
          background-color: #fcebeb;
          }

          #button-1 .knobs, #button-1 .knobs:before, #button-1 .layer
          {
          transition: 0.3s ease all;
          }


          .button-cover
          {
          height: 100px;
          margin: 20px;
          background-color:#24292E;
          /* box-shadow: 0 10px 20px -8px #c5d6d6; */
          border-radius: 4px;
          }


          .i {
          margin: 20px auto;
          }`}
        </style>
      </Head>

      <div className="hero--row">
        <div className="hero--wrapper">
          <h1 style={{ color: "white" }}>Prototype</h1>
          <textarea
            className="textinput"
            disabled={true}
            value={text}
          ></textarea>

          <div>
            <input
              type="text"
              value={correctText}
              className="correct-input"
              disabled={!correctForm}
              onChange={(e) => {
                //setCorrectText(window.getSelection().toString())
                setCorrectText(e.target.value);
              }}
            />
          </div>

          <div id="hero--buttons" style={{ marginTop: "40px", width: "100%" }}>
            <button
              id="finance-btn"
              // className="btn-solid-lg "
              onClick={() => {
                setLoading(true);
                startListening(lang, (data) => {
                  setText(data);
                  setLoading(false);
                });
              }}
            >
              {loading
                ? lang === "en-GB"
                  ? "I am listening..."
                  : "انا اسمعك"
                : lang === "en-GB"
                ? "Start Listening"
                : "تحدث"}
            </button>

            <button
              id="finance-btn"
              // className="btn-solid-lg "
              onClick={() => {
                if (correctForm) {
                  setText(text.replace(selectedText, correctText));
                } else {
                  setSelectedText(window.getSelection().toString());
                  setCorrectText(window.getSelection().toString());
                  // setCorrectText(text);
                }
                setCorrectForm(!correctForm);
              }}
            >
              {lang === "en-GB" ? "Update" : "تعديل"}
            </button>
          </div>

          <div>
            <div className="button-cover">
              <div className="button r" id="button-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  value={lang === "en-GB"}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setLang("en-GB");
                    } else {
                      setLang("ar-EG");
                    }
                  }}
                />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
