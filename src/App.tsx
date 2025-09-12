import './App.css'
import { NavigationBar } from './components/Navigation'
import { Route, Routes } from 'react-router'
import { About } from './containers/About'
import { Experiance } from './containers/Experiance'
import { Projects } from './containers/Projects'
import { Home } from './containers/Home'
import { Contact } from './containers/Contact'
import { Skills } from './containers/Skills'
import { Footer } from './components/Footer'
import { MyThree } from './graphics-threejs'
import { ErrorBoundery } from './components/ErrorBoundry'
function App() {

  return (
    <div className='min-h-screen bg-gray-900 w-full'>
      <NavigationBar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='graphics' element={<MyThree />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <ErrorBoundery>
          <Route path='experience' element={<Experiance />} />
        </ErrorBoundery>

        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
        <Route path='skills' element={<Skills />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
