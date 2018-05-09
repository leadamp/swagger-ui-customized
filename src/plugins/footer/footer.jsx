import React from "react"

export default class Footer extends React.Component {
  render() {
    let year = (new Date()).getFullYear();
    return (
      <div className="footer" style={{
          maxWidth: "880px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          marginBottom: "50px",
          marginTop: "50px"
      }}
      >&copy; Copyright LeadAmp - { year }</div>
    )
  }
}
