import React, {useState, useEffect} from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const headers = {
      responseType: 'text'
    };

    fetch('/api/hello', {headers})
      .then(res => {
        console.log(res);
        res.text();
      })
      .then((data) => {
        console.log(data);
        setGreeting(data);
      })
      .catch(console.log);
      
  }, [greeting]);


  return (
   <h1>{greeting}</h1>
  )
}

export default Greeting;
