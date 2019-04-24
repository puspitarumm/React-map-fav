import React, {Component} from 'react';
import './App.css';
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import HotelCard from "./HotelCard";
import Smap from './SimpleMaps';

import Airplane from '@material-ui/icons/AirplanemodeActive';

class App extends Component {
    state = {
        open: false,
        hotels: [
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskrpsi: 'Lorem ipsum sit dolor amet'},
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskrpsi: 'Lorem ipsum sit dolor amet'},
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskrpsi: 'Lorem ipsum sit dolor amet'},
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskrpsi: 'Lorem ipsum sit dolor amet'},
        ]
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };


    render() {
        return (
            <div className="row">
                <div className="col m12">
                    <PrimarySearchAppBar/>
                    <br/>
                    <Smap/>
                    <div className="row">
                        <div className="col m5">
                            {this.state.hotels.map((data, key) => {
                                return (
                                    <div key={key}>
                                        <HotelCard title={data.nama} tanggal={data.tanggal} deskripsi={data.deskrpsi}/>
                                        <br/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="col m6">
                            <h1>MAPS HERE</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
