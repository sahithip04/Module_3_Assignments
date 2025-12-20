import { useRef, useState } from "react";

function App() {
  const [videos] = useState([
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  ]);

  
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Video Player Using useRef</h1>
      <video
        ref={videoRef}
        width="500"
        src={videos[currentVideoIndex]}
      />

      
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => videoRef.current.play()}>
          ▶️ Play
        </button>

        <button onClick={() => videoRef.current.pause()}>
          ⏸ Pause
        </button>

        <button onClick={() => (videoRef.current.currentTime += 5)}>
          ⏩ Forward
        </button>

        <button onClick={() => (videoRef.current.currentTime -= 5)}>
          ⏪ Rewind
        </button>
      </div>

      
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() =>
            setCurrentVideoIndex(
              (prev) => (prev - 1 + videos.length) % videos.length
            )
          }
        >
          ⏮ Previous
        </button>

        <button
          onClick={() =>
            setCurrentVideoIndex(
              (prev) => (prev + 1) % videos.length
            )
          }
        >
          ⏭ Next
        </button>
      </div>
    </div>
  );
}

export default App;
