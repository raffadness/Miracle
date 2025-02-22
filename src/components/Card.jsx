const Card = ({ children, className }) => {
  return (
    <>
      <div
        className={`rounded-4xl ring shadow-[0_7px_0] shadow-black ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
