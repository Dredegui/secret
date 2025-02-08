import { useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";

export default function ValentinePage() {
  const [response, setResponse] = useState("");

  return (
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <h1 style={{ fontSize: '80px', color: 'red', marginBottom: '20px' }}>
        Anjesa, will you be my Valentine? ❤️
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        <InstagramEmbed url="https://www.instagram.com/p/DFa0u4mpIYw/?hl=en" width={320} />
        <InstagramEmbed url="https://www.instagram.com/p/DFlMePAxrwQ/?hl=en" width={320} />
        <InstagramEmbed url="https://www.instagram.com/reel/DFb7Oy_ReO8/?hl=en" width={320} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button
          style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', borderRadius: '5px' }}
          onClick={() => setResponse("WOOOOOOOOOOO! Ma babyyyyy! ❤️")}
        >
          Yes
        </button>
        <button
          style={{ backgroundColor: 'gray', color: 'white', padding: '10px 20px', borderRadius: '5px' }}
          onClick={() => setResponse("NOOOOOOOOOOOOOO! Press the other button right neow! 😢")}
        >
          No
        </button>
      </div>

      {response && <p style={{ marginTop: '20px', fontSize: '18px', color: 'red' }}>{response}</p>}
    </div>
  );
}