import React, { useState, useRef, useEffect } from 'react';

const youtubeLinks = [
  "https://youtu.be/_mXMy57Eptg", // Música electrónica
  "https://www.youtube.com/watch?v=kXYiU_JCYtU", // Emo clásico
  "https://youtu.be/jrXC4AEc1gc", // Indie relajante
  "https://youtu.be/8sDjsM4asSo", // Jazz experimental
  "https://youtu.be/Svnxrfq8ksA", // Rock alternativo
  "https://youtu.be/WsvYPRqSH28", // Música ambiental
  "https://youtu.be/t9PIbvZ-qZc", // Música clásica contemporánea
  "https://youtu.be/ZuenaXgen3k", // Música experimental
  "https://youtu.be/gaxbVfsoF6Q", // Música de meditación
  "https://youtu.be/bnkjvpBigVY", // Música de fusión
  "https://youtu.be/Nb_lsnx8BoQ", // Música de fusión jazz
  "https://youtu.be/oUSZ42Lw8nw", // Música de fusión electrónica
  "https://youtu.be/KEQ8DvxVjvE", // Música de fusión acústica
  "https://youtu.be/1z8b7Z5k2aY", // Música de fusión instrumental
  "https://youtu.be/gp-rOW0x3Qg", // Música de fusión experimental
  "https://youtu.be/S7gMzYqXIZc", // Música de fusión contemporánea
  "https://youtu.be/bUkJLkoh3kA", // Música de fusión acústica contemporánea
  "https://youtu.be/A2a-Vd8Xjgw", // Música de fusión electrónica contemporánea
  "https://youtu.be/5ZDsCJ4rGD4", // Música de fusión instrumental contemporánea
  "https://youtu.be/6THHrPyZQuQ", // Música de fusión experimental contemporánea
  "https://youtu.be/gfiqW1WaGbw", // Música de fusión jazz contemporánea
  "https://youtu.be/JdoUHEwNtQI", // Música de fusión acústica experimental
  "https://youtu.be/rud0XHQza1Q", // Música de fusión electrónica experimental
  "https://youtu.be/zayX1YXiP6Y", // Música de fusión instrumental experimental
  "https://youtu.be/79ekIn_ofPU", // Música de fusión contemporánea experimental
  "https://youtu.be/2ORWuBqSD5g", // Música de fusión jazz experimental
  "https://youtu.be/5R1RGl4WQP8", // Música de fusión acústica contemporánea experimental
  "https://youtu.be/7-Ikexq03O0", // Música de fusión electrónica contemporánea experimental
  "https://youtu.be/vWFPduhaUB4", // Música de fusión instrumental contemporánea experimental
  "https://youtu.be/4gOMr9xK0bI", // Música de fusión jazz contemporánea experimental
  "https://youtu.be/UEoU6VbHs2c", // Música de fusión acústica contemporánea experimental
  "https://youtu.be/m7Bc3pLyij0", // Música de fusión electrónica contemporánea experimental
  "https://youtu.be/znfUCneKfZc", // Música de fusión instrumental contemporánea experimental
  "https://youtu.be/vnKHgAsOha0", // Música de fusión jazz contemporánea experimental
  "https://youtu.be/zA4ojCjyXH4", // Música de fusión acústica contemporánea experimental
  "https://youtu.be/AZRPgLxvxKk", // Música de fusión electrónica contemporánea experimental
  "https://youtu.be/_49_ePYFYRc", // Música de fusión instrumental contemporánea experimental
  "https://youtu.be/uCHqWl_uowo", // Música de fusión jazz contemporánea experimental"
  "https://youtu.be/ApXoWvfEYVU", // Música de fusión acústica contemporánea experimental
  "https://youtu.be/pXRviuL6vMY", // Música de fusión electrónica contemporánea experimental
  "https://youtu.be/RBumgq5yVrA", // Música de fusión instrumental contemporánea experimental
  "https://youtu.be/a1Femq4NPxs", // Música de fusión jazz contemporánea experimental
  "https://youtu.be/y9LlnLTH87U", // Música de fusión acústica contemporánea experimental
  "https://youtu.be/QZx2kGE6L9o", // Música de fusión electrónica contemporánea experimental
  "https://youtu.be/VA6VRwBI3N4", // Música de fusión instrumental contemporánea experimental
  "https://youtu.be/p9AB6WJMla4",
  "https://youtu.be/Cq0jaj-eocI",
  "https://youtu.be/JWRlTezTF2k",
  "https://youtu.be/MlnRO2FwojA",
  "https://youtu.be/Q4Js9OEODHM",
  "https://youtu.be/rd5YDHcTcEk",
  "https://youtu.be/2aksg6gYUU4",
  "https://youtu.be/_XBOPkbqrgU",
  "https://youtu.be/vSCo_mIPWXc",
  "https://youtu.be/mNu-QCrsEqE",
  "https://youtu.be/SuN_FesgwIE",
  "https://youtu.be/MldGX_mbS-o",
  "https://youtu.be/aBSkvI0CkgU",
  "https://youtu.be/CPK_IdHe1Yg",
  "https://youtu.be/a5uQMwRMHcs",
  "https://youtu.be/tG7wLK4aAOE",
  "https://youtu.be/IvPT2QuCIOA",
  "https://youtu.be/foE1mO2yM04",
  "https://youtu.be/jFJPXgZDBB8",
  "https://youtu.be/-hOCneQkLlU",


];


export default function App() {
  const [scanning, setScanning] = useState(false);
  const [message, setMessage] = useState("Esperando entrada emocional...");
  const [cameraReady, setCameraReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (cameraReady && videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => {
          console.error("Error accediendo a la cámara:", err);
          setMessage("No se pudo acceder a la cámara");
        });
    }
  }, [cameraReady]);

  const startScan = () => {
    setScanning(true);
    setCameraReady(true);

    const messages = [
      "Analizando expresiones faciales...",
      "Midiendo tono emocional de voz...",
      "Leyendo microgestos corporales...",
      "Identificando patrones creativos...",
      "Generando perfil sonoro...",
    ];

    let index = 0;
    const interval = setInterval(() => {
      setMessage(messages[index]);
      index++;
      if (index >= messages.length) {
        clearInterval(interval);
        const randomSong = youtubeLinks[Math.floor(Math.random() * youtubeLinks.length)];
        window.location.href = randomSong;
      }
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Synesthesia.AI</h1>
      {cameraReady && (
        <video
          ref={videoRef}
          autoPlay
          style={styles.video}
          playsInline
          muted
        />
      )}
      <p style={styles.text}>{message}</p>
      {!scanning && (
        <button style={styles.button} onClick={startScan}>
          Iniciar Escaneo Emocional
        </button>
      )}
      {scanning && <div className="loader" style={styles.loader}></div>}
    </div>
  );
}

const styles = {
  container: {
    background: '#111',
    color: '#fff',
    fontFamily: 'monospace',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  video: {
    width: '300px',
    height: '225px',
    borderRadius: '10px',
    marginBottom: '1rem',
    border: '2px solid #0ff'
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '2rem'
  },
  button: {
    padding: '1rem 2rem',
    background: '#0ff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  loader: {
    border: '8px solid #444',
    borderTop: '8px solid #0ff',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: 'spin 1s linear infinite'
  }
};
