import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
const FeedbackStats = () => {
   const { feedback } = useContext(FeedbackContext) 
  // claculate avg ratings
  let avg =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
      avg = avg.toFixed(1).replace(/[.,]0$/, '')
    }, 0) / feedback.length
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews </h4>
      <h4>Average Rating: {isNaN(avg) ? 0 : avg} </h4>
    </div>
  )
}
export default FeedbackStats
