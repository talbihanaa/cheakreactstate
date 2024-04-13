import React, { Component } from 'react';
import './App.css';
import Profile from './component/profile';

class App extends Component {
  state = {
    person: {
      fullName: "John",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      profession: "Engineer"
    },
    show: false,
    
  };
  show = () =>{
    this.setState(profile => ({
      show: !profile.show
    }));
  };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show } = this.state;

    return (
      <div className="App">
        <button style={{backgroundColor:"blue", color:"white"}} onClick={this.toggleShow}>{show ? 'Hide Profile' : 'Show Profile'}</button>
        {show && (
          <div className="person-profile">
            <img width="300px" src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <div>
          {show && <Profile/>}
        </div>
      </div>
    );
  }
}

export default App;
