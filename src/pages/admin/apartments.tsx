import React from "react";
import Apartment from "../../components/types/Apartment";
import ImageSlider from "../../components/ImageSlider";
import "./styles/apartments.css";

class Main extends React.Component {
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
      <div className="admin-panel">
        <div className="apartment-panel">
          <h1>Apartments</h1>
          <div className="apartments-filter-hidder">
            <button>Filter</button>
          </div>
          <div className="apartments-filter">
            <div className="apartments-filter__item">
              <label htmlFor="apartments-filter__item__action">Action</label>
            </div>
            <div className="apartments-filter__item">
              <label htmlFor="apartments-filter__item__status">Status</label>
            </div>
          </div>
          <div className="apartments__table">
            <div className="apartments__table__header">
              <div className="apartments__table__header__item">Media</div>
              <div className="apartments__table__header__item">Price</div>
              <div className="apartments__table__header__item">
                English Description
              </div>
              <div className="apartments__table__header__item">
                Hebrew Description
              </div>
              <div className="apartments__table__header__item">
                Number of rooms
              </div>
              <div className="apartments__table__header__item">
                Number of bedrooms
              </div>
              <div className="apartments__table__header__item">
                Number of bathrooms
              </div>
              <div className="apartments__table__header__item">Actions</div>
            </div>
            {this.state.apartments.map((apartment) => {
              return (
                <div
                  className="apartments__table__row"
                  key={String(apartment._id)}
                >
                  <div className="apartments__table__row__item">
                    <ImageSlider apartment={apartment}></ImageSlider>
                  </div>
                  <div className="apartments__table__row__item">
                    {apartment.price}
                  </div>
                  <div className="apartments__table__row__item">
                    {apartment.free_text_en}
                  </div>
                  <div className="apartments__table__row__item">
                    {apartment.free_text_he}
                  </div>
                  <div className="apartments__table__row__item">
                    {apartment.rooms}
                  </div>
                  <div className="apartments__table__row__item">
                    {apartment.bedrooms}
                  </div>
                  <div className="apartments__table__row__item">
                    {apartment.bathrooms}
                  </div>
                  <div className="apartments__table__row__item">
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
