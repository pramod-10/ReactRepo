import React from 'react';



 export const App1 = () => {
  var greeting = 'Hello Function Component1234!';
  return <Headline88 value={greeting} />;
};
const Headline88 = ({ value }) =>
  <h1>{value}</h1>;

   export const App2 = () => {
   var greeting1 = 'Hello Function Component1233sfsefsdfds!';
    return <Headline88 value={greeting1} />;
  };
 export const App3 = () => {
   var  greeting2 = 'Hello Function Component2!';
    return <Headline88 value={greeting2} />;
  };

//export{ App2,App1,App3}