import React from 'react'
import Card from './componet/Card'

 const jobOpenins = [
  {
    "brandLogo": "https://logo.clearbit.com/google.com",
    "companyName": "Google",
    "jobTitle": "Customer Engineer, Security Specialist",
    "datePosted": "2 days ago",
    "postTag1": "Full Time",
    "postTag2": "Senior Level",
    "payInRupeesLPA": "₹60-80 LPA",
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/amazon.com",
    "companyName": "Amazon",
    "jobTitle": "Software Development Engineer II",
    "datePosted": "5 days ago",
    "postTag1": "Full Time",
    "postTag2": "Mid Level",
    "payInRupeesLPA": "₹30-45 LPA",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/microsoft.com",
    "companyName": "Microsoft",
    "jobTitle": "Principal Applied AI Engineer",
    "datePosted": "1 week ago",
    "postTag1": "Full Time",
    "postTag2": "Senior Level",
    "payInRupeesLPA": "₹80-120 LPA",
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/apple.com",
    "companyName": "Apple",
    "jobTitle": "Data & ML Ops Engineer",
    "datePosted": "3 days ago",
    "postTag1": "Full Time",
    "postTag2": "Mid Level",
    "payInRupeesLPA": "₹40-60 LPA",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/meta.com",
    "companyName": "Meta",
    "jobTitle": "Software Engineer, Product",
    "datePosted": "2 weeks ago",
    "postTag1": "Full Time",
    "postTag2": "Mid Level",
    "payInRupeesLPA": "₹35-50 LPA",
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/netflix.com",
    "companyName": "Netflix",
    "jobTitle": "Consumer Insights Researcher",
    "datePosted": "10 days ago",
    "postTag1": "Full Time",
    "postTag2": "Senior Level",
    "payInRupeesLPA": "₹70-90 LPA",
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    "companyName": "Adobe",
    "jobTitle": "Software Development Engineer",
    "datePosted": "4 days ago",
    "postTag1": "Full Time",
    "postTag2": "Junior Level",
    "payInRupeesLPA": "₹20-30 LPA",
    "location": "Noida, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/salesforce.com",
    "companyName": "Salesforce",
    "jobTitle": "Senior Technical Consultant",
    "datePosted": "1 week ago",
    "postTag1": "Full Time",
    "postTag2": "Senior Level",
    "payInRupeesLPA": "₹45-65 LPA",
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://www.portaone.com/wp-content/uploads/2022/09/Logo-Oracle-1.png",
    "companyName": "Oracle",
    "jobTitle": "Database Administrator",
    "datePosted": "1 day ago",
    "postTag1": "Part Time",
    "postTag2": "Senior Level",
    "payInRupeesLPA": "₹40-55 LPA",
    "location": "Pune, India",
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdQi0yohiPRpm5Twf9hluWmgMe8smBh6Mcg&s",
    "companyName": "IBM",
    "jobTitle": "Hardware Engineer",
    "datePosted": "3 weeks ago",
    "postTag1": "Full-time",
    "postTag2": "Junior Level",
    "payInRupeesLPA": "20-30 LPA",
    "location": "Kolkata, India"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2UseLhK6vpHiW_buUu5Y8QQMvvRSI97VV5w&s",
    "companyName": "Intel",
    "jobTitle": "UX/UI Designer",
    "datePosted": "3 weeks ago",
    "postTag1": "Full Time",
    "postTag2": "Mid Level",
    "payInRupeesLPA": "₹32-42 LPA",
    "location": "Bengaluru, India",
  },
  {
    "brandLogo": "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-Photo-Image.png",
    "companyName": "Tesla",
    "jobTitle": "Technical Support Engineer",
    "datePosted": "3 weeks ago",
    "postTag1": "Full-time",
    "postTag2": "Junior Level",
    "payInRupeesLPA": "20-30 LPA",
    "location": "Kolkata, India"
  },
]

const App = () => {
  return (
    <div className='parent'>
      {jobOpenins.map(function(elem){
        return <Card company = {elem.companyName} logo={elem.brandLogo} date = {elem.datePosted} JT= {elem.jobTitle} tag1={elem.postTag1} tag2={elem.postTag2} salary = {elem.payInRupeesLPA} place = {elem.location}/>
      })}
    </div>
  )
}

export default App

