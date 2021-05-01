export default ({ store, redirect, route }) => {
  const activeUser = store.state.user

  // If user NOT logged in & trying to access protected route => Redirect to Home
  if (!activeUser && route.name === 'todos') redirect('/')

  // If user IS logged in & not at Todos route => Redirect to Todos
  if (activeUser && route.name !== 'todos') redirect('/todos')
}
