import { React, useState } from "react";
import "../dashboard.css";
import image2 from "../../../assets/black-icon-setshareline.svg";
import Project from "../../project/Project";
import NewdataForm from "../../../newData/NewdataForm";
import { GrAddCircle } from "react-icons/gr";
const Dynamicdash = () => {
  const [datas, setData] = useState([]);
  const [add, setAdd] = useState(false);
  const [maxPrice, setMaxPrice] = useState(0);

  // get the Maxprice
  const getMaxprice = () => {
    let maxPrice = datas.map((data) => {
      return data.price;
    });

    return Math.max(...maxPrice);
  };

  const showModal = () => {
    return setAdd(true);
  };

  const closeModal = () => {
    return setAdd(false);
  };

  const dataHandler = (newdata) => {
    setData((prevData) => {
      return [newdata, ...prevData];
    });
    console.log("from App.js", newdata);
  };
  return (
    <div>
      {/* nav start */}
      <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
        <a className="navbar-brand" href="/#">
          Top Projects by ROI
          <img className="top-header-icon" src={image2} alt="..." />
        </a>
        <a className="addNew" href="/#" onClick={showModal}>
          <GrAddCircle />
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle all-time-link"
              data-bs-toggle="dropdown"
              href="/#"
              role="button"
              aria-expanded="false"
            >
              All Time
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#scrollspyHeading3">
                  Third
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading4">
                  Fourth
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading5">
                  Fifth
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* nav end */}
      <div className="container-fluid">
        {datas.length === 0 ? (
          <h2>No coin has been added yet</h2>
        ) : (
          datas.map((data) => {
            // ccalling the get maxPrice function to get the maxparice
            let maxP = getMaxprice();
            return (
              <Project
                key={data.id}
                name={data.name}
                price={data.price}
                image={data.imgLink}
                maxValue={maxP}
              />
            );
          })
        )}
        {add === true ? (
          <NewdataForm close={closeModal} getData={dataHandler} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Dynamicdash;
