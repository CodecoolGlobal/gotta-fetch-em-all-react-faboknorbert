function Welcome({ setUsername, handleNameSubmit }) {
  return (
    <div className="welcome">
      <h1>Welcome to Our Pokémon App!</h1>
      <label htmlFor="username">What is your name?</label>
      <input
        type="text"
        id="username"
        placeholder="Enter name here"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleNameSubmit}>Submit</button>
    </div>
  );
}

export default Welcome;