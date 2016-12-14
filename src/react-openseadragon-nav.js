import React from 'react'

export default class OpenSeadragonNav extends React.Component {
    constructor(props) {
      super(props)
      this.active_index = this.active_index.bind(this)
      this.active_class = this.active_class.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

    active_index() {
      return this.props.getActiveItemIndex()
    }

    active_class(i) {
      return (this.active_index() == i) ? 'active' : ''
    }

    handleChange(e, target){
      this.props.viewer.goToPage(e.target.value)
    }

    render() {
      const { items, class_name, setActiveItem, getActiveItem, tocs, viewer } = this.props
      let active_class = this.active_class
      return (
                <div className="row image-nav">
                  <ul className="nav nav-pills">
                    {items.map(function(item, i) {
                      return <li role="presentation" className={active_class(i)} onClick={setActiveItem.bind(this, i)} key={i} ><a href="">{item.label}</a></li>
                    })}
                    <li>
                      <div className="toc-select">
                        <label for="toc">Table of Contents:</label> 
                        <select  class="dropdown-menu" name="toc" onChange={this.handleChange}>
                          {console.log(tocs)}
                          {tocs.map(function(toc, i) {
                            let page = i + 1
                            return <option value={i} key={i}>{page}. {toc}</option>
                          })}                    
                        </select>
                      </div>
                    </li>
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