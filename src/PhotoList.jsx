import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./App.css";
import { PhotoDetail } from "./PhotoDetail";
import { Router } from "react-router-dom";

const handleClick = ({ id }) => {
  Router.push(`/detalle/${id}`);
};

const PhotoList = () => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
    const data = res.data;
    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((pd) => (
      <div key={pd.id}>
    
        <p className="card-text">{pd.title}</p>
        <img
        className="card-img"
          onClick={() => {
            handleClick(pd.id);
          }}
          src={pd.thumbnailUrl}
          alt=""
        />
      </div>
    ));
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

export default PhotoList;
