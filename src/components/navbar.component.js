import React, { Component } from 'react';

class Navbar extends Component {
    
    render() {

        this.handleChange = (searchText) => {
            this.props.searchVideo(searchText)
        }

        return (
            <nav className="row navbar navbar-expand-lg navbar-light">

                <div className="col col-1 col-sm-1 col-md-1 col-lg-1">
                    <a className="navbar-brand" href="#">YouTube</a>
                </div>
                <div className="col col-9 col-sm-9 col-md-9 col-lg-7 offset-lg-1">
                    <input className="form-control search" type="search" placeholder="Search" aria-label="Search" onChange={event => this.handleChange(event.target.value)} />
                </div>

            </nav >
        )
    }
    
}

export default Navbar;