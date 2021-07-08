import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

export class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <LanguageStore>
        <div className="ui container">
          <LanguageSelector onLanguageChange={this.onLanguageChange} />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </div>
      </LanguageStore>
    );
  }
}

export default App;
