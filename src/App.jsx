import './App.scss'
import Header from './components/Header/Header'
import MainNew from './components/Main Landing/MainNew'
import NewsList from './components/Main Landing/NewsList'
import SubLanding from './components/Sub Landing/SubLanding'
function App() {

  return (
    <>
      <main>
        <Header/>
        <MainNew/>
        <NewsList/>
        <SubLanding/>
      </main>
    </>
  )
}

export default App
