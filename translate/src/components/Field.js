import React from "react";
import LanguageContext from "../contexts/LanguageContext";

// class Field extends React.Component {
//   render() {
//     return (
//       <div className="ui field">
//         <LanguageContext.Consumer>
//           <label>{(value) => (value === "english" ? "Vame" : "Naam")}</label>
//         </LanguageContext.Consumer>\
//         <input />
//       </div>
//     );
//   }
// }

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context.language === "english" ? "Name" : "Naam";

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
