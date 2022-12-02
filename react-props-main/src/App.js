//import ClassComponent from './ClassComponent'
//import PropsExample from'./PropsExample'
import StateExample from './StateExample'
import FuncProps from './FuncProps'
import DemoExample from './DemoExample'
import Events from './Events'
function App() {
  return(
    <section>
    <StateExample/>
    <FuncProps carname="wolkswagon"year="1994"/>
    <DemoExample name="Damon"age="154"/>
    <Events/>
    {/*<PropsExample name="Jenna"age="24"/>
    <PropsExample name="Elena"age="20"/>
      <p>welcome to my world</p>
      <h1>I am a Devil of my word</h1>
      <img src="https://i.pinimg.com/474x/04/e1/78/04e1784fc85d72ccec586ca224ce361a.jpg" alt="image" width="15%"/>
      <ClassComponent/> */}
    </section>
  )
}
export default App;