import React, {useState, useEffect} from 'react'
import {Segment, Header, Card} from 'semantic-ui-react'
import {ENDPOINT_URI} from './../../../../config'
import {makeRequest} from '../../../../Helpers/Helpers'

const IssuesWrapper = () => {

  const [issues, setIssues] = useState([]);

  useEffect(() => {
    makeRequest(`${ENDPOINT_URI}/issues`).then(response => {
      const fetchedIssues = response.data.map(item => {
        item.header = item.title;
        return item;
      });

      setIssues(fetchedIssues);
    })
  })

  return (
    <Segment>
      
      <Header as='h3' color='red'>Open issues:</Header>
      <Card.Group items={issues.filter(issue => issue.status === 'open')} />

      <Header as='h3' color='yellow'>Pending issues:</Header>
      <Card.Group items={issues.filter(issue => issue.status === 'pending')} />

      <Header as='h3' color='green'>Closed issues:</Header>
      <Card.Group items={issues.filter(issue => issue.status === 'closed')} />
    </Segment>
  )
}

export default IssuesWrapper
