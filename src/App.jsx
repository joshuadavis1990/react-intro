import Greeting from "./Greeting"
import "./App.css"

const age = 10 * 5

function App() {
  return (
    <>
      <h1>Hello, World</h1>
      <Greeting foo="bar" name="Matt" age={age} />
      <Greeting />
      <p>I am learning React</p>
      <Greeting />
    </>
  )
}

export default App
