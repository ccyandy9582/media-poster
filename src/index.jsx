import React from "react"
import ReactDOM from "react-dom"
import './index.scss'
import { Container } from "react-bootstrap"

import Facebook from "./components/Facebook"

ReactDOM.render(
  <Container>
    <Facebook />
  </Container>
  ,document.getElementById("app")
)