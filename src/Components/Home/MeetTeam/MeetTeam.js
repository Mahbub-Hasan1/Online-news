// import React, { useState } from 'react';
// import './MeetTeam.css';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
// import { Link } from 'react-router-dom';

// const teamFakeData = [
//     {
//         id: 1,
//         img: 'https://i.imgur.com/HAMVrco.png',
//         name: 'CRISTINA DEO',
//         skill: 'CEO',
//         facebookLink: '',
//         twitterLink: '',
//         googleLink: '',
//         linkedInLink: '',
//     },
//     {
//         id: 2,
//         img: 'https://i.imgur.com/aTKRp89.png',
//         name: 'JOHN SMITH',
//         skill: 'Managing Director',
//         facebookLink: '',
//         twitterLink: '',
//         googleLink: '',
//         linkedInLink: '',
//     },
//     {
//         id: 3,
//         img: 'https://i.imgur.com/HAMVrco.png',
//         name: 'JENNY SMITH',
//         skill: 'Marketing Head',
//         facebookLink: '',
//         twitterLink: '',
//         googleLink: '',
//         linkedInLink: '',
//     },
//     {
//         id: 4,
//         img: 'https://i.imgur.com/aTKRp89.png',
//         name: 'PERRY WARNER',
//         skill: 'Creative Director',
//         facebookLink: '',
//         twitterLink: '',
//         googleLink: '',
//         linkedInLink: '',
//     },
// ]

// const MeetTeam = () => {

//     const [teamData] = useState(teamFakeData)

//     return (
//         <div>
//             <h4 className="text-center mt-5 team-title">MEET OUR TEAM</h4>
//             <hr className="team-title-hr" />
//             <p className="text-center tem-text">Ut condimentum gravida odio in blandit. Integer nec consectetur neque, a ultricies orci.</p>

//             <div className="row row-cols-1 row-cols-md-4">
//                 {
//                     teamData.map(team =>

//                         <div key={team.id} className="col mb-4 col-sm-6">
//                             <div className="img-div">
//                                 <img className="img-fluid" src={team.img} alt="" />

//                                 <div className="description-div text-center">
//                                     <Link to={team.facebookLink}>
//                                         <FacebookIcon
//                                             className="team-icon"
//                                             style={{ fontSize: '25px' }}
//                                         />
//                                     </Link>

//                                     <Link to={team.twitterLink}>
//                                         <TwitterIcon
//                                             className="team-icon"
//                                             style={{ fontSize: '25px' }}
//                                         />
//                                     </Link>

//                                     <Link to={team.googleLink}>
//                                         <AlternateEmailIcon
//                                             className="team-icon"
//                                             style={{ fontSize: '25px' }}
//                                         />
//                                     </Link>

//                                     <Link to={team.linkedInLink}>
//                                         <LinkedInIcon
//                                             className="team-icon"
//                                             style={{ fontSize: '25px' }}
//                                         />
//                                     </Link>


//                                     <p className="team-name">{team.name}</p>
//                                     <hr className="team-hr" />
//                                     <p className="team-skill">{team.skill}</p>
//                                 </div>
//                             </div>

//                         </div>

//                     )
//                 }


//             </div>
//         </div>
//     );
// };

// export default MeetTeam;