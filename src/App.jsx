import { useState, useEffect } from "react";
import "./App.css";
import Levels from "./Components/Levels";

function App() {
  const easy = 20;
  const normal = 100;
  const hard = 1000;

  const [lesson, setLesson] = useState("");
  const [lessons, setLessons] = useState([]);
  const [inputClass, setInputClass] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(true);
  const [title, setTitle] = useState("Keep learning");
  const [lessonCount, setLessonCount] = useState(easy);
 

  const handleOnChange = (e) => {
    setLesson(e.target.value);
  };

  const handleChangeLevel = (e) => {
    setLessonCount(parseInt(e.target.value));
  };
  

  const handleClick = () => {
    if (lesson.trim() !== "") {
      const newLessons = [];
      for (let i = 0; i < lessonCount; i++) {
        newLessons.push(lesson);
      }

      setLessons([...lessons, ...newLessons]);
      setLesson("");
      setInputClass("input-section");
      setIsInputVisible(false);
      setTitle("Keep learning");
      setLessonCount(easy);
    }
  };

  const handleClear = () => {
    setLesson("");
    setInputClass("");
    setLessons([]);
    setIsInputVisible(true);
    setTitle("Keep learning");
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 10
    ) {
      setTitle("Lesson learnt?");
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {lessons.map((lesson, index) => (
        <li key={index} className="amatic-sc-regular">
          {lesson}
          <input type="checkbox" className="radio" />
        </li>
      ))}

      <div
        className={inputClass}
        style={{padding: "0.5rem"}}>
        {isInputVisible ? (
          <>
            <input
              type="text"
              placeholder="What should you learn?"
              onChange={handleOnChange}
              value={lesson}
            />

            <button onClick={handleClick}>Learn it</button>
            <Levels lessonCount={lessonCount} handleChangeLevel={handleChangeLevel} easy={easy} normal={normal} hard={hard}/>
          </>
        ) : (
          <button onClick={handleClear}>{title}</button>
        )}
      </div>
    </>
  );
}

export default App;
