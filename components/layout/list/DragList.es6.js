import React, {Children} from 'react'
import PropTypes from 'prop-types'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import classnames from 'classnames'

import List from './List.es6.js'
import ListItem from './ListItem.es6.js'
import ListItemContent from './ListItemContent.es6.js'
import ListItemIcon from './ListItemIcon.es6.js'

const getItemClassNames = (isDragging, collectionListItem, cardListItem) => classnames({
  'card-list-item--is-dragging': cardListItem && !collectionListItem && isDragging,
  'collection-item--is-dragging': !cardListItem && collectionListItem && isDragging
})

class DragList extends React.Component {
  constructor (props) {
    super(props)
    this.handleDragEnd = this.handleDragEnd.bind(this)
  }

  handleDragEnd (data) {
    // dropped outside the list
    if (!data.destination) {
      return
    }
    this.props.onDragEnd(data)
  }

  render () {
    const {children, droppableId, collectionList, cardList, isDragAndDropDisabled, ...otherProps} = this.props
    const contentChildren = Children.map(children, child => {
      if (child.type.name === 'ListItemEmpty') {
        return <ListItemContent>{child}</ListItemContent>
      }
      const {draggableId, ...otherChildProps} = child.props
      const content = typeof child === 'string' ? <ListItemContent>{child}</ListItemContent> : child
      return (
        <Draggable
          key={draggableId}
          isDragDisabled={isDragAndDropDisabled}
          draggableId={draggableId}
        >
          {(provided, snapshot) => [
            <ListItem
              key={draggableId}
              {...otherChildProps}
              listItemRef={provided.innerRef}
              dragStyles={provided.draggableStyle}
              className={getItemClassNames(snapshot.isDragging, collectionList, cardList)}
            >
              <ListItemIcon draggableIcon {...provided.dragHandleProps} />
              {content}
            </ListItem>,
            <div key={`key-${draggableId}`}>{provided.placeholder}</div>
          ]}
        </Draggable>
      )
    })
    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <Droppable
          droppableId={droppableId}
          isDropDisabled={isDragAndDropDisabled}
        >
          {(provided, snapshot) => (
            <List
              {...otherProps}
              listRef={provided.innerRef}
            >
              {contentChildren}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

DragList.propTypes = {
  droppableId: PropTypes.string,
  children: PropTypes.node,
  collectionList: PropTypes.bool,
  cardList: PropTypes.bool,
  onDragEnd: PropTypes.func,
  isDragAndDropDisabled: PropTypes.bool
}

export default DragList
