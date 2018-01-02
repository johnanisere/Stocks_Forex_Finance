import axios from 'axios'
import {marketnews} from '../data_container/actions/actions'

const endpoint=`https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=ace05d13cbc14f6e848efb4a35035faa`

export default{
  newsfetch:marketnews(axios.get(endpoint))
}
