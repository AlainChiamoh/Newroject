const AuthContext = React.createContext(null);

export const signIn = async (email, password) => {
    const creds = Realm.Credentials.emailPassword(email, password);
    const newUser = await app.logIn(creds);
    setUser(newUser);
  };

export const signUp = async (email, password) => {
    await app.emailPasswordAuth.registerUser({ email, password });
  };

export  const signOut = () => {
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    user.logOut();
    setUser(null);
  };

  export default AuthContext.Provider;