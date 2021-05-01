export default ({ store, redirect, route }) => {
  const activeUser = store.state.user

  if (!activeUser && route.name === 'todos') redirect('/')
  if (activeUser && route.name !== 'todos') redirect('/todos')
}
