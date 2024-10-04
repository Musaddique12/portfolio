// assistance.js
import Swal from 'sweetalert2';


let a = "Hello! I'm a virtual assistant created by Musa Sir. I can assist you with analyzing his portfolio and provide summaries of his projects, as well as details about him.";

// Function to make the assistant speak
const speak = (message) => {
  let text = new SpeechSynthesisUtterance(message);
  text.rate = 1;
  text.pitch = 1;
  text.volume = 1;
  text.lang = "hi-GB";  // Change language if needed
  window.speechSynthesis.speak(text);
};

// Function to greet the user based on the time of day
export const wishMe = () => {
  let day = new Date();
  let hours = day.getHours();
  let greeting = "";

  if (hours >= 5 && hours < 12) {
    greeting = "Good morning sir";
  } else if (hours >= 12 && hours < 16) {
    greeting = "Good afternoon sir";
  } else if (hours >= 16 && hours < 18) {
    greeting = "Good evening sir";
  } else {
    greeting = "Hello, nice to meet you sir";
  }

  // Try auto-speaking first
  if (!('speechSynthesis' in window)) {
    Swal.fire({
      title: 'Error!',
      text: "Your browser does not support the Speech Synthesis API. Please click the 'Assistance' button to interact manually.",
      icon: 'error',
      confirmButtonText: 'Got it!',
      background: '#f7f7f7',
      customClass: {
        title: 'swal2-title',
        popup: 'swal2-popup'
      }
    });
  }
  else{
    speak(greeting)
    Swal.fire({
      title: 'Information',
      text: "Your browser does not support the Speech Synthesis API. Please click the 'Assistance' button to interact manually.",
      icon: 'info',
      confirmButtonText: 'Got it!',
      background: '#f7f7f7',
      customClass: {
        title: 'swal2-title',
        popup: 'swal2-popup'
      }
    });
  }

};

// Listening to the user's voice command
export const listen = () => {
  let VoiceRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = new VoiceRecognition();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    let question = transcript.toLowerCase();
    answers(question);
  };

  recognition.start();
};
  
    export const answers = (question) => {
      let reply;
      if (question.includes("hello" || "hi" || "hey")) {
        reply = "hellow sir, how can i help you"
      }
  
      else if (question.includes("current time") || question.includes("what time is it") || question.includes("what is the time")) {
        let currentTime = new Date().toLocaleTimeString();
        reply = `The current time is ${currentTime}.`;
      }
  
      else if ((question.includes("purpose") || question.includes("role") || question.includes("created")) && (question.includes("you") || question.includes("your"))) {
        reply = "I am a virtual assistant created by Musa Sir. My role is to help you explore his portfolio, highlight his projects, and provide detailed information.";
      }
  
      else if (question.includes("who is musa") || question.includes("about musa") || question.includes("your creator")) {
        reply = "Im created by Musa Sir, he is a skilled web developer currently completing his final year in BCA. He has expertise in modern web technologies and project development.";
      }
  
      else if (question.includes("good morning") || question.includes("good afternoon") || question.includes("good evening")) {
        reply = " Nice to Meet you , How can I assist you today?";
      }
  
      else if (question.includes("thank you") ||question.includes("thank u") ||question.includes("thanks")||question.includes("thank") || question.includes("appreciate you")) {
        reply = "You're welcome! Feel free to ask if you have any more questions.";
      }
  
      else if (question.includes("tell me about yourself") || question.includes("your background") || question.includes("who are you")) {
        reply = "I assist in presenting Musa Sir's work. He is currently pursuing his BCA, with skills in web development, focusing on front-end technologies such as React, Firebase.";
      }
  
  
      //Projects Summarys
  
      else if ((question.includes("analice") || question.includes("summary") || question.includes("summerize")) && (question.includes("quiz"))) {
        reply = "The quizo is  built using React and Firebase quizo is a quiz application. It likely involves functionality that allows users to take quizzes of favorite category and difficulties with dynamically generated questions. The design appears to be minimalistic and user-friendly, likely including features like question navigation, scoring.The quiz application includes a leaderboard where users can compare their performance against others. It also features a leveling system based on stars, rewarding players with stars as they play more quizzes. The more stars a user earns, the higher their level. This encourages continued engagement, and as users progress, their level and stars reflect their activity. The app likely tracks progress over time and offers feedback on quiz performance, contributing to a fun and competitive learning experience."
      }
  
      else if ((question.includes("analize") || question.includes("summary") || question.includes("summerize")) && (question.includes("invoice builder"))) {
        reply = "invoice builder is a React and Firebase-based web application that simplifies invoice creation and management. It features a graphical dashboard for tracking monthly, daily, and total income, along with a display of the five most recent invoices. Invoice Builder , is a user-friendly web application designed for creating and managing invoices seamlessly. Users can input seller and buyer details, add products, and customize invoices before saving or exporting them. The application offers a responsive interface, ensuring usability across devices. With intuitive features and a sleek design, it streamlines the invoicing process, making it an essential tool for freelancers and small business owners."
      }
  
      else if ((question.includes("analize") || question.includes("summary") || question.includes("summerize")) && (question.includes("ai board"))) {
        reply = "AI Page is a MERN stack project that allows users to interact with AI models by submitting queries and receiving spoken answers. The application features a user-friendly interface that enhances accessibility and engagement. It includes tools for efficiently generating and vocalizing responses, making it a valuable resource for users seeking interactive AI solutions.."
      }

      
      else if ((question.includes("analize") || question.includes("summary") || question.includes("summerize")) && (question.includes("portfolio"))) {
        reply = "The portfolio showcases various projects developed by the creator, emphasizing their skills in web development and design. It features sections detailing individual projects, including descriptions, technologies used, and links to live demos and source code. The design is clean and modern, highlighting the creator's expertise in React and Firebase, with an overall focus on user experience and aesthetic appeal."
      }
  
      //Skills
      else if (
        (question.includes("musa") || question.includes("his") || question.includes("he") || question.includes("your sir") || question.includes("your creator")) &&
        (question.includes("skill") || question.includes("skills"))
      ) {
        reply = "Musa, my creator, has a solid understanding of the MERN stack. He knows how to build and use APIs, is proficient in React, and has also built websites using dot NET core. He possesses basic knowledge of databases and is familiar with AI functionalities.";
      }
      
      else if (
        (question.includes("musa") || question.includes("his") || question.includes("he") || question.includes("your sir") || question.includes("your creator")) &&
        (question.includes("hobbies") || question.includes("interests") || question.includes("free time") || question.includes("do for fun"))
      ) {
        reply = "In his free time, Musa enjoys playing football, making creative projects, and is keen on learning more about AI development.";
      }
      

      else {
        reply = "This is what i get on googlr recarding" + question;
        window.open(`https://www.google.com/search?q=${question}`)
      }
  
      speak(reply)
  
    }
  
  