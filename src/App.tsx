import './App.css'
import Header from './components/Header'

function App(props: {
  child?: JSX.Element
}) {

  return (
    <div>
      <Header pageTitle='Pokemon Store' />
      <h2>
        {content()}
      </h2>
    </div>
  )

  function content() {
    if (props.child) {
      return props.child;
    }

    return 'Welcome to the Pokemon Store. Wow!';
  }
}

export default App
