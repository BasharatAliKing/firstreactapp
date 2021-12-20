import React, { Component } from 'react';
import video from "./video.mp4";
import Plan from './Plan';
import "./App.css";
export default class App extends Component {

  state = {
    text: " ",
    items: []
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  handleAdd = e => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text]
      this.setState({ items: items, text: " " })
    }
  }
  handleDelete = id =>{
    console.log( "Deleted " , id);
    const olditems=[ ...this.state.items]
    console.log("Old Items" , olditems);
    const items=olditems.filter( (element,i) =>{
      return i !==id
    })
    this.setState({items:items})
  }
  render() {
    return (
      <div>
        <div className='container-fluid my-5'>
          <div className='row'>
            <div className="col-sm-6 col-xs-12 text-white mx-auto shadow p-3">
              <h1 className='text-center'>Today's Plan</h1>

              <div className="row mt-3 ">
                <div className="col-9 ">
                  <input type="text" className='form-control text-white' placeholder='Write text here..' value={this.state.text} onChange={this.handleChange} />
                </div>
                <div className="col-2">
                  <button className="btn btn-warning px-4" onClick={this.handleAdd}>Add</button>
                </div>
              </div>
              <div className="container-fluid mt-4">
                <ul className="list-unstyled row">
                  {
                    this.state.items.map((value, i) => {
                      return <Plan key={i} id={i} sendData={this.handleDelete} value={value} />
                    })
                  }
                </ul>
              </div>

             


            </div>
          </div>
          <div className=" container mt-5">
                <div className="row">
                  <h2 className='text-center my-3 text-white '>Firstly See the Video Please ..</h2>
                  <div className="col-md-12 text-center">
                    <video className=' video ' src={video} controls autoPlay />
                  </div>
                </div>
              </div>
        </div>
      </div>
    )
  }
}
