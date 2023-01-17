import React from "react";

function Project({ bodyText, title, codeURL, videoURL, demoURL, active }) {
  return (
    <>
      {!!active && (
        <>
          <div>{title}</div>
          <div>{bodyText}</div>
          <div>
            <div>{codeURL}</div>
            <div>{videoURL}</div>
            <div>{demoURL}</div>
          </div>
        </>
      )}
    </>
  );
}

export default Project;
