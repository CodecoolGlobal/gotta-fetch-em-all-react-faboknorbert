function Welcome({ userData, setUserData, handleNameSubmit }) {
  const handleUsernameChange = (e) => {
    setUserData(prevState => ({
      ...prevState,
      username: e.target.value,
    }));
  };

  const isUsername = userData.username.trim() !== '';

  return (
    <div className="welcome">
      <h1>Welcome to Our Pokémon App!</h1>
      <label htmlFor="username">What is your name?</label>
      <input
        type="text"
        id="username"
        placeholder="Enter name here"
        onChange={handleUsernameChange}
        required
      />
      <button onClick={handleNameSubmit} disabled={!isUsername}>Next Step</button>
    </div>
  );
}

export default Welcome;