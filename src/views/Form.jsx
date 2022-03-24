import { useState, useRef } from 'react'
import '../style/Form.scss'

const Form = () => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(storageJobs ?? [])

    const nameRef = useRef()

    const handleSubmit = (e) => {
        if (!job) {
            alert("emtpy todos")
            return
        }
        setJobs(prev => {
            const newJobs = [...prev, job]
            const jsonJob = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJob)
            console.log(jsonJob);
            return newJobs
        })
        setJob('')
        return () => nameRef.current.focus()
    }

    const handleDelete = (job) => {
        setJobs((jobs) => {
            let current = jobs.filter(item => item !== job)
            const jsonJob = JSON.stringify(current)
            localStorage.setItem('jobs', jsonJob)
            return current
        })
    }

    return (
        <div>
            <label htmlFor="fname">Todo List</label>
            <input type="text"
                name="firstname"
                placeholder="todo..."
                value={job}
                onChange={e => setJob(e.target.value)}
            />

            {/* <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname"
                name="lastname"
                placeholder="Your last name.."
                value={name}
                onChange={e => setName(e.target.value)}
            /> */}

            <button className="btn"
                type="submit"
                onClick={(e) => handleSubmit(e)}
                ref={nameRef}
            >
                Submit
            </button>

            <ul>
                {jobs.map((job, index) => (
                    <div key={index}>
                        <li>{job}</li> &nbsp;
                        <button onClick={() => window.confirm('Are you sure you want to') ? handleDelete(job) : []}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Form