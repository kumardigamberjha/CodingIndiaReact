import React, { useState, useEffect } from "react";

function TypewriterHeading(props) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(props.text.substring(0, index));
      setIndex((prevIndex) => prevIndex + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [props.text, index]);

  return (
    <h1>
      {text}
      {props.company}
    </h1>
  );
}

export default TypewriterHeading;