import React from 'react'
import Banner from "../components/Banner"
import { useEffect, useState } from "react";
import Jobs from './Jobs';
import Card from '../components/Card';

const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [jobs, setJobs] = useState([])

  useEffect(()=>{
      fetch("jobs.json").then(res=>res.json()).then(data=>{
        //console.log(data);
        setJobs(data) 
      })
  }, [])

  //console.log(jobs);

  //handle input change
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
      setQuery(event.target.value)
  }

  //filter jobs by title
  const filteredItems = jobs.filter( (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  //console.log(filteredItems);

  //-------------Radio based filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  //---------------button based filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  //Main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    //filtering input items
    if (query) {
      filteredJobs=filteredItems
    }

    //category filtering
    if (selected){
      filteredJobs = filteredJobs.filter( ({jobLocation, maxPrice, experienceLevel, salaryType,
      employmentType, postingDate}) => {
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      });

      console.log(filteredJobs);
    }

    return filteredJobs.map( (data, i) => <Card key={i} data={data}/>)
  }

  const result = filteredData(jobs, selectedCategory, query)

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>

      {/* main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>

        {/* Left side */}
        <div className='bg-white p-4 rounded'>Left</div>

        {/* Job cards */}
        <div className='col-span-2 bg-white p-4 rounded-sm'><Jobs result={result}/></div>

        {/* Right side */}
        <div className='bg-white p-4 rounded'>Right</div>
      </div>

    </div>
  )
}

export default Home