import './App.css'
import Navigation from './components/Navigation'

function App() {
  return (
    <section>
      <div className="container">
        <Navigation />

        <div className="banner__container">
          <div className="banner__content">
            <h1>Make remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline processes,
              create team rituals, and watch productivity soar.</p>

            <button href="#">Learn more</button>

            <div className="banner__clients">
              <img src="images/client-databiz.svg" alt="client-databiz" height="16" />
              <img src="images/client-audiophile.svg" alt="client-audiophile" height="24" />
              <img src="images/client-meet.svg" alt="client-meet" height="16" />
              <img src="images/client-maker.svg" alt="client-maker" heigh="16" />
            </div>
          </div>

          <img className="banner__image" src="images/image-hero-desktop.png" alt="" />
          <img className="banner__image_mobile" src="images/image-hero-mobile.png" alt="" />
        </div>
      </div>
    </section >
  )
}

export default App
