import React, { Component } from "react";
 
class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      play: true,
      pause: false,
    }

    this.url = "C:\Users\taylor2424\Desktop\devfolder\CodingChallengeWebApplication\public\sounds\John-Cena-Ringtone-2.mp3";
    this.audio = new Audio(this.url);
  }

      render() {
        this.audio.play();
        return (
            <div>
              <h1>Home page</h1>
              <ul className="header">
                <li><a href="/">Home</a></li>
                <li><a href="/stuff">Stuff</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
              <div className="content">
                 
              </div>
            </div>
        );
  }
}

export default HomePage;