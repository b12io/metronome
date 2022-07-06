import React, { Component } from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import Divider from '../../components/layout/panel/divider/Divider.es6.js'
import Panel from '../../components/layout/panel/Panel.es6.js'
import CardList from '../../components/layout/card-list/CardList.es6.js'
import CardListConfirmation from '../../components/layout/card-list-confirmation/CardListConfirmation.es6.js'
import Collection from '../../components/layout/collection/Collection.es6.js'
import CollectionLabel from '../../components/layout/collection/CollectionLabel.es6.js'
import List from '../../components/layout/list/List.es6.js'
import ListAction from '../../components/layout/list/ListAction.es6.js'
import ListSearch from '../../components/layout/list/ListSearch.es6.js'
import ListItem from '../../components/layout/list/ListItem.es6.js'
import ListItemContent from '../../components/layout/list/ListItemContent.es6.js'
import ListItemIcon from '../../components/layout/list/ListItemIcon.es6.js'
import ListItemAction from '../../components/layout/list/ListItemAction.es6.js'
import ListItemEmpty from '../../components/layout/list/ListItemEmpty.es6.js'
import DragList from '../../components/layout/list/DragList.es6.js'
import DragListItem from '../../components/layout/list/DragListItem.es6.js'
import Button from '../../components/form/button/Button.es6.js'
import Card from '../../components/layout/card/Card.es6.js'
import Collapse from '../../components/layout/collapse/Collapse.es6.js'
import NotificationCard from '../../components/layout/notification-card/NotificationCard.es6.js'
import FilterOption from '../../components/form/filter-option/FilterOption.es6.js'
import {
  Notice,
  Lock,
  ChevronRight,
  Home,
  TimesCircle,
  PlusCircle,
  Disabled
} from '../../components/Icons.es6.js'
import CollapsibleCardList from '../../components/layout/collapsible-card-list/CollapsibleCardList.es6.js'
import CollapsibleCardListItem from '../../components/layout/collapsible-card-list/CollapsibleCardListItem.es6.js'

