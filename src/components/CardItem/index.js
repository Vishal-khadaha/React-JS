// Write your code here.
const CardItem = props => {
  const {objData} = props

  return (
    <div className={`${objData.className} card`}>
      <ul>
        <li className="className">
          <h1>{objData.title}</h1>
        </li>
        <li className="className">
          <p>{objData.description}</p>
        </li>
      </ul>
      <img className="card-img" src={objData.imgUrl} alt={objData.title} />
    </div>
  )
}

export default CardItem
