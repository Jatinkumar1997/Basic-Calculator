import React from 'react';
import InputScreen from './components/Input'
import PanelScreen from './components/Panel'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:""
    }
  }

  onClickHandler = (event)=>{
    const name = event.target.name
    //let firstTimeOperator = true
    var operationsArr = ["+","-","*","/"]
    //console.log(name)
    if(name==="="){
      const currState = this.state.value.toString()
      var num1 = ""
      var num2 = ""
      var operation = ""
      var flag = false
      for(var i=0;i<currState.length;i++){
        if(operationsArr.indexOf(currState[i])!==-1){
          operation = currState[i]
          flag = true
        }
        else if(!flag){
          num1 = num1 + currState[i]
        }
        else{
          num2 = num2 + currState[i]
        }
      }
      num1 = parseFloat(num1)
      num2 = parseFloat(num2)

      if(operation==="+"){
        let res = num1+num2
        this.setState({value:res})
      }
      else if(operation==="-"){
        let res = num1-num2
        this.setState({value:res})
      }
      else if(operation==="*"){
        let res = num1*num2
        this.setState({value:res})
      }
      else if(operation==="/"){
        let res = num1/num2
        this.setState({value:res})
      }
    }
    else{
      if(this.state.value==="" && operationsArr.indexOf(name.toString())!==-1){
        alert("Please enter a number first")
      }
      else{
        const currVal = this.state.value + name.toString()
        let operatorOcc = 0
        for(let j=0;j<currVal.length;j++){
          if(operationsArr.indexOf(currVal[j])!==-1){
            operatorOcc++
          }
        }
        //console.log(operatorOcc)
        if(operatorOcc>1){
          alert("Please add a single operator.")
        }
        else{
          const newValue = this.state.value+name.toString()
          this.setState({value:newValue})
        }
      }
    }
  }

  render(){
    return(
      <div>
        <Header />
        <InputScreen value = {this.state.value}/>
        <PanelScreen onClick={this.onClickHandler} />
        <Footer />
      </div>
    )
  }

}
export default App;
