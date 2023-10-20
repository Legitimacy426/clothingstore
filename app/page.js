import Image from 'next/image'
import Nav from './navbar/Nav'
import Hero from './hero/Hero'
import Categories from './categories/Categories'
import Events from './events/Events'
import Products from './products/Products'
import Footer from './footer/Footer'
import Contact from './contact/ContactUs'


export default function Home() {
  return (
<>
<Nav />
<Hero />
<Categories />
<Events />
<Products />
<Contact />
<Footer />
<h1>
  
</h1>
</>
  )
}
