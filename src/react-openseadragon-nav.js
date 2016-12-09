import React from 'react'

export default class OpenSeadragonNav extends React.Component {
    constructor(props) {
      super(props)
      this.active_index = this.active_index.bind(this)
      this.active_class = this.active_class.bind(this)
    }

    active_index() {
      return this.props.getActiveItemIndex()
    }

    active_class(i) {
      return (this.active_index() == i) ? 'active' : ''
    }

    render() {
      const { items, class_name, setActiveItem, getActiveItem } = this.props
      let active_class = this.active_class
      return (
                <div className="row image-nav">
                  <ul className="nav nav-pills">
                    {items.map(function(item, i) {
                      return <li role="presentation" className={active_class(i)} onClick={setActiveItem.bind(this, i)} key={i} ><a href="">{item.label}</a></li>
                    })}
                  </ul>
                </div>
              )
    }

}

const propTypes = {
  items: React.PropTypes.array.isRequired,
  setActiveItem: React.PropTypes.func.isRequired
}

OpenSeadragonNav.propTypes = propTypes