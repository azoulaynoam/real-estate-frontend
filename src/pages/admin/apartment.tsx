import React from "react";
import "./styles/apartemnts.css";

class Main extends React.Component {
  state = {
    apartments: [], 
  }

  render() {
    return (
      <div className="admin-panel">
        <div className="apartment-panel">
            <h1>Apartments</h1>
            <div className="apartments">
              <table>
                <tr>
                  <th>Apartment</th>
                  <th>Price</th>
                  <th>Location</th>
                  <th>Size</th>
                  <th>Rooms</th>
                  <th>Bedrooms</th>
                  <th>Bathrooms</th>
                  <th>Actions</th>
                </tr>
                <tr>
                  <td>Apartment 1</td>
                  <td>1000</td>
                  <td>Location 1</td>
                  <td>100</td>
                  <td>2</td>
                  <td>1</td>
                  <td>1</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Apartment 1</td>
                  <td>1000</td>
                  <td>Location 1</td>
                  <td>100</td>
                  <td>2</td>
                  <td>1</td>
                  <td>1</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              </table>
            </div>
        </div>
      </div>
    );
  }
}

export default Main;
