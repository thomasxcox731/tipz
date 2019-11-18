import React from "react";
import "./Account.css";
import MileageChart from "../../MileageChart/chart";
import TipsChart from "../../TipsChart/tchart";
import Abhishu from "./AbhishuPix.gif"


class Account extends React.Component {



  render() {
    return (
      <div className="container">
        <img id="pixChar" alt="Abhishu" src={Abhishu} />
        <h1>Account</h1>
        <div className="container" id="accountMileage">
          <h2>Mileage</h2>
          <div className="container"> <div className="card" id="mileageGraph">
            <MileageChart />
          </div>
            <div className="card" id="mileageData">
              <table>
                <thead>
                  <tr>
                    <th className="month">Month</th>
                    <th className="work">Work</th>
                    <th className="medical">Medical</th>
                    <th className="moving">Moving</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="month">January</td>
                    <td className="work">30</td>
                    <td className="medical">50</td>
                    <td className="moving">50</td>
                    <td>130</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td className="month">February</td>
                    <td className="work">200</td>
                    <td className="medical">20</td>
                    <td className="moving">20</td>
                    <td>240</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td className="month">March</td>
                    <td className="work">100</td>
                    <td className="medical">10</td>
                    <td className="moving">10</td>
                    <td>120</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td className="month">April</td>
                    <td className="work">400</td>
                    <td className="medical">40</td>
                    <td className="moving">40</td>
                    <td>480</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td className="month">May</td>
                    <td className="work">150</td>
                    <td className="medical">15</td>
                    <td className="moving">15</td>
                    <td>180</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td className="month">June</td>
                    <td className="work">250</td>
                    <td className="medical">25</td>
                    <td className="moving">25</td>
                    <td>300</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td className="month">July</td>
                    <td className="work">30</td>
                    <td className="medical">50</td>
                    <td className="moving">50</td>
                    <td>130</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td className="month">August</td>
                    <td className="work">200</td>
                    <td className="medical">20</td>
                    <td className="moving">20</td>
                    <td>240</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td className="month">September</td>
                    <td className="work">100</td>
                    <td className="medical">10</td>
                    <td className="moving">10</td>
                    <td>120</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td className="month">October</td>
                    <td className="work">400</td>
                    <td className="medical">40</td>
                    <td className="moving">40</td>
                    <td>480</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td className="month">November</td>
                    <td className="work">150</td>
                    <td className="medical">15</td>
                    <td className="moving">15</td>
                    <td>180</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td className="month">December</td>
                    <td className="work">250</td>
                    <td className="medical">25</td>
                    <td className="moving">25</td>
                    <td>300</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td><hr></hr></td>
                    <td><hr></hr></td>
                    <td><hr></hr></td>
                    <td><hr></hr></td>
                    <td><hr></hr></td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td className="month"><strong>TOTALS</strong></td>
                    <td className="work"><strong>Work Total<br />2260</strong></td>
                    <td className="medical"><strong>Medical Total<br />320</strong></td>
                    <td className="moving"><strong>Moving Total<br />320</strong></td>
                    <td><strong>Total<br />2900</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr />


        <div className="container" id="accountTips">
          <h2>Tips</h2>
          <div className="container">
            <div className="card" id="tipsGraph">
              <TipsChart />
            </div>
            <div className="card" id="tipsData">
              <table>
                <thead>
                  <tr>
                    <th>Tip Amount</th>
                    <th>Tip Date</th>
                    <th>Running Total</th>
                  </tr>
                </thead>


                <tbody>
                  <tr>
                    <td>$12</td>
                    <td>1-15-2019</td>
                    <td>$12</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>$11</td>
                    <td>2-15-2019</td>
                    <td>$23</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>$18</td>
                    <td>3-15-2019</td>
                    <td>$41</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>$12</td>
                    <td>4-15-2019</td>
                    <td>$53</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>$8</td>
                    <td>5-20-2019</td>
                    <td>$60</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>$13</td>
                    <td>6-21-2019</td>
                    <td>$73</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>$3</td>
                    <td>7-20-2019</td>
                    <td>$76</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>$6</td>
                    <td>8-10-2019</td>
                    <td>$82</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>$7</td>
                    <td>9-20-2019</td>
                    <td>$89</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>$5</td>
                    <td>10-08-2019</td>
                    <td>$94</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>$6</td>
                    <td>11-12-2019</td>
                    <td>$100</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>$12</td>
                    <td>12-25-2019</td>
                    <td>$112</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td><hr></hr></td>
                    <td><hr></hr></td>
                    <td><hr></hr></td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td><strong>TOTAL</strong></td>
                    <td><strong></strong></td>
                    <td><strong>$112</strong></td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div >
        </div >
        <button className="exportButton" onClick={() => window.print()}>PRINT THIS PAGE</button>
        <button className="exportButton"><a rel="noopener noreferrer" target="_blank" href={`mailto:?Subject=Here%20are%20my%20Tip%20and%20Mileage%20totals&Body=***PULL DATA FROM DB*** 
        Work Total- 2260
        Medical Total: 320
        Moving Total: 320`}>EMAIL THIS PAGE</a></button>


      </div >

    )
  };
}

export default Account;
