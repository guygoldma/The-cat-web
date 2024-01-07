import WebsiteScreen from '@/lib/components/website-screen';
import { COURSE_WELCOME_TEXT } from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';
'use client';
import { useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDefaultColor, setDefaultColor] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  return (
    <body>
      <header>
        <h1> Cats </h1>
      </header>
      <div>
        <main>
          <section>
            <p>
              The cat (Felis catus), commonly referred to as the domestic <em> cat or house cat </em>, is the only domesticated species in the family Felidae. <br></br> Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. <br></br> It is commonly kept as a house pet and farm cat, but also ranges freely as a feral cat avoiding human contact. It is valued by humans for companionship and its ability to kill vermin. <br></br> Because of its retractable claws it is adapted to killing small prey like mice and rats. It has a strong flexible body, <br></br> quick reflexes, sharp teeth, and its night vision and sense of smell are well developed.<br></br> It is a social species, but a solitary hunter and a crepuscular predator. <br></br> Cat communication includes vocalizations like meowing, purring, trilling, hissing, growling, and grunting as well as cat body language. <br></br> It can hear sounds too faint or too high in frequency for human ears, such as those made by small mammals.<br></br> It also secretes and perceives pheromones.
            </p>
          </section>
          <h3> The most popular cats </h3>
          <ul>
            <li> <strong> Ragdoll </strong> </li>
            <button onClick={toggleVisibility}>Super cute cat</button>
            {isVisible && (
              <img src="https://cat-world.com/wp-content/uploads/2017/06/ragdoll-kitten-2.jpg" width="320" height="240" alt="Ragdoll Cat" />
            )}
            <section id="youtube">
            <p>Watch a video about Ragdoll cats on YouTube:</p>
            <a href="https://www.youtube.com/watch?v=vHveLJH6K0Y" target="_blank" rel="noopener noreferrer">You need it</a>
          </section>
            <li> <strong> Exotic Shorthair </strong> </li>
            <li> <strong> British Shorthair </strong> </li>
          </ul>
          <section id="wiki">
            <h2> Wikipedia Page</h2>
            <iframe src="https://en.wikipedia.org/wiki/Ragdoll" width="1000" height="500"></iframe>
          </section>
        </main>
      </div>
      <footer> <strong>Cats are amazing</strong> </footer>
      <script src="app.js" defer></script>
    </body>
  );
}
