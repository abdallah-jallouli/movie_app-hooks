import StarRating from './StarRating';

const Filter = ({handleTextFilter,textFilter , ratingFilter ,handleRatingFilter}) => {
  // const [name, setName] = useState("")
  // const [rate, setRate] = useState(1)

  const handleTitleChange = (e) => {
    handleTextFilter(e.target.value);
  };
  return (
    <div className='filter'>
      <input type="text" placeholder='filter by name' value={textFilter}
      onChange={handleTitleChange} />
      <div><StarRating rating ={ratingFilter} handleRating={handleRatingFilter}/></div>
    </div>
  )
}

export default Filter