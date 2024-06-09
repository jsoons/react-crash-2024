import React from 'react'
// import { useState, useEffect } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import Spinner from '../components/Spinner'



const JobPage = () => {
    const { id } = useParams()
    const job = useLoaderData()
    // const [job, setJob] = useState(null)
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     const fetchJob = async () => {
    //         try {
    //             const res = await fetch(`/api/jobs/${id}`)
    //             const data = await res.json()
    //             console.log(data)
    //             setJob(data)

    //         } catch (error) {
    //             console.log('Erro fetching data', error)
    //         } finally {
    //             setLoading(false)

    //         }

    //     }
    //     fetchJob()
    // }, [])
    return (
        false ? <Spinner /> : <h1>{job.title}</h1>)
}

// const  JobLoader = async({params})

const JobLoader = async ({params})=> {
    const res = await fetch(`/api/jobs/${params.id}`)
    const data = await res.json()
    return data
}

export {JobPage as default, JobLoader}