import './src/styles/global.css'
import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key='gleam#1'
      dangerouslySetInnerHTML={{
        __html: `(function(d, t){
        if(!(window.location.hash!='#gleam'&&(''+document.cookie).match(/(^|;)\s*Gleamz68kq=X($|;)/))) {
            var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
            g.src = "https://widget.gleamjs.io/z68kq/ol.js"; s.parentNode.insertBefore(g, s);    
        }}
        (document, "script"));`
      }}
    />
  ])
}
