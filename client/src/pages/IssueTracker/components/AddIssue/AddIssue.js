import React, {useState} from 'react'
import {Button, Form, Header, Input, Segment, TextArea} from 'semantic-ui-react'

const AddIssue = ({onAddNewIssue = () => {}}) => {

  const [newIssue, setNewIssue] = useState({
    title: "",
    description: ""
  })

  return (
    <Segment>
      <Header as='h3'>Add new issue</Header>
      <Form>
        <Form.Field
          id='issue-title'
          control={Input}
          label='Issue title'
          placeholder='Issue title'
          onChange={e => setNewIssue({
            ...newIssue,
            title: e.target.value
          })}
        />
      
        <Form.Field
          id='issue-description'
          control={TextArea}
          label='Issue description'
          placeholder='Issue description'
          onChange={e => setNewIssue({
            ...newIssue,
            description: e.target.value
          })}
        />

      <Button color='green' onClick={() => onAddNewIssue(newIssue)}>Add issue</Button>
      </Form>
    </Segment>
  )
}

export default AddIssue
