const Button = ({ children, onClick, className }) => {
  return (
    <>
      <button className={`cursor-pointer ${className}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
