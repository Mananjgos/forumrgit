import React, { useEffect, useState } from "react";
import { Message } from "../message/Message";
import { Navbar } from "../Navbar/Navbar";
import { HomeMain } from "./HomeMain";
import Lottie from "react-lottie";
import animationData from "../../utils/animation.json";
import styled from "styled-components";

const Home = () => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 1200);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      {flag ? (
        <>
          <HomeMain />
          {/* <iframe
            allow="microphone;"
            width="300"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/3fe9ad9f-3db7-403e-a280-36496c0888d2"
          ></iframe> */}
          <Message />
        </>
      ) : (
        <LottieContainer>
          <Lottie options={defaultOptions} height={200} width={200} />
        </LottieContainer>
      )}
    </>
  );
};

export default Home;

const LottieContainer = styled.div`
  height: calc(100vh - 130px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
