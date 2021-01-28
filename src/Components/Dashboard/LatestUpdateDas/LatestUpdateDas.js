import React, { useEffect, useState } from 'react';
import ModalLatestUpdateDas from './ModalLatestUpdateDas';

const LatestUpdateDas = () => {
    const [LatestDAta, setLatestData] = useState()

    useEffect(() => {
        fetch('http://localhost:5050/AllLatestUpdateData')
            .then(res => res.json())
            .then(data => setLatestData(data))
    }, [])

    return (
        <div className="latest-update-area">
            <p className="text-center whatUp">WHAT'S UP</p>
            <h2 className="text-center latest-update">Latest Update</h2>
            <hr className="text-center update-hr" />
            <div className="row row-cols-1 row-cols-md-4">

                {
                    LatestDAta ? LatestDAta.map(update =>

                        <div key={update.id} className="col mb-4 col-sm-6">
                            <div className="card update-card">
                                <img src={update.img} className="card-img-top" style={{height:'170px'}} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title update-title">{update.title}</h5>
                                    <p className="card-text">September 10/by Tanzim Khan</p>
                                    <ModalLatestUpdateDas update={update}></ModalLatestUpdateDas>
                                </div>
                            </div>
                        </div>


                    )
                    :""
                }
            </div>
        </div>
    );
};

export default LatestUpdateDas;