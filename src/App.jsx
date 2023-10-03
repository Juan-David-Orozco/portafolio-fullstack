import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, FrontPage, BackPage, StackPage, NotFoundPage } from './pages/indexPajes'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTableCells, faList, faPlus, faXmark, faSearch, faSquareXmark, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faTableCells, faList, faPlus, faXmark, faSearch, faSquareXmark, faBars)

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid main-container px-0">
          <Routes>
            <Route path='/portafolio-fullstack' element={<HomePage />} />
            <Route path='/portafolio-fullstack/frontend' element={<FrontPage />} />
            <Route path='/portafolio-fullstack/backend' element={<BackPage />} />
            <Route path='/portafolio-fullstack/fullstack' element={<StackPage />} />
            <Route path="/portafolio-fullstack/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
