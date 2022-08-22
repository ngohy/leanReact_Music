import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="ps-2 d-flex flex-column fs-5">
                    <div className="active nav-item d-flex align-items-center" style={{ height: '40px' }}>
                        <i class="fas fa-home pe-1"></i>
                        <a className="text-decoration-none ">Home</a>
                    </div>
                    <div className=" d-flex align-items-center" style={{ height: '40px' }}>
                        <i class="fas fa-star pe-1"></i>
                        <a className=" text-decoration-none ">Top 100</a>
                    </div>
                    <div className=" d-flex align-items-center" style={{ height: '40px' }}>
                        <i class="fas fa-list pe-1"></i>
                        <a className="text-decoration-none "> List music</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;

