import { useState, useContext, useEffect} from "react"
import FeedbackContext from '../context/FeedbackContext'
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState('10')
  const [btnDisable, setBtnDisable] = useState(true)
  const [messege, setMessege] = useState('')
  const { addFeedback, feedbackEdit } = useContext(FeedbackContext)
  useEffect(() =>{
    if(feedbackEdit.edit===true){
      setBtnDisable(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])
  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisable(true)
      setMessege(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisable(true)
      setMessege('message should be at least 10 character')
    } else {
      setBtnDisable(false)
      setMessege(null)
    }
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      addFeedback(newFeedback)
      setText('')
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2> How would you rate your service with us </h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            onChange={handleTextChange}
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisable={btnDisable}>
            {' '}
            Send
          </Button>
        </div>
        {messege && <div className='message'> {messege} </div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
