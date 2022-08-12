type Props = {
  children: JSX.Element;
};

const ButtonCard = ({ children }: Props) => {
  return (
    <button className="h-44 w-36 rounded-md shadow-cardS" type="button">
      {children}
    </button>
  );
};
export default ButtonCard;
