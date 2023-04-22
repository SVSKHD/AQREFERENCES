const AqNameIconButton = (props) => {
  const { name, icon, email } = props;
  return (
    <>
      <div className="btn-group" role="group">
        <button
          id="btnGroupDrop1"
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {name} {icon}
        </button>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <a className="dropdown-item" href="#">
            {email}
          </a>
          <a className="dropdown-item" href="#">
            Dashboard
          </a>
        </div>
      </div>
    </>
  );
};

export default AqNameIconButton
