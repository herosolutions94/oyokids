import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer-main">
        <div className="contain">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/images/logo.png" alt="Oyo Kids" className="footer-logo" />
              <p className="footer-about">
                Gamified English learning for primary school teachers worldwide. 
                Where every lesson feels like play.
              </p>
            </div>

            <div className="footer-col">
              <h4>Platform</h4>
              <Link href="#features">Features</Link>
              <Link href="#lessons">Lessons</Link>
              <Link href="#how">How It Works</Link>
              <Link href="#pricing">Pricing</Link>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <Link href="#">Teacher Guide</Link>
              <Link href="#">Blog</Link>
              <Link href="#faq">FAQ</Link>
              <Link href="contact">Contact</Link>
            </div>

            <div className="footer-col">
              <h4>Legal</h4>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Use</Link>
              <Link href="#">GDPR</Link>
              <Link href="#">Cookies</Link>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">© 2026 Oyo Kids. All rights reserved.</div>
            <div className="footer-links">
              <a href="https://oyokids.com">oyokids.com</a>
              <a href="https://oyokids.fr">oyokids.fr</a>
              <a href="mailto:hello@oyokids.com">hello@oyokids.com</a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-color-strip"></div>
    </>
  );
}