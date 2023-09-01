
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function OperationHandler(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const id = queryParams.get("id");
    const name = queryParams.get("name")
    console.log(useParams())
    return (
        <div>
          <h1>Operation Details</h1>
          <p>ID: {id}</p>
          <p>Name: {name}</p>
          {/* Add content and operations here */}
        </div>
      );
}
export default OperationHandler;
