import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const onDemoClick=(url)=>{
    window.open(url,'_blank')

  }
  const onSourceClick=(url)=>{
        window.open(url,'_blank')
  }
  return (
    <div id="projects" className="p-20 md:p-24 text-white bg-[url('https://raw.githubusercontent.com/judygab/web-dev-projects/42c815099332e69edcef4593d6f593224b94ba40/personal-portfolio/src/assets/img/contact-img.svg')] bg-cover bg-center">
      <h1 className="text-center text-5xl md:text-5xl text-blue-900 font-bold">Projects</h1>
      <div className="py-8 px-30 mx-50 flex flex-wrap gap-5">
        
            <ProjectCard
            img="https://github.com/y-singh09/Wall-Breaker/blob/master/Screenshot_02.png?raw=true"
            
        title="Wall Breaker Game"
        main="This is a Java-based Ball Breaker game developed using Swing and Graphics2D for the UI and game mechanics. 
        The game features dynamic animations, collision detection, and engaging gameplay."
        demoClick={()=>onDemoClick('https://github.com/y-singh09/Wall-Breaker.git')}
        sourceClick={()=>onSourceClick('https://github.com/y-singh09/Wall-Breaker/blob/master/Gameplay.java')}
      />

        <ProjectCard
          img="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Password Generator"
          main="A responsive password generator application built using JavaScript and React. 
          It allows users to create strong, random passwords with customizable options for length, character types, and complexity."
          demoClick={()=>onDemoClick('https://github.com/y-singh09/Passsword-Generator.git')}
          sourceClick={()=>onSourceClick('https://github.com/y-singh09/Passsword-Generator/blob/main/src/App.jsx')}
        />

       <ProjectCard
        img="https://github.com/y-singh09/React_project_Todolist/blob/main/Screenshot_02.png?raw=true"
        title="To-Do List App"
        main="A simple and efficient To-Do List application built to help users manage their tasks. 
        Features include adding, editing, and deleting tasks, as well as tracking task completion."
        demoClick={()=>onDemoClick('https://github.com/y-singh09/React_project_Todolist.git')}
        sourceClick={()=>onSourceClick('https://github.com/y-singh09/React_project_Todolist/blob/main/src/App.jsx')}
      />

      <ProjectCard
        img="https://b2633864.smushcdn.com/2633864/wp-content/uploads/2020/09/opencv_anpr_example.jpg?lossy=2&strip=1&webp=1"
        title="License Plate Detection System"
        main="An AI-powered License Plate Detection System utilizing models like Haar Cascade and EasyOCR for real-time license plate recognition. 
        This project combines computer vision techniques to accurately detect and extract text from vehicle plates."
        demoClick={()=>onDemoClick('https://github.com/y-singh09/License-Plate-Recognition.git')}
        sourceClick={()=>onSourceClick('https://github.com/y-singh09/License-Plate-Recognition/blob/main/number_plate.py')}
      />
              <ProjectCard
              img="https://github.com/y-singh09/Hangman-Game/blob/main/screenshots/Screenshot_04.png?raw=true"
          title="Hangman Game"
          main="A classic Hangman game implemented in JavaScript and React. This project features an interactive UI where players guess letters to reveal a hidden word before running out of attempts. Includes word selection, dynamic rendering of guesses, and a user-friendly interface."
          demoClick={()=>onDemoClick('https://github.com/y-singh09/Hangman-Game.git')}
          sourceClick={()=>onSourceClick('https://github.com/y-singh09/Hangman-Game/blob/main/app.js')}
/>
<ProjectCard
              img="https://github.com/y-singh09/Tic-Tac-Toe/raw/main/Game_Screenshot01.png"
          title="Tic-Tac-Toe"
          main="The Tic Tac Toe project is a web-based game developed using JavaScript, HTML, and CSS. It allows two players to take turns marking X and O on a 3x3 grid. The game is built with simple yet effective logic to detect winning combinations and determine when a player has won or when the game results in a draw. Players can reset the game and play multiple rounds. The user interface is designed to be clean and responsive, making it accessible across different devices. This project provides an excellent opportunity to practice JavaScript event handling, game state management, and DOM manipulation."
          demoClick={()=>onDemoClick('https://github.com/y-singh09/Tic-Tac-Toe.git')}
          sourceClick={()=>onSourceClick('https://github.com/y-singh09/Tic-Tac-Toe/blob/main/TicTacToe/app.js')}
/>


      </div>
      
    </div>
  );
};

export default Projects;
