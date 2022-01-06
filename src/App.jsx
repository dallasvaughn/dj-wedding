import './styles.scss';
import img from './images/1 1.png';

const App = () => {
  return (
    <>
      <section className="hero">
        <h1>
          Dillon <span className="and">&amp;</span> Lindsey
        </h1>
        <nav className="hero__nav">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#invite">RSVP</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#registry">REGISTRY</a>
            </li>
            <li>
              <a href="#events">EVENTS</a>
            </li>
            <li>
              <a href="#travel">TRAVEL</a>
            </li>
          </ul>
        </nav>
        <img src={img} alt="Dillon and Lindsey" />
        <p>
          <em>Please join us for a wedding celebration on</em>
        </p>
        <div className="date">June 22, 2022</div>
      </section>

      <section className="story">
        <h2>Our Story</h2>
        <p>
          Six years ago on a cold and windy night, November 22nd, 2015 to be
          exact, Lindsey was invited to hang out with a few new friends. Lindsey
          agreed and drove 45 minutes from Glendale to Santa Clarita to a house
          she had never seen before, but would soon never forget. At the side
          door, she knocked three times. The door swung open to reveal a
          shockingly tall blonde boy named Dillon who invited her in. It was his
          house after all! That evening hangout with friends turned into a month
          of adventures and nonstop texting until finally, they made it official
          on December 22nd, 2015. And the rest, as they say, is history.
        </p>
        <p>
          Three years later, on December 22nd, 2018 they celebrated their
          anniversary at Disneyland. Little did Lindsey know that their Downtown
          Disney dinner reservation at Catal was for far more people than two.
          Dillon surprised Lindsey with both of their families already sitting
          at a fireside table. Surrounded by their loved ones, Dillon got down
          on one knee and proposed to Lindsey.
        </p>
        <p>
          Finally, after three years of engagement, they are so excited to start
          the next phase of their lives together on June 22nd, 2022!
        </p>
      </section>

      {/*<section className="invite" id="invite">
        <h2>You're Invited</h2>
        <div className="divider"></div>
        <h3>Enter the name on your invitation</h3>
        <input type="text" placeholder="e.g. John and Jane Doe" />
        <button>Find RSVP</button>
        <p>
          <i className="fas fa-exclamation-triangle"></i>We're sorry, we cannot
          find your RSVP.
        </p>
  </section>*/}

      <section className="registry" id="registry">
        <h2>Gift Registry</h2>
        <p>
          We're lucky to already have a home full of everything we need, so
          instead of objects, we've decided to put together a registry of
          experiences.
        </p>
        <p>
          Please enjoy browsing our Honeyfund wish list, where you can
          contribute funds to our dream honeymoon! (It's safe, secure, and
          easy.) If you'd prefer to gift something more traditional, we've also
          included gift cards to some of our favorite places.
        </p>
        <p>Thank you and we can't wait to see you on our big day!</p>
        <a
          href="https://www.honeyfund.com/wedding/jacobson-erstad-06-22-2022"
          target="_blank"
          rel="noreferrer"
        >
          View Registry
        </a>
      </section>

      <section className="faq" id="faq">
        <h2>FAQ</h2>
        <div className="list">
          <p className="question">What should I wear? Is there a dress code?</p>
          <p className="answer">
            The dress code for our wedding is semi-formal/cocktail attire.
            Ladies should wear cocktail dresses, and the gentlemen should wear a
            suit and tie or a sports coat.
          </p>
          <p className="question">What should I do if I can’t make it?</p>
          <p className="answer">
            You will be missed! If you can not make it to the wedding, please
            let us know as soon as possible and RSVP “no,” so we can plan
            accordingly.
          </p>
          <p className="question">Are kids welcome?</p>
          <p className="answer">
            While we love your little ones, our wedding is going to be an
            adults-only event so that everyone can relax and enjoy the evening.
            The only exception to this will be teenagers age 13 or older. We
            appreciate you making arrangements ahead of time and leaving the
            kids at home so you can celebrate with us.
          </p>
          <p className="question">Can I bring a date?</p>
          <p className="answer">
            We have a strict guest list to stay on budget. Our wedding is
            strictly RSVP only. We will only able to accommodate those listed on
            your invitation.
          </p>
          <p className="question">
            I still have questions, what is the best way to contact you?
          </p>
          <p className="answer">
            You can reach out to Lindsey or Dillon through phone call, text, or
            email, or simply by submitting a contact request{' '}
            <a href="/">HERE</a>.
          </p>
        </div>
      </section>

      <section className="events" id="events">
        <h2>Events</h2>
        <div className="divider"></div>
        <h3>Wedding Ceremony</h3>
        <div className="time">
          <p>5:00 PM</p>
          <p>Ceremony Garden</p>
        </div>
        <h3 className="reception">Reception</h3>
        <div className="time">
          <p>7:00 PM</p>
          <p>Club House</p>
        </div>
      </section>

      <section className="travel" id="travel">
        <h2>Travel</h2>
        <div className="divider"></div>
        <h3>Hampton Inn &amp; Suites San Clemente</h3>
        <div className="address">
          <em>Hotel Block Information Coming Soon.</em>
          <div>
            <p>2481 S El Camino Real</p>
            <p>San Clemente, CA 92672</p>
          </div>
        </div>
        <a
          href="https://www.hilton.com/en/hotels/laxschx-hampton-suites-san-clemente/"
          target="_blank"
          rel="noreferrer"
        >
          VISIT WEBSITE
        </a>
        <div className="divider2"></div>
        <h3 className="guide">City Guide</h3>
        <p className="visit">Check out fun things to do during your visit.</p>
        <a
          href="https://www.sanclementeguide.com/"
          target="_blank"
          rel="noreferrer"
        >
          VISIT WEBSITE
        </a>
      </section>

      <footer>
        <nav>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#invite">RSVP</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#registry">REGISTRY</a>
            </li>
            <li>
              <a href="#events">EVENTS</a>
            </li>
            <li>
              <a href="#travel">TRAVEL</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default App;
