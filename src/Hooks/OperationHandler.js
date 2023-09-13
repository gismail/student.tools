
import React from 'react';
import { useLocation} from 'react-router-dom';
import StringLength from '../Opeartions/StringLength/StringLength';

const operationFunctionMap =new Map()
operationFunctionMap.set(1,<StringLength/>)



function OperationHandler(){
    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const id = queryParams.get("id");
    //const name = queryParams.get("name")
    return (operationFunctionMap.get(parseInt(id)));
}
export default OperationHandler;
