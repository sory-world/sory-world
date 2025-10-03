const BackButton = ({
  handleBack,
  contrast = false,
}: {
  handleBack: () => void;
  contrast?: boolean;
}) => {
  return (
    <button className="nav__link " onClick={handleBack}>
      <span className={contrast ? "contrast-text" : ""}>{`<<<`}</span>
    </button>
  );
};

export default BackButton;
