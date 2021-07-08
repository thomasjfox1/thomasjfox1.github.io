import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


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
        <p><b>Hello! My name is Thomas.</b> I am a software engineer, marathoner, and avid reader with deep interest in climate, technology, and complex systems 
          based in Chicago, IL. I am currently a <b>Director of Software Engineering</b> at <a className="bold link" href="http://www.mediaocean.com" target="_blank">Mediaocean</a>.
          I have a <b>B.S. in Computer Science</b> from Loyola University Chicago.</p>
        <p>I spend much of my free time researching and exploring the confluence of technology, design, and climate change.
          I love to <a className="link" href="https://www.strava.com/athletes/16679686" target="_blank">run / bike</a>, cook / bake, travel, and <Link href="/reading">read</Link>. 
          I also enjoy <a className="link" href="https://www.instagram.com/thomasjfox_/" target="_blank">photography</a> and hiking.</p>
        <p>You can find me on <a className="bold link" href="https://www.github.com/thomasjfox1/" target="_blank">GitHub</a>, <a className="link" href="https://www.twitter.com/thomasjfox_/" target="_blank">Twitter</a>, and <a className="link" href="https://www.linkedin.com/in/thomasjfox1/" target="_blank">LinkedIn</a>.</p>
      </main>

      <footer>

      </footer>
    </>
  )
};
