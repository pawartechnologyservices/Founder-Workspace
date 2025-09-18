function App() {
  return (
    <AuthProvider>
      <YourAppComponent />
    </AuthProvider>
  );
}

function YourAppComponent() {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ id: '1', name: 'John Doe', email: 'john@example.com' })}>
          Login
        </button>
      )}
    </div>
  );
}