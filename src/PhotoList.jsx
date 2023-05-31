import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./App.css";
import { useNavigate } from "react-router-dom";


const PhotoList = () => {
  const history = useNavigate();
  const handleClick = (id) => {
    history(`/detalle/${id}`);
  };
  

  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const getData = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
    const data = res.data;
    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((photo) =>{ 
      console.log(photo)
      return (
        <div  key={photo.id}>
          <h1 className="text-muted">{photo.title}</h1>
          <img
          className="img-thumbnail"
            onClick={() => {
              handleClick(photo.id);
            }}
            src={photo.thumbnailUrl}
            alt=""
            class="rounded"
          />
        </div>
      )
    });
    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <div className="App">
      {data}
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default PhotoList;