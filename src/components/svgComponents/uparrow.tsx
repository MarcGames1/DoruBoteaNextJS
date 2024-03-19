"use client";

const UpArrow = () => {
  return (
    <>
      <a href="#top">
        <svg
          className="buttonTop"
          _ngcontent-tyl-c14=""
          height="26"
          viewBox="0 0 24 24"
          width="26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            _ngcontent-tyl-c14=""
            fill="white"
            d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
          ></path>
        </svg>
      </a>

      <style global jsx>
        {`
          .buttonTop {
            padding: 1em;
            transform-origin: center;
            border-radius: 35px;
            height: auto;
            max-height: 3rem;
            width: 3rem;
            background-color: rgba(0, 0, 0, 0.8);
            position: fixed;
            bottom: 10%;
            right: 0;
            z-index: 14;
            transition-duration: 3s;
            transition-timing-function: ease-in-out;
            transition-delay: 0.5s;
          }

          .buttonTop:hover {
            transform: scale(1.1);
            color: green;
          }
        `}
      </style>
    </>
  );
};

export default UpArrow;
