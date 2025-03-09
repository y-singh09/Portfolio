import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Certifications = () => {
  return (
    <div
      id="certificate"
      className="text-black md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-[url('https://image.slidesdocs.com/responsive-images/docs/graduation-with-a-business-certificate-page-border-background-word-template_2e488355a5__1131_1600.jpg')] bg-center bg-cover rounded-lg py-10"
    >
      <div>
        <h2 className="text-2xl text-white md:text-4xl font-bold text-center underline">Certifications and Achievments</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <ul>
          <div className="flex gap-3 py-4">
  <IoArrowForward size={55}className="mt-1 " />
  <span className="w-120 ">
    <h1 className="text-xl text-blue-600 py-4 md:text-2xl font-semibold leading-normal hover:text-purple-900 underline ">
      <a href="https://drive.google.com/file/d/1Z5MFYd2ndBviZ0dhhtI9jMIAFuwyLCEd/view?usp=drive_link">
      DSA using Java
      </a>
    </h1>
    <img
     className="md:h-80 px-80 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-90 "
      src="https://i.imgur.com/i7DGyE3.png"
      alt="About img"
    />
    <p className="text-md py-7 md:text-md leading-tight">
      Data Structures and Algorithms (DSA) is a fundamental concept in computer science that helps solve complex problems
      efficiently by <br/>organizing data and optimizing operations. Java is a popular language for implementing DSA due to its
      object-oriented nature and rich libraries.<br/> Java's collections framework (e.g., ArrayList, HashMap, Stack) makes it easy to
      implement these structures. DSA is crucial for writing optimized code, reducing time and space complexity, and solving
      real-world problems effectively.<br/>
    </p>
  </span>
</div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={55}className="mt-1" />

              <span className="w-120">
                <h1 className="text-xl text-blue-600 py-4 md:text-2xl font-semibold leading-normal hover:text-purple-900 underline">
                  <a href="https://drive.google.com/file/d/1Z8JDLCnkNZYwDoQypZaV7ygqiHF7yutj/view?usp=drive_link">
                  Core Java Concepts</a>
                </h1>
                <img className="md:h-80 px-80 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-90" src='https://i.imgur.com/O2gS07A.png' alt="About img" />
                <p className="text-md py-5 md:text-md leading-tight">
                Core Java focuses on the foundational concepts of the Java programming language, including Object-Oriented Programming (OOP) principles<br/> like inheritance, polymorphism, encapsulation, and abstraction. 
                <br/> Other Advance Concepts such as exception handling, and multithreading for concurrent processing. 
               <br/> Additionally, it introduces Java's memory management and the Collections framework, which provides data structures like ArrayList, HashMap, and LinkedList.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={55}className="mt-1" />

              <span className="w-120">
                <h1 className="text-xl text-blue-600 py-4 :text-2xl font-semibold leading-normal hover:text-purple-900 underline">
                  <a href="https://drive.google.com/file/d/1MLol6k8NTSy_XaOcUhsch0z11WbVUZXk/view?usp=drive_link">
                 DBMS and Sql
                 </a>
                </h1>
                <img
  className="md:h-80 px-80 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-90 "
  src='https://i.imgur.com/JguIsL8.png'
  alt="About img"
/>


                <p className="text-md md:text-md py-5 leading-tight">
                A Database Management System (DBMS) is software that enables the creation, management, and manipulation of databases, allowing users to store and retrieve data efficiently.<br/> 
                SQL (Structured Query Language) is the standard language used to interact with relational databases, performing operations like querying, updating, and managing data.
                <br/>Key SQL commands include SELECT, INSERT, UPDATE, DELETE, and JOIN, which are used to handle and manipulate data within a DBMS.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={55}className="mt-1" />

              <span className="w-120">
                <h1 className="text-xl text-blue-600 py-4 :text-2xl font-semibold leading-normal hover:text-purple-900 underline">
                 Leetcode Badges
                </h1>
                <div className="flex flex-wrap justify-center gap-4">
  <img
    className="md:h-80 px-2"
    src='https://assets.leetcode.com/static_assets/marketing/2024-50.gif'
    alt="Leetcode Badge 2024-50"
  />
  <img
    className="md:h-80 px-2"
    src='https://leetcode.com/static/images/badges/2024/gif/2024-06.gif'
    alt="Leetcode Badge 2024-06"
  />
  <img
    className="md:h-80 px-2"
    src='https://leetcode.com/static/images/badges/2024/gif/2024-07.gif'
    alt="Leetcode Badge 2024-07"
  />
  <img
    className="md:h-80 px-2"
    src='https://assets.leetcode.com/static_assets/marketing/2024-100-new.gif'
    alt="Leetcode Badge 2024-07"
  />
  <img
    className="md:h-80 px-2"
    src='https://assets.leetcode.com/static_assets/others/Top_SQL_50.gif'
    alt="Leetcode Badge 2024-07"
  />
</div>

                <p className="text-md md:text-md py-5 leading-tight text-blue-900">
                Leetcode Badges are visual representations of a user's achievements on the Leetcode platform. 
                These badges are awarded for reaching milestones such as solving a specific number of problems, achieving a certain ranking, or participating in contests. <br/>
                They serve as a recognition of problem-solving skills and coding proficiency, motivating users to track their progress and engage with the platform more actively.<br/> 
                Leetcode badges can be showcased in profiles, resumes, or shared on social platforms to highlight expertise in competitive programming and algorithmic challenges.<br/>
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
