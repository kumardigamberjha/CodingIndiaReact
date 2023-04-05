import React, { useEffect, useState } from 'react';

const TutorialContent = (props) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">{props.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.content }} className="prose max-w-none"></div>
    </div>
  );
};

export default TutorialContent;