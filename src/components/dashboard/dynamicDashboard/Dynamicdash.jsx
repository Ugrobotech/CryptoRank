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
    let allPrice = datas.map((data) => {
      return data.price;
    });
    let sum = allPrice.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    return sum;
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
          Top Weekly Earners by Affiliates
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
              Weekly
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#scrollspyHeading3">
                  Week 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading4">
                  Week 2
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading5">
                  Week 3
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* nav end */}
      <div className="container-fluid">
        {datas.length === 0 ? (
          <h2>No Marketer has been added yet</h2>
        ) : (
          datas.map((data) => {
            // ccalling the get maxPrice function to get the maxparice
            let Sum = getMaxprice();
            return (
              <Project
                key={data.id}
                name={data.name}
                price={data.price}
                image={data.imgLink}
                sum={Sum}
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
