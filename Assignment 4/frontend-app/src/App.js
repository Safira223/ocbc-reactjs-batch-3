import React, { useEffect, useState } from "react"
import './App.css'

function Header() {
  return (
    <header className="header">
      <center><h1>- React Assignment 4 -</h1></center>
    </header>
  )
}

function Content() {

  const [content, setContent] = useState([])
  
  useEffect(() => {
      fetch('/articles')
      .then(response => response.json())
      .then(data => {
          console.log(data)
          setContent(data)
      })
  }, [])
      
  return(
    content.map(article => {
      return(
        <>
          <div className="card border-warning">
            <div className="card-body">
              <div key = {article.id} className="content">
                <br />
                <span id="title">{article.title} </span> 
                <br /><br />
                <span id="body">{article.body} </span> 
                <br /><br />
                <span id="date">{article.date} </span> 
                <br /><br />
              </div>
            </div>
          </div>
        </>
      )
    })  
  )
}

function Footer() {
  return (
    <div className="text-center p-3">
      © 2022 Copyright: Hafizah Safira Kaurani
    </div>
  )
}

function App() {
  return (
    <div className="cover">
      <div className="container">
        <Header /><br /><br />
        <Content /><br />
        <Footer /><br />
      </div>
    </div>
  )
}

export default App
