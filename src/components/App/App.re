open AssetUtils;

open StringUtils;

requireCSS("./App.css");

requireCSS("fit.css/dist/fit.min.css");

let component = ReasonReact.statelessComponent("App");

let make = _children => {
  ...component,
  render: _self =>
    <nav className="nav bg-blue">
      <div className="nav-top">
        <div className="nav-brand text-white"> (str("FitMe")) </div>
        <div className="nav-right">
          <button className="btn bg-grey"> (str("Account")) </button>
        </div>
      </div>
      <div className="nav-links">
        <a className="nav-link text-white" href="#!"> (str("Home")) </a>
        <a className="nav-link text-white" href="#!"> (str("Workouts")) </a>
        <a className="nav-link text-white" href="#!"> (str("Schedule")) </a>
      </div>
    </nav>
};
