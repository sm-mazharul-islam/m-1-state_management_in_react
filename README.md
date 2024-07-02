<div align="center" >
  
<img src="https://raw.githubusercontent.com/sm-mazharul-islam/m-1-state_management_in_react/main/src/assets/images/todo.png" width="250" height="250"/>

</div>


# state management in react




## Lessons Learned

state mangement , basically i learned usestate , useReducer , context api in react how it is worked.


## Note:


#### 1. useState


The `useState` hook is used to add state to functional components. It returns an array with two elements: the current state value and a function to update it.

#### 2. useReducer

The useReducer hook is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. It's similar to Redux but built into React.

#### 3. Context API

The Context API is used to create global state that can be accessed by any component in the application without passing props down manually at every level.
## summary

 - useState: Simple State management.
 - useReducer: More complex state logic, ideal for handling state transitions.
 - Context API: Global state management, sharing state across the entire app without prop drilling.