// fake data generator for demo
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`
  }))

// function to help with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

class Miscellaneous extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cardListItems: getItems(6),
      collectionListItems: getItems(7)
    }
    this.onDragEnd = this.onDragEnd.bind(this)
    this.onCollectionListDragEnd = this.onCollectionListDragEnd.bind(this)
    this.onCardListDragEnd = this.onCardListDragEnd.bind(this)
  }

  onDragEnd (name, list, result) {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const items = reorder(list, result.source.index, result.destination.index)

    this.setState({
      [name]: items
    })
  }

  onCardListDragEnd (result) {
    this.onDragEnd('cardListItems', this.state.cardListItems, result)
  }

  onCollectionListDragEnd (result) {
    this.onDragEnd(
      'collectionListItems',
      this.state.collectionListItems,
      result
    )
  }

  render () {
    return (
      <DemoLayoutContent>
        <Panel>
          <div className="app-page-title">
            <h1>Miscellaneous</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              aliquid suscipit natus rem, ipsa molestiae voluptate vero
              obcaecati voluptatibus ea nobis neque necessitatibus excepturi
              perferendis, fuga voluptatem totam quae quas.
            </p>
          </div>
          <div className="ds-row">
            <div className="ds-col">
              <h4 className="u-m-b-sm">Collection</h4>
              <Collection>
                <CollectionLabel>Collection</CollectionLabel>
                <List collectionList>
                  <ListItemEmpty label="Add an item" />
                </List>
                <ListAction collectionAction>
                  <Button label="Add item" />
                </ListAction>
              </Collection>

              <Divider />

              <CardList bordered>
                <CardListConfirmation
                  title="Override colors?"
                  help="This will clear any changes you've made to the section colors listed below. Are you sure you want to continue?"
                  icon={<TimesCircle color="#401BDD" />}
                  yes="Override colors"
                  no="Cancel"
                />
                {this.state.collectionListItems.map((item) => (
                  <ListItem cardListItem key={item.id}>
                    <ListItemContent>{item.content}</ListItemContent>
                  </ListItem>
                ))}
              </CardList>

              <Divider />

              <Collection>
                <CollectionLabel>Collection</CollectionLabel>
                <ListSearch
                  collectionSearch
                  value={''}
                  onInputChange={() => {}}
                  placeholder="Search"
                />
                <DragList
                  onDragEnd={this.onCollectionListDragEnd}
                  droppableId="collection"
                  collectionList
                >
                  {this.state.collectionListItems.map((item) => (
                    <DragListItem
                      key={item.id}
                      draggableId={item.id}
                      collectionListItem
                    >
                      <ListItemContent>{item.content}</ListItemContent>
                      <ListItemAction collectionListItemAction>
                        <TimesCircle color="#ccc" />
                      </ListItemAction>
                    </DragListItem>
                  ))}
                </DragList>
                <ListAction collectionAction>
                  <Button label="Add item" />
                </ListAction>
              </Collection>
            </div>

            <div className="ds-col">
              <h4 className="u-m-b-sm">Card lists</h4>
              <CardList>
                <ListSearch
                  cardSearch
                  value={''}
                  onInputChange={() => {}}
                  placeholder="Search"
                />
                <List cardList>
                  <ListItem cardListItem>
                    <ListItemIcon icon={<Home color="#ccc" />} />
                    <ListItemContent>List item</ListItemContent>
                    <ListItemAction cardListItemAction>
                      <ChevronRight color="#ccc" width={7} height={11} />
                    </ListItemAction>
                  </ListItem>
                  <ListItem cardListItem>
                    <ListItemIcon />
                    <ListItemContent>List item</ListItemContent>
                    <ListItemAction cardListItemAction>
                      <ChevronRight color="#ccc" width={7} height={11} />
                    </ListItemAction>
                  </ListItem>
                  <ListItem className="card-list-item--more" cardListItem>
                    <ListItemIcon />
                    <ListItemContent className="">Show all...</ListItemContent>
                  </ListItem>
                </List>
                <ListAction cardListAction>
                  <Button label="Add page" />
                </ListAction>
              </CardList>
              <Divider />
              <CardList>
                <List cardList>
                  <ListItem cardListItem>
                    <ListItemIcon draggableIcon />
                    <ListItemContent>List item</ListItemContent>
                    <ListItemAction cardListItemAction>
                      <Notice color="#ccc" />
                    </ListItemAction>
                  </ListItem>
                  <ListItem cardListItem>
                    <ListItemIcon icon={<Lock color="#ccc" />} />
                    <ListItemContent>List item</ListItemContent>
                    <ListItemAction cardListItemAction>
                      <ChevronRight color="#ccc" width={7} height={11} />
                    </ListItemAction>
                  </ListItem>
                  <ListItem cardListItem>
                    <ListItemIcon />
                    <ListItemContent>List item</ListItemContent>
                  </ListItem>
                </List>
              </CardList>

              <Divider />

              <CardList>
                <List cardList>
                  <ListItem cardListItem>
                    <ListItemContent subtitle="Logo and navigation links">
                      Header
                    </ListItemContent>
                    <ListItemAction cardListItemAction>
                      <ChevronRight color="#ccc" width={7} height={11} />
                    </ListItemAction>
                  </ListItem>
                  <ListItem cardListItem>
                    <ListItemContent subtitle="Links, contact info, map">
                      Footer
                    </ListItemContent>
                    <ListItemAction cardListItemAction>
                      <ChevronRight color="#ccc" width={7} height={11} />
                    </ListItemAction>
                  </ListItem>
                </List>
              </CardList>

              <Divider />

              <CardList>
                <ListItem cardListItem>
                  <ListItemIcon />
                  <ListItemContent>Header</ListItemContent>
                </ListItem>
                <DragList
                  onDragEnd={this.onCardListDragEnd}
                  droppableId="cardList"
                  cardList
                >
                  {this.state.cardListItems.map((item) => (
                    <DragListItem
                      key={item.id}
                      draggableId={item.id}
                      cardListItem
                    >
                      <ListItemContent>{item.content}</ListItemContent>
                      <ListItemAction cardListItemAction>
                        <TimesCircle color="#ccc" />
                      </ListItemAction>
                    </DragListItem>
                  ))}
                </DragList>
                <ListItem cardListItem>
                  <ListItemIcon />
                  <ListItemContent>Footer</ListItemContent>
                </ListItem>
              </CardList>
            </div>

            <div className="ds-col">
              <h4 className="u-m-b-sm">Cards / Objects</h4>
              <Card
                label="Label"
                value="Some value"
                icon={<PlusCircle color="#ccc" />}
                add
              />
              <Card
                label="Label"
                value="Some value"
                icon={<ChevronRight color="#ccc" width={7} height={11} />}
              />
              <Card
                label="Label"
                value="Some value"
                icon={<Disabled />}
                disabled
              />

              <Divider />

              <h4 className="u-m-b-sm">Collapse</h4>
              <Collapse collapseHeight={60} isCollapsed={true}>
                <p>A very long lorem ipsum text here.</p>
              </Collapse>

              <Divider />

              <h4 className="u-m-b-sm">NotificationCard</h4>
              <NotificationCard label="Successful notification!" />

              <Divider />

              <h4 className="u-m-b-sm">CollapsibleCardList</h4>
              <CollapsibleCardList activeIndex={0}>
                <CollapsibleCardListItem
                  collapsedLayout={
                    <div>
                      <h1>Title</h1>
                      <h4>Subtitle</h4>
                    </div>
                  }
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, odio.
                  </p>
                </CollapsibleCardListItem>
                <CollapsibleCardListItem collapsedLayout="Label 2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, odio.
                  </p>
                </CollapsibleCardListItem>
                <CollapsibleCardListItem collapsedLayout="Label 3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, odio.
                  </p>
                </CollapsibleCardListItem>
              </CollapsibleCardList>
            </div>
          </div>
          <hr />
          <div className="ds-row">
            <div className="ds-col" style={{ minHeight: '300px' }}>
              <h4 className="u-m-b-sm">Filter Option</h4>
              <FilterOption />
            </div>
            <div className="ds-col"></div>
            <div className="ds-col"></div>
          </div>
        </Panel>
      </DemoLayoutContent>
    )
  }
}

export default Miscellaneous
