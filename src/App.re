open Utils;

requireCSS("fit.css/dist/fit.min.css");

let component = ReasonReact.statelessComponent("App");

let make = (~message, _children) => {
  ...component,
  render: _self =>
    <button className="btn btn-primary">
      (ReasonReact.stringToElement(message))
    </button>
};
