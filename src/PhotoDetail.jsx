import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const PhotoDetail = () => {
  

  const navigate = useNavigate();

  const onNavigateBack = () =>{
    navigate(-1);
}
  
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

<h1 class="display-1" >Información</h1>


<div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">

                 <div className="col-4">
                    <img src={ data.thumbnailUrl } className="card-img" />
                 </div> 
                 
                 <div className="col-8">
                    
                    <div className="card-body">

                        <h2 className="text-muted">Id: { data.id }</h2>
                        <br />
                        <h2 className="text-muted">Title: {data.title} </h2>
                        <br />
                        <h2 className="text-muted">
                            <small className="text-muted"> URL: {data.url} </small>
                        </h2>
                        <br />
                      <button 
                      className='btn btn-primary'
                      onClick={onNavigateBack}
                      >
                        Regresar</button>
                            
                          
                    </div>

                 </div>

            </div>
        </div>


    </div>


    </div>
  )
}
