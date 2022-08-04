import React, { memo } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import TodoTask from './components/todotask'
import './App.css';
import { Space, Form, Input, InputNumber, Button } from 'antd';
import {useState, useEffect , ChangeEvent } from 'react'
import { StringLiteral } from 'typescript';

export interface ITask {
  taskName : String;
  date : Date;
  memo: string;
}

function App() {

  var today = new Date();

  const [task , setTask] = useState<string>("");
  const [memo , setMemo] = useState<string>("");
  const [date , setDate] = useState<Date>(today);
  const [todolist , setTodolist] = useState<ITask[]>([]);


  const handelChange = (event : ChangeEvent<HTMLInputElement> ) : void =>{

    var atToday = new Date();

      if(event.target.name === "task"){
        setTask(event.target.value)
      }
      else{
        setDate(atToday)
      }
  };

  const addTask = () : void => {

    var length = task.length;

    if( length!= 0){

    const newTask = { taskName: task , date : date, memo : memo }
    
    setTodolist([...todolist, newTask])
    console.log(todolist)
    setTask("")
    }
    else{
      alert("Task can't be empty")
    }
  }


  const deleteTask = (taskName : string) : void =>{
    setTodolist(todolist.filter((task) => {
      return task.taskName != taskName 
    }))
  }

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = days[d.getDay()];


  return (
    <div className="App">
        <div className="App-box">


          <div className='main-box flex-1	max-w-4xl m-5 shadow-lg shadow-cyan-500/50'>

              
              <div className='header-box mb-5 flex justify-around items-center pt-2 '>
                  <ul className="nav nav-tabs flex pull-left" id="myTab" role="tablist">
                      <li className="nav-item " role="presentation">
                        <button className="nav-link active pl-8 pr-8" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Day</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link pl-8 pr-8" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Week</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link pl-8 pr-8" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Month</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link pl-8 pr-8" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Year</button>
                      </li>
                  </ul>
              </div>


            <div className="tab-content" id="myTabContent">


                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                    <div className='date-box flex flex-row justify-center items-center'>

                       <span><i className="ri-arrow-left-s-line"></i></span>

                        <div className='flex flex-col justify-center items-center'>
                          <h1>{day}</h1>
                          <h4>{d.toDateString()}</h4>
                        </div>

                        <span><i className="ri-arrow-right-s-line"></i></span>

                    </div>

                      <div className='sub-box'>
                              <div className="grid grid-cols-9">
                                       <div className="col-span-1"></div>

                                          <div className="col-span-7">
                                              <Form name="nest-messages" >
                                                  <Space direction="vertical">
                                                      <Input.Group compact >
                                                          <Form.Item
                                                              className='task-header'
                                                                name="Task"
                                                                rules={[
                                                                  {
                                                                      required: true,
                                                                  },
                                                              ]}
                                                              >
                                                              <div className='input-container'>
                                                                    <span className='input-icon'><i className="ri-align-left"></i></span>
                                                                    <Input  className='task-input default'  placeholder="Add Your Task" name="task" onChange ={handelChange}  value={task}/>
                                                              </div>
                                                          </Form.Item>
                                                          <Form.Item>
                                                          <Button  type="primary" className='add-task-button' htmlType="submit" onClick={addTask}>
                                                                <i className="ri-add-circle-fill"></i>
                                                          </Button>
                                                          </Form.Item>
                                                        </Input.Group>
                                                    </Space>
                                                 </Form>
                                        </div>

                                                    <div className="col-span-1"></div>
                                </div> 
                      </div>

                                      <div >
                                            <div className="grid grid-cols-10 gap-1 text-white">
                                                  <div className="text-2xl pin col-span-1 flex justify-end ">
                                                      <i className="ri-pushpin-2-fill pt-2"></i>
                                                  </div>

                                                  <div className="col-span-7 m-2  justify-start items-center">
                                                      
                                                      <div className='flex'>
                                                            <input className='checkbox' type="checkbox" checked={true} />

                                                            <div className='flex flex-col pl-4	'>
                                                              <span className='text-lg font-semibold'>Getting an invite for dribble</span>
                                                            </div>
                                                      </div>
                                                      <div className='flex flex-row ml-8'>
                                                        <span className='text-base memo'>One of my goals in 2017 </span>
                                                      </div>
                                                      
                                                  </div>

                                                  <div className="col-span-1 ml-8 flex justify-center items-center">
                                                        <div className="dropdown">
                                                          <button className="dropbtn"><i className="ri-more-fill"></i></button>
                                                          <div className="dropdown-content">
                                                            <a href="#"> <i className="ri-pushpin-2-fill"></i> &nbsp; Pin on top</a>
                                                            <a href="#"> <i className="ri-sticky-note-fill"></i> &nbsp; Add a memo</a>
                                                            <a href="#"> <i className="ri-delete-bin-5-fill"></i> &nbsp; Delete</a>
                                                          </div>
                                                        </div>
                                                  </div>

                                                  <div className="col-span-2"></div>

                                                  <div className="col-span-1"></div>
                                            </div>

                                            <div className="grid grid-cols-9">
                                                    <div className="col-span-1"></div>
                                                    <div className="col-span-7 mt-4">
                                                        <hr className='hr-line'/>
                                                    </div>
                                                    <div className="col-span-1"></div>
                                          </div>
                                            
                                      </div>

                                      <div className='mt-3'>
                                        {todolist.map((task : ITask, key: number) => (
                                          <div>
                                              <TodoTask key={key} task={task} deleteTask={deleteTask}/>
                                          </div>
                                        ))}
                                      </div>
                 </div>


                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
             </div>

          </div>
        </div>
    </div>
  );
}

export default App;
