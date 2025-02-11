import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Details = () => {
  const item = useLocation();
  const navigate = useNavigate();
  return (
  <>   <h1>DETAILS COMPONENT IS WORKING</h1>
      <div>
          Name : {item.state.name} <br />
          Status : {item.state.status} <br />
          Cohort ID : {item.state.cohortId} <br />
          Breed : {item.state.breed} <br />
          
          <br />
          {<img src='${item.state.imageUrl}' alt="puppy" />}

          </div>
     <button onClick={() => navigate('/api', { state:''})}>Go back</button>  </>
  )
}
