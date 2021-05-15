import React from 'react'
import {Button, Card} from 'semantic-ui-react'
import './Issue.css'

const Issue = (params) => {

  const {
    id,
    title = '',
    description = '',
    color = 'open',
    status,
    onIssueChangeStatus = () => {}
  } = params;

  return (
    <Card color={color}>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
        {status === 'open' && (
           <div className='control-buttons'>
            <Button fluid color='yellow' onClick={() => onIssueChangeStatus(id, 'pending')}>Set as pending</Button>
            <Button fluid color='green' onClick={() => onIssueChangeStatus(id, 'closed')}>Set as closed</Button>
          </div>
        )}
        {status === 'pending' && (
          <div className='control-buttons'>
            <Button fluid color='green'  onClick={() => onIssueChangeStatus(id, 'closed')}>Set as closed</Button>
          </div>
        )}
      </Card.Content>
    </Card>
  )
}

export default Issue
