import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Sidebar} from "./components/Sidebar";
import {Task} from "./components/Task";
import {Taskinput} from "./components/Taskinput";
import {type TaskCardProps } from "./libs/types";


function App() {

  const Taskcards: TaskCardProps[] = [
    {id:1,title:"Read a book",description:"Vite + React + Bootstrap + TS" , isDone : false},
    {id:2,title:"Write code",description:"Finish project for class" , isDone : false},
    {id:3,title:"Deploy app",description:"Push project to GitHub Pages" , isDone : false},
  ];


  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      
      <Header></Header>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Thanakorn" type="admin" />
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            
            <Taskinput></Taskinput>
            <Task {...Taskcards[0]}/>
            <Task {...Taskcards[1]}/>
            <Task {...Taskcards[2]}/>
            {/* Card รายการ */}
            
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2026" fullName="Thanakorn Kumkan" studentId="670610702"></Footer>
    </div>
  );
}

export default App;
