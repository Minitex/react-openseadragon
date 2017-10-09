import React from 'react'
const OpenSeadragonControls = props => {
  return (<ul className="osd-toolbar">
            <li><a id="zoom-in"><i className="glyphicon glyphicon-zoom-in"></i></a></li>
            <li><a id="zoom-out"><i className="glyphicon glyphicon-zoom-out"></i></a></li>
            <li><a id="reset"><i className="glyphicon glyphicon-home"></i></a></li>
            <li><a id="full-page"><i className="glyphicon glyphicon-resize-full"></i></a></li>
          </ul>)
  }

export default OpenSeadragonControls
