import { useState } from 'react';

export default function Home() {
  const [showRagdollImage, setShowRagdollImage] = useState(false);

  const toggleRagdollImage = () => {
    setShowRagdollImage(!showRagdollImage);
  };

  return (
    <body>
      <div className="container">
        <header>
          <h1>Cats</h1>
        </header>
        <main>
          <section>
            {/* ... (your existing content) */}
          </section>
          <h3>The most popular cats</h3>
          <ul>
            <li>
              <strong>Ragdoll</strong>
            </li>
            {showRagdollImage && (
              <img
                src="https://cat-world.com/wp-content/uploads/2017/06/ragdoll-kitten-2.jpg"
                alt="Ragdoll Kitten"
                width="320"
                height="240"
              />
            )}
            <li>Exotic Shorthair</li>
            <li>British Shorthair</li>
          </ul>
          <button onClick={toggleRagdollImage}>
            {showRagdollImage ? 'Hide Ragdoll Image' : 'Show Ragdoll Image'}
          </button>
          <h2>Wikipedia Page</h2>
          {/* ... (your existing iframe) */}
        </main>
      </div>
      <footer>
        <strong>Cats are amazing</strong>
      </footer>
    </body>
  );
}
