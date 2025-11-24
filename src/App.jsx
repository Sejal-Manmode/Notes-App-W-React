import React from 'react'
import Page1 from './componet/Page1/Page1'
import Page2 from './componet/Page2/Page2'

const App = () => {
  const users = [
  {
    id: 1,
    name: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedback: "It makes transferring money between my savings , and the fraud alerts make me feel secure.",
    tag: "Satisfied",
    color:"green"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    image: "https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=459&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedback: "I have a checking account, but I still go to the check casher for my checks because bank holds my fund.",
    tag:"Underbanked",
    color:"blue"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedback: "There aren't any branches near my area, so making cash deposits is inconvenient.",
    tag:"Underserved",
    color:"red"
  },
  {
    id: 4,
    name: "David Kim",
    image: "https://images.unsplash.com/photo-1752170080668-fa46b5539cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHwxfDB8fHww",
    feedback: "The bank tends to hold my funds for too long, which makes it hard to access money when I need it.",
    tag:"Underbanked",
    color:"orange"
  },
  {
    id: 5,
    name: "Priya Patel",
    image: "https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedback: " Great app with smooth navigation and transfers. It makes managing my daily banking quick.",
    tag:"Satisfied",
    color:"purple"
  }

  ]
  return (
    <div>
      <Page1 users={users}/>
    </div>
  )
}

export default App
