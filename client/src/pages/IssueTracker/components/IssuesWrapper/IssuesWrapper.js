import React, {useState, useEffect} from 'react'
import {Segment} from 'semantic-ui-react'
import {ENDPOINT_URI} from './../../../../config'
import {makeRequest} from '../../../../Helpers/Helpers'

import IssueGroup from './../IssueGroup/IssueGroup'

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
      <IssueGroup
        title='Opened issues:'
        color='red'
        items={issues.filter(issue => issue.status === 'open')}
      />

      <IssueGroup
        title='Pending issues:'
        color='yellow'
        items={issues.filter(issue => issue.status === 'pending')}
      />

      <IssueGroup
        title='Closed issues:'
        color='green'
        items={issues.filter(issue => issue.status === 'closed')}
      />
    </Segment>
  )
}

export default IssuesWrapper
