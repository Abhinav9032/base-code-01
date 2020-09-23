import React , {useState} from 'react'

function TestingWebServices() {
     
  

    const [returnText , setReturnTest ] = useState("Initial value");

    const handleRestCall = () => {
        fetch('http://boot-env.eba-h9hawwx2.us-east-2.elasticbeanstalk.com/get')
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          setReturnTest(data.time);
        })
}
    

    return (
        <div>
            <button className="connect-boot" onClick={handleRestCall}>Show current time</button>
            <h1>{returnText}</h1>
            
        </div>
    )
}

export default TestingWebServices
