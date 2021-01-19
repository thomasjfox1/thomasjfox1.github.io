import Head from 'next/head';
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <Head>
        <title>Thomas J. Fox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          src={'/portrait.jpg'}
          width={1200}
          height={750}
          layout='intrinsic'
        />
        <br/>
        <br/>
        <p><b>Hello! My name is Thomas.</b> I am a software engineer, manager, marathoner, and avid reader with deep interest in climate, technology, and complex systems 
          based in Chicago, IL. I am currently a <b>Senior Engineering Manager</b> at <a className="bold link" href="http://www.mediaocean.com" target="_blank">Mediaocean</a>.
          I have a <b>B.S. in Computer Science</b> from Loyola University Chicago.</p>
        <p>I spend much of my free time researching and exploring the confluence of technology, design, risk, and climate change.
          I love to <a className="link" href="https://www.strava.com/athletes/16679686" target="_blank">run / bike</a>, cook / bake, travel, and read (currently: <a className="link" href="https://bookshop.org/books/the-black-swan-second-edition-the-impact-of-the-highly-improbable-with-a-new-section-on-robustness-and-fragility" target="_blank">
          <i>The Black Swan: Second Edition: The Impact of the Highly Improbable</i></a> and 
          Issac Asimov's <a className="link" href="https://bookshop.org/books/foundation-9780808520788/9780553293357" target="_blank"><i>Foundation</i></a>). 
          I also enjoy <a className="link" href="https://www.instagram.com/thomasjfox_/" target="_blank">photography</a> and hiking.</p>
        <p>You can find me on <a className="bold link" href="https://www.github.com/thomasjfox1/" target="_blank">GitHub</a>, <a className="link" href="https://www.twitter.com/thomasjfox_/" target="_blank">Twitter</a>, and <a className="link" href="https://www.linkedin.com/in/thomasjfox1/" target="_blank">LinkedIn</a>.</p>
        <p>Here is a <a className="bold link" href="resume.pdf" target="_blank">link to my resume</a>.</p>
      </main>

      <footer>

      </footer>
    </>
  )
};
