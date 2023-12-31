import './App.css'
import Header from './components/Header'

function App(props: {
  child?: JSX.Element
}) {

  return (
    <div>
      <Header pageTitle='Pokemon Store' />
      <div className='content-container'>
        {content()}
      </div>
    </div>
  )

  function content() {
    if (props.child) {
      return props.child;
    }

    return "Welcome to the Pokemon Store. Wow! Go to the Featured Items page for today's selection";
  }
}

export default App
