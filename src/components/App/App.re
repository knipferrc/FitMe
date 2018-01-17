open Utils;

requireCSS("./App.css");

requireCSS("fit.css/dist/fit.min.css");

let component = ReasonReact.statelessComponent("App");

let make = _children => {
  ...component,
  render: _self =>
    <nav className="nav bg-blue">
      <div className="nav-top">
        <div className="nav-brand text-white">
          (ReasonReact.stringToElement("FitMe"))
        </div>
        <div className="nav-right">
          <button className="btn bg-grey">
            (ReasonReact.stringToElement("Account"))
          </button>
        </div>
      </div>
      <div className="nav-links">
        <a className="nav-link text-white" href="#!">
          (ReasonReact.stringToElement("Home"))
        </a>
        <a className="nav-link text-white" href="#!">
          (ReasonReact.stringToElement("Workouts"))
        </a>
        <a className="nav-link text-white" href="#!">
          (ReasonReact.stringToElement("Schedule"))
        </a>
      </div>
    </nav>
};
