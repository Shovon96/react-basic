import './App.css'
import Card from './components/card'
import UsingState from './components/UseState'

function App() {
  return (
    <>
      <h1 className='text-5xl text-center font-bold mt-4 text-primary'>Hello React</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-12'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>

      <UsingState></UsingState>
    </>
  )
}

export default App
