import React from "react";
import Contact from "../Contact/Contact";
import TextChange from "../TextChange";
import Footer from "../Footer/Footer"; 
import styled from "styled-components";


export const CheckBtn = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    margin:30px;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;

const Home = () => {
  return (
<div
  className="bg-[url('https://img.freepik.com/free-vector/gradient-dynamic-purple-lines-background_23-2148995757.jpg?w=900&t=st=1726312493~exp=1726313093~hmac=42c51de277b695a4db8bc29bfec4fb7ae964095ea148998a617db72684646c1b')] bg-cover bg-center text-white flex flex-col min-h-screen p-10 md:p-20"
>     
      <div className="flex flex-col md:flex-row md:items-start mb-10 md:mb-0">
        <div className="md:w-2/4 md:pt-10">
          <h1 className="text-purple-700 text-xl md:text-6xl font-bold leading-normal tracking-tighter">
            <TextChange />
          </h1>
          <p className="text-white text-lg md:text-4md tracking-tight px-4 py-4">
            I am a passionate software developer with a strong focus on full-stack development and data structures and algorithms (DSA). 
            I enjoy solving complex problems and continuously honing my coding skills by diving into challenging DSA problems.
            With experience in both front-end and back-end development, I build scalable and efficient web applications, always aiming to deliver clean, maintainable code.
            I love working on projects that push me to learn new technologies and enhance my problem-solving abilities. 
            When I'm not coding, you'll find me exploring new tools or contributing to open-source projects.
          </p>
          
          <CheckBtn href="https://drive.google.com/file/d/11VBE2uGpBmblvBgWudjRuflvzeJUXvjb/view?usp=drive_link">
            Check Resume
          </CheckBtn>
        </div>
        <div className="flex justify-center md:ml-10 mt-10 md:mt-15">
          <img className="w-100 h-100 md:w-100 md:h-100 object-cover rounded-full" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4c6af063065537.5aad14955f42a.gif" alt="Avatar" />
        </div>
      </div>

    
      <div className="p-10 md:p-24 flex-grow flex items-center justify-center mb-10">
      <Contact/>
      </div>
      
     
    </div>
  );
};

export default Home;
