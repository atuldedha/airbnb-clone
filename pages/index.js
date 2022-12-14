import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({exploreData, constData}) {
  
  return (

    <div className="">
      
      <Head>
        <title>AirBnb-CLone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main className = "max-w-7xl mx-auto px-8 sm:px-16" >

        <section className = "pt-6">

          <h2 className = "text-4xl font-semibold pb-5 ">Explore Nearby</h2>
          
          <div className = "grid grid-clos-1 sm:grid-clos-2 lg:grid-cols-3 xl:grid-cols-4">

            {exploreData?.map((item) => (

              <SmallCard 
                key = {item.img} 
                img = {item.img} 
                location = {item.location} 
                distance = {item.distance} 
              />
            ))}

          </div>
          
        </section>

        <section>

          <h2 className = "text-4xl font-semibold py-8" >Live Anywhere</h2>
              
          <div className = "flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 ">

            {constData.map((item) => (

              <MediumCard
                key = {item.img} 
                img = {item.img} 
                title = {item.title} 

              />    

            ))}

          </div>
          
        
        </section>

        <LargeCard className = "" 
          img = "https://links.papareact.com/4cj"
          title = "The Greatest Outdoors"
          description = "Wishlist Curated b Airbnb"
          buttonText = "Get Inspired"
        />

      </main>

      <Footer />
    
    </div>
  )
}


export async function getStaticProps() {

  const exploreData = await fetch(`https://links.papareact.com/pyp`).
    then((res) => res.json())


  const constData = await fetch(`https://links.papareact.com/zp1`).
    then((res) => res.json())

    return {

      props: {

        exploreData,
        constData
      }
    }
}