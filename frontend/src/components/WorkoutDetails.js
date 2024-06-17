import { useWorkoutContext } from '../hooks/useWorkoutContext'
import { formatDistanceToNow } from 'date-fns'
import { useState } from 'react'

const WorkoutDetails = ({ workout }) => {
    const [showSave, setShowSave] = useState(false)
    const [title, setTitle] = useState(workout.title)
    const [load, setLoad] = useState(workout.load)
    const [reps, setReps] = useState(workout.reps)

    const { dispatch } = useWorkoutContext()
    
    const handleDelete = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    const handleSave = async() => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'PATCH',
            body: JSON.stringify({ title, load, reps }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'UPDATE_WORKOUT', payload: json})
            setShowSave(false)
        }
    }

    if (!showSave) {
        return (
            <div className="workout-details">
                <h4>{title}</h4>
                <p><strong>Weight (lbs): </strong>{load}</p>
                <p><strong>Repetitions: </strong>{reps}</p>
                <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
                <span className="material-symbols-outlined" onClick={handleDelete}>delete</span>
                <button onClick={() => setShowSave(true)}>Update</button>
            </div>
        )
    } else {
        return (
            <div className="workout-details">
                <h3>Updating Workout...</h3>
                <p><strong>Exercise: <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} /></strong></p>
                <p><strong>Weight (lbs): <input type='number' value={load} onChange={(e) => setLoad(e.target.value)} /></strong></p>
                <p><strong>Repetitions: <input type='number' value={reps} onChange={(e) => setReps(e.target.value)} /></strong></p>
                {<button onClick={handleSave}>Save Changes</button>}
            </div>
        )
    }
}

export default WorkoutDetails