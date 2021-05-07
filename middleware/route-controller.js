export default ({ store, redirect, route }) => {
  const activeUser = store.state.user
  const isTodosRoute = route.name === 'todos'

  // If user NOT logged in & trying to access protected route => Redirect to Home
  if (!activeUser && isTodosRoute) redirect('/')

  // If user IS logged in & not at Todos route => Redirect to Todos
  if (activeUser && !isTodosRoute) redirect('/todos')
}
