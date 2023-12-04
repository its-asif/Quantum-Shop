
import './App.css'
import Banner from './components/home/banner'
import Brands from './components/home/Brands'
import Testimonial from './components/home/Testimonial'
import Subscription from './components/home/Subscription'

function App() {

  return (
    <>
      <Banner></Banner>
      <h1 className="text-2xl md:text-5xl font-bold text-center mb-6 mt-20">Featured Brands</h1>
      <Brands></Brands>
      <Subscription></Subscription>
      <Testimonial></Testimonial>
    </>
  )
}

export default App
