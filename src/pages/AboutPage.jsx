import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

const AboutPage = () => {
  return (
    <Card>
      <h1> This is a feedback App</h1>
      <p>This is app is used to give feedback of a products or a services </p>
      <p>
        <Link to='/'> Go to Home page </Link>
      </p>
    </Card>
  )
}

export default AboutPage
