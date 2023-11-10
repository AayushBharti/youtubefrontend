import HeaderComponent from "./Header";
import "./LoginComponent.css";

function LoginComponent() {
  return ( 

    <div className="login-container">
    
    <h2>Login</h2>
    <form className="login-form" >
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        // value={username}
        // onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>
    </form>
  </div>
  );
}

export default LoginComponent;
