import React from 'react';

const OurMissionAndVision = () => {
    
    const style = {
        paddingTop: '20px',
    }

    return (
        <div style={style} className="row">
            <div className="col-sm text-center">
                <h3>OUR MISSION</h3>
                <hr className="gallery-hr" />
            </div>
            <div className="col-sm text-center">
                <h3>OUR VISION</h3>
                <hr className="gallery-hr" />
            </div>
        </div>
    );
};

export default OurMissionAndVision;