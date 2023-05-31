import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const PhotoDetail = () => {
  // {thumbnailUrl, title, id}
const{id} = useParams();

const[data, setData ] = useState([]);

useEffect(() => {
  obtenerDatos();
}, [])

const obtenerDatos = async () =>{
  axios
  .get(`//jsonplaceholder.typicode.com/photos/${id}`)
  .then(function (response) {
    setData(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

  return (
    <div>

<h1>Hola</h1>


<div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">

                 <div className="col-4">
                    <img src={ data.thumbnailUrl } className="card-img" />
                 </div> 

                 <div className="col-8">
                    
                    <div className="card-body">

                        <h5 className="card-title">Id: { data.id }</h5>
                        <p className="card-text">Title: {data.title} </p>
                        
                        <p className="card-text">
                            <small className="text-muted"> URL: {data.url} </small>
                        </p>

                      
                            
                          
                    </div>

                 </div>

            </div>
        </div>


    </div>


    </div>
  )
}
