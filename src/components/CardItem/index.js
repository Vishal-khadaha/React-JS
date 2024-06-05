// Write your code here.
const CardItem = props => {
  const {objData} = props

  return (
    <div className={`${objData.className} card`}>
      <ul className="className">
        <li>
          {' '}
          <h1>{objData.title}</h1>
        </li>
        <li>
          <p>{objData.description}</p>
        </li>
      </ul>
      <img className="card-img" src={objData.imgUrl} alt={objData.title} />
    </div>
  )
}

export default CardItem
