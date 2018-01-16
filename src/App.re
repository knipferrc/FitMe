open Utils;

requireCSS("fit.css/dist/fit.min.css");

let component = ReasonReact.statelessComponent("App");

let make = _children => {
  ...component,
  render: _self =>
    <nav className="nav bg-blue">
      <div className="nav-brand text-white">
        (ReasonReact.stringToElement("FitMe"))
      </div>
    </nav>
};
