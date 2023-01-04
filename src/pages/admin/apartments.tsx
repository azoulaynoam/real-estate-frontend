import React from "react";
import Apartment from "../../components/types/Apartment";
import "./styles/apartemnts.css";

class Main extends React.Component {
  state: { apartments: Apartment[] } = {
    apartments: [
      {
        images: [],
        _id: "5f9b1b0b0b1b1b1b1b1b1b1b",
        action: "sale",
        free_text_en: "This is a test apartment",
        free_text_he: "זה דירה מבחן",
        rooms: 3,
        bedrooms: 2,
        bathrooms: 1,
        size: 100,
        price: 100000,
        status: true,
        video: "https://www.youtube.com/watch?v=Q8TXgCzxEnw",
        __v: 0,
      }
    ], 
  }

  render() {
    return (
      <div className="admin-panel">
        <div className="apartment-panel">
            <h1 accessabiliy-label="test">Apartments</h1>
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
                {
                  this.state.apartments.map((apartment) => {
                    return (
                      <tr>
                        <td>{apartment.price}</td>
                        <td>{apartment.free_text_en}</td>
                        <td>{apartment.free_text_he}</td>
                        <td>{apartment.rooms}</td>
                        <td>{apartment.bedrooms}</td>
                        <td>{apartment.bathrooms}</td>
                        <td>
                          <button>Edit</button>
                          <button>Delete</button>
                        </td>
                      </tr>
                    );
                  })
                }
              </table>
            </div>
        </div>
      </div>
    );
  }
}

export default Main;
