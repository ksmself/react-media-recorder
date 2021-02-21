import "./App.css";
import { ReactMediaRecorder } from "react-media-recorder";

const App = () => (
  <div>
    <ReactMediaRecorder
      video
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <p class="record-state">{status}</p>
          <div class="btn-box">
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
          </div>
          <div class="video-box">
            <video src={mediaBlobUrl} controls autoplay loop />
          </div>
        </div>
      )}
    />
  </div>
);

export default App;
