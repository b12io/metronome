import PropTypes from 'prop-types'
const DragListItem = ({children}) => {
  return children
}

DragListItem.propTypes = {
  children: PropTypes.node.isRequired,
  draggableId: PropTypes.string.isRequired
}

export default DragListItem
