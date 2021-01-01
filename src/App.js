import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import TodoItem from './components/TodoItems';
import TodoView from './components/TodoView';
import fakeList from "./faker/todolist";
import { getTeam } from './api/footballer';



function App() {
  const [clickedTodo, setClickedTodo] = useState(null)
  const [team, setTeam] = useState({ players: [] })

  const selectTodo = (todo) => {
    setClickedTodo(todo)
  }

  useEffect(() => {
    getTeam().then((value) => {
      console.log(value[0]);
      setTeam(value[0])
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">Todo</a>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {
              team.players.map((player, index) => (<TodoItem player={player} key={index} clicked={selectTodo} />))
            }
          </div>
          <div className="col-md-6">
            <TodoView selected={clickedTodo} />
          </div>
        </div>
      </div>
    </div>)

}

export default App;
