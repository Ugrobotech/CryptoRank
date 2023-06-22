import { React } from "react";
import "./project.css";
import image1 from "../../assets/frame-717@2x.png";

const Project = (props) => {
  // calculation chartbar fill %
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.price / props.maxValue) * 100) + "%";
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-2 icon-col">
          <img className="crypto-icon" src={props.image} alt="..." />
        </div>
        <div className="col-md-7 bars">
          <p className="crypto-name">
            {props.name}
            {/* <span className="crypto-multiple m1">5950.00x</span> */}
          </p>
          <div className="dashes">
            <div className="guage" style={{ width: barFillHeight }}>
              <div className="gradient"></div>
            </div>
          </div>
        </div>
        <div className="col-md-3 price-tag">
          <table>
            <tr>
              <td className="price">Amount</td>
            </tr>
            <tr>
              <td>${props.price}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Project;
