type Props = {
  bgButton: string;
  bgAction: React.MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element;
};
const Button = ({ bgButton, bgAction, children }: Props) => {
  return (
    <button
      onClick={bgAction}
      className={`h-14 w-72 rounded-md ${bgButton}`}
      type="button"
    >
      {children}
    </button>
  );
};
export default Button;
