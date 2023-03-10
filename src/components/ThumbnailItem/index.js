// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumbId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassname = isActive ? `thumbnail active` : `thumbnail`
  const onclickBtn = () => {
    setActiveThumbId(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onclickBtn}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassname}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
