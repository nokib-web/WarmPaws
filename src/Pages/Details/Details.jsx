import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DetailsCard from './DetailsCard';

const Details = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [detail, setDetail]= useState({});
    

    console.log(data, id, detail)

     useEffect(()=>{
        const details = data.find((singleId)=>singleId.serviceId == id);
        setDetail(details)
    },[id, data])




    return (
        <div>
          <DetailsCard detail={detail} ></DetailsCard>
        </div>
    );
};

export default Details;