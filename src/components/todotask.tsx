import React from 'react'
import { ITask } from '../App';



interface props {
    task : ITask
    key : number
    deleteTask(taskName : string):void;
}

function todotask( { task , key, deleteTask } : props) {


    const displayDate =  task.date.getFullYear() +"."+(task.date.getMonth() + 1) +"."+ task.date.getDate();



  return (
    <div>

          <div className="grid grid-cols-10 gap-1  text-white">
                                                  <div className="text-2xl pin col-span-1 flex justify-end ">
                                                  </div>

                                                  <div className="col-span-7 m-2  justify-start items-center">
                                                      
                                                      <div className='flex'>
                                                            <input className='checkbox' type="checkbox"  />

                                                            <div className='flex flex-col pl-4	'>
                                                              <span className='text-lg font-semibold'>{task.taskName}</span>
                                                            </div>
                                                      </div>
                                                      <div className='flex flex-row ml-8'>
                                                        <span className='text-base memo'>{task.memo}</span>
                                                      </div>
                                                      
                                                  </div>

                                                  <div className="col-span-1 ml-8 flex justify-center items-center">
                                                        <div className="dropdown">
                                                          <button className="dropbtn"><i className="ri-more-fill"></i></button>
                                                          <div className="dropdown-content">
                                                              <a href="#"> <i className="ri-pushpin-2-fill"></i> &nbsp; Pin on top</a>
                                                              <a href="#"> <i className="ri-sticky-note-fill"></i> &nbsp; Add a memo</a>
                                                              <a onClick={()=> { deleteTask(task.taskName.valueOf())} }> 
                                                                  <i className="ri-delete-bin-5-fill"></i> &nbsp; Delete
                                                              </a>
                                                          </div>
                                                        </div>
                                                  </div>

                                                  <div className="col-span-2"></div>

                                                  <div className="col-span-1"></div>
            </div>


    </div>
  )
}

export default todotask