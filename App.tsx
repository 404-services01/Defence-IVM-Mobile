import { addScreenshotListener, usePreventScreenCapture } from 'expo-screen-capture';
import WebViewMain from './Components/src/IntroScreen/WebViewMain';
import * as Permisssions from "expo-permissions";
import { useEffect } from 'react';


export default function App() {
  usePreventScreenCapture();

  // async function getCameraPermission(){
  //   const [status]:any = await Permisssions.askAsync(
  //     Permisssions.CAMERA_ROLL
  //   )
  //   if (status === "granted") 
  //     {
  //       addScreenshotListener(() => {
  //         alert("You took a screenshot!")
  //       })
  //     }
  // }

  // useEffect(() => {
  //   getCameraPermission()
  // }, [])

  return <WebViewMain />;
}
