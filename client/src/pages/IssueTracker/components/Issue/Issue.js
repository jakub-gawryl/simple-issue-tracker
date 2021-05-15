import React from 'react'
import {Card} from 'semantic-ui-react'

const Issue = ({title = '', description = '', color = 'open', onUpdate = () => {}}) => {

  return (
    <Card color={color}>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default Issue
