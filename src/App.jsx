import { useEffect, useState } from "react"
import Calendar from "./components/Calendar"
import Clocks from "./components/Clocks"
import Form from "./components/Form"
import Hero from "./components/Hero"
import Layout from "./components/layouts/Layout"
import Portal from "./components/Portal"
import Summary from "./components/Summary"
import { calculateTimeLeft, getLifePercentageLived } from "./utils"

function App() {
  const [name, setName] = useState("chris")
  const [birthday, setBirthday] = useState("1999-01-01")
  const [lifeExpectancy, setLifeExpectancy] = useState(90)
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(calculateTimeLeft(birthday, lifeExpectancy))

  const percentage = getLifePercentageLived(birthday, lifeExpectancy)

  useEffect(()=>{
    if (!localStorage){
      return
    }
    if (localStorage.getItem("formData")){
      const {name: n, birthday: b, lifeExpectancy: e} = 
      JSON.parse(localStorage.getItem("formData"))
      setName(n)
      setBirthday(b)
      setLifeExpectancy(parseInt(e))
    }
  }, [])

  useEffect(()=>{
    const interval = setInterval(() => {
      setData(calculateTimeLeft(birthday, lifeExpectancy))
    }, 1000)
    return () => {clearInterval(interval)}
  }, [birthday, lifeExpectancy])

  function handleToggleModal(){
    setShowModal(curr => !curr)
  }

  function resetData(){
    setName("chris")
    setBirthday("1999-01-01")
    setLifeExpectancy(90)
    localStorage.clear()
  }

  function handleUpdateData(n, b, e){
    if (!n || !b || !e){
      return
    }
    localStorage.setItem("formData", JSON.stringify({name: n, birthday: b, lifeExpectancy: e}))
    setName(n)
    setBirthday(b)
    setLifeExpectancy(parseInt(e))
    handleToggleModal()
  }
  return (
    <Layout>
      {showModal && (<Portal handleCloseModal={handleToggleModal}>
        <Form handleUpdateData = {handleUpdateData} handleCloseModal = {handleToggleModal}/>
      </Portal>)}
      <Hero resetData = {resetData} handleToggleModal = {handleToggleModal} name = {name} data = {data} percentage = {percentage}/>
      <Clocks data = {data}/>
      <Calendar lifeExpectancy = {lifeExpectancy} data = {data}/>
      <Summary lifeExpectancy = {lifeExpectancy} birthday = {birthday}/>
    </Layout>
  )
}

export default App
