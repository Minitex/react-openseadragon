import React from 'react'

export default class OpenSeadragonNav extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e, target){
      this.props.viewer.goToPage(e.target.value)
    }

    render() {
      const { tocs, id } = this.props
      if (tocs.length > 1) {
        return (
                  <div className="row image-nav">
                    <ul className="nav nav-pills">
                      <li>
                        <div className="toc-select">
                          <label htmlFor="toc">Table of Contents:</label>
                          <select name="toc" onChange={this.handleChange}>
                            {tocs.map(function(toc, i) {
                              let page = i + 1
                              if (id == i) {
                                return <option value={i} key={i} selected="selected">{page}. {toc}</option>
                              } else {
                                return <option value={i} key={i}>{page}. {toc}</option>
                              }
                            })}
                          </select>
                        </div>
                      </li>
                    </ul>
                  </div>
                )
      } else {
        return <span />
      }
    }

}

const propTypes = {
  tocs: React.PropTypes.array,
  id: React.PropTypes.number.isRequired,
  viewer: React.PropTypes.object,
  pageHandler: React.PropTypes.func
}

OpenSeadragonNav.propTypes = propTypes