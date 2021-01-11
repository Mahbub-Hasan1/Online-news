import React from 'react';
import './WatchVideos.css';
import ReactPlayer from 'react-player';
import { useMediaQuery } from 'react-responsive'

const WatchVideos = () => {

    const isLaptopOrMobail = useMediaQuery({
        query: '(max-width: 1199px)'
    })
    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 764px)'
    })
    const isSmallOrMobile = useMediaQuery({
        query: '(max-width: 383px)'
    })

    return (
        <>
            {
                isSmallOrMobile ? '' :
                    <>
                        <h3 className="text-center watch-hade-line">Watch our featured videos</h3>
                        <div style={{ marginBottom: '40px' }} className="row">
                            {isTabletOrMobile ?
                                <div className="col-md-7 container-fluid">
                                    <ReactPlayer
                                        url="https://youtu.be/kIYb6l9eW1s"
                                        controls
                                        playbackRate={1}
                                        width="380px"
                                        height="210px"
                                    />
                                </div>

                                :

                                <div className="col-md-7 container-fluid">
                                    {isLaptopOrMobail ?
                                        <ReactPlayer
                                            url="https://youtu.be/kIYb6l9eW1s"
                                            controls
                                            playbackRate={1}
                                            width="540px"
                                            height="310px"
                                        />
                                        :
                                        <ReactPlayer
                                            url="https://youtu.be/kIYb6l9eW1s"
                                            controls
                                            playbackRate={1}
                                            width="640px"
                                            height="410px"
                                        />
                                    }

                                </div>
                            }


                            {isTabletOrMobile ?
                                '' :
                                <div className=" col-md-5 row">
                                    <div>
                                        {isLaptopOrMobail ?
                                            <ReactPlayer
                                                url="https://youtu.be/kIYb6l9eW1s"
                                                controls
                                                playbackRate={1}
                                                width="345px"
                                                height="150px"
                                            />
                                            :
                                            <ReactPlayer
                                                url="https://youtu.be/kIYb6l9eW1s"
                                                controls
                                                playbackRate={1}
                                                width="445px"
                                                height="200px"
                                            />
                                        }

                                    </div>
                                    <div style={{ marginTop: '10px' }}>
                                        {isLaptopOrMobail ?
                                            <ReactPlayer
                                                url="https://youtu.be/-RVlkAYAcRA "
                                                controls
                                                playbackRate={1}
                                                width="345px"
                                                height="150px"
                                            />
                                            :
                                            <ReactPlayer
                                                url="https://youtu.be/-RVlkAYAcRA "
                                                controls
                                                playbackRate={1}
                                                width="445px"
                                                height="200px"
                                            />
                                        }

                                    </div>
                                </div>

                            }

                        </div>
                    </>
            }

        </>
    );
};

export default WatchVideos;