import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
//
// function WhoAmI({name, surename, link}) {
//     return(
//         <div className="whoAmI">
//             <h1>My name is {name}, {surename}</h1>
//             <a href={link}>My profile</a>
//         </div>
//     )
// }

// class WhoAmI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {years: 0}
//         this.nextYear = () => {
//             this.setState(state => ({
//                 years: ++state.years
//             }))
//         }
//     }
//
//     render() {
//         const {name, surename, link} = this.props;
//         const {years} = this.state;
//         return(
//             <div className="whoAmI d-flex">
//                 <button className="btn btn-primary" onClick={this.nextYear}>+</button>
//                 <h1 className="h6">My name is {name}, surename - {surename}, years = <span className="h2">{years}</span> </h1>
//                 <a href={link}>My profile</a>
//             </div>
//         )
//     }
// }

// const All = () => {
//     return(
//         <React.Fragment>
//             <WhoAmI name="John" surename="Smith" link="facebook.com"/>
//             <WhoAmI name="Max" surename="Jones" link="youtube.com"/>
//             <WhoAmI name="Jax" surename="Jone" link="instagram.com"/>
//         </React.Fragment>
//     )
// }

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
