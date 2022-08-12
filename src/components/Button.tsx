type Props = {
  bgButton: string;
  children: JSX.Element;
};
const Button = ({ bgButton, children }: Props) => {
  return (
    <button className={`h-14 w-72 rounded-md ${bgButton}`} type="button">
      {children}
    </button>
  );
};
export default Button;
