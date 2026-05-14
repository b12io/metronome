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
    const contentChildren = Children.map(children, (child, index) => {
      if (child.type.name === 'ListItemEmpty') {
        return <ListItemContent>{child}</ListItemContent>
      }
      const {draggableId, ...otherChildProps} = child.props
      const content = typeof child === 'string' ? <ListItemContent>{child}</ListItemContent> : child
      return (
        <Draggable
          key={draggableId}
          index={index}
          isDragDisabled={isDragAndDropDisabled}
          draggableId={draggableId}
        >
          {(provided, snapshot) => {
            const {style: dragStyle, ...restDraggableProps} = provided.draggableProps
            return (
              <ListItem
                key={draggableId}
                {...otherChildProps}
                listItemRef={provided.innerRef}
                dragStyles={dragStyle}
                {...restDraggableProps}
                className={getItemClassNames(snapshot.isDragging, collectionList, cardList)}
              >
                {!isDragAndDropDisabled && <ListItemIcon draggableIcon {...provided.dragHandleProps} />}
                {content}
              </ListItem>
            )
          }}
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
              {...provided.droppableProps}
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
