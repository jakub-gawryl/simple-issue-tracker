import React, {useState, useEffect} from 'react'
import {Grid, Segment} from 'semantic-ui-react'
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
    /* */
  }, [])

  return (
    <Segment>
      <Grid columns={3} divided>
       <Grid.Column>
          <IssueGroup
            title='Opened issues:'
            color='red'
            items={issues.filter(issue => issue.status === 'open')}
          />
        </Grid.Column>

        <Grid.Column>
          <IssueGroup
            title='Pending issues:'
            color='yellow'
            items={issues.filter(issue => issue.status === 'pending')}
          />
        </Grid.Column>

        <Grid.Column>
          <IssueGroup
            title='Closed issues:'
            color='green'
            items={issues.filter(issue => issue.status === 'closed')}
          />
        </Grid.Column>
      </Grid>

    </Segment>
  )
}

export default IssuesWrapper
