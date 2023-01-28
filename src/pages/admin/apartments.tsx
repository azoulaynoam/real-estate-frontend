import React from "react";
import Apartment from "../../components/interfaces/IApartment";
import ImageSlider from "../../components/ImageSlider";
import "./styles/apartments.css";

class Apartments extends React.Component {
  state: { apartments: Apartment[] } = {
    apartments: [],
  };

  componentDidMount(): void {
    fetch(process.env.REACT_APP_SERVER_URL + "properties")
      .then((res) => res.json())
      .then((apartments: Apartment[]) => this.setState({ apartments }));
  }

  render() {
    return (
      <div className="property-panel">
        <h1>Apartments</h1>
        <table className="property-table">
          <thead>
            <tr className="header-row">
              <th className="column-header">Sell/Rent</th>
              <th className="column-header">Bathrooms</th>
              <th className="column-header">Bedrooms</th>
              <th className="column-header">Rooms</th>
              <th className="column-header">English Description</th>
              <th className="column-header">Hebrew Description</th>
              <th className="column-header">Images</th>
              <th className="column-header">Video</th>
              <th className="column-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.apartments.map((apartment) => {
              return (
                <tr className="row" key={String(apartment._id)}>
                  <td className="column">{apartment.action}</td>
                  <td className="column">{apartment.bathrooms}</td>
                  <td className="column">{apartment.bedrooms}</td>
                  <td className="column">{apartment.rooms}</td>
                  <td className="column ltr">{apartment.free_text_en}</td>
                  <td className="column rtl">{apartment.free_text_he}</td>
                  <td className="column">
                    {apartment.images && apartment.images.length ? (
                      <ImageSlider apartment={apartment} />
                    ) : null}
                  </td>
                  <td className="column">
                    {apartment.video ? (
                      <video
                        width="320"
                        height="240"
                        controls={true}
                        src={apartment.video}
                      />
                    ) : null}
                  </td>
                  <td className="column">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Apartments;
