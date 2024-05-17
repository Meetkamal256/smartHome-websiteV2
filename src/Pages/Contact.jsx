import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div class="container">
        <aside>
          <h4>Get in touch</h4>
          <p>
            We'd love to get in touch with you. our friendly team is here to
            chat.
          </p>
          
          <div class="info">
            <article>
              <span class="icon"></span>
              <div class="details">
                <h5>Chat with us</h5>
                <small>Send us an email we'll respond shortly.</small>
                <p>meetkamal256@gmail.com</p>
              </div>
            </article>
            <article>
              <span class="icon"></span>
              <div class="details">
                <h5>Office</h5>
                <small>Come say hello to our office HQ.</small>
                <p>123 Mills Street</p>
                <p>East Airport, Accra</p>
              </div>
            </article>
            <article>
              <span class="icon"></span>
              <div class="details">
                <h5>Phone</h5>
                <small>Mon-Fri 9am - 5pm</small>
                <p>+123 456 789 10</p>
                <p>East Airport, Accra</p>
              </div>
            </article>
          </div>
        </aside>
        
        <form action="https://formspree.io/f/xoqgrdpa" method="POST">
          <input type="text" name="name" placeholder="Your name" required />
          <input
            type="email"
            name="Email Address"
            placeholder="you@yourcompany.com"
            required
          />
          <input
            type="number"
            name="Phone Number"
            placeholder="Phone Number"
            required
          />
          <textarea name="Message" placeholder="Message" required></textarea>
          <button type="submit" class="btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
