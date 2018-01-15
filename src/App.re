open Utils;

requireCSS("pastel.css/dist/pastel.min.css");

let component = ReasonReact.statelessComponent("App");

let make = (~message, _children) => {
  ...component,
  render: _self =>
    <button className="btn btn">
      (ReasonReact.stringToElement(message))
    </button>
};
