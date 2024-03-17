const Home = () => {
  const handleClick = () => {
    console.log("Hello, lanjas");
  };

  const handleClickAgain = (name) => {
    console.log("Hello" + name);
  };

  return (
    <div className="Home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClickAgain(" lanjas")}>
        Click Me Again
      </button>
    </div>
  );
};

export default Home;
