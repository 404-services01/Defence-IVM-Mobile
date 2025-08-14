import { addScreenshotListener, usePreventScreenCapture } from 'expo-screen-capture';
import WebViewMain from './Components/src/IntroScreen/WebViewMain';


export default function App() {
  usePreventScreenCapture();

  return <WebViewMain />;
}
