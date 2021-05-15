import React from 'react'
import {Grid, Segment} from 'semantic-ui-react'

import IssueGroup from './../IssueGroup/IssueGroup'

const IssuesWrapper = (params) => {

  const {
    issues = [],
    onIssueChangeStatus = () => {}
  } = params;

  return (
    <Segment>
      <Grid columns={3} divided>
       <Grid.Column>
          <IssueGroup
            title='Opened issues:'
            color='red'
            items={issues.filter(issue => issue.status === 'open')}
            onIssueChangeStatus={onIssueChangeStatus}
          />
        </Grid.Column>

        <Grid.Column>
          <IssueGroup
            title='Pending issues:'
            color='yellow'
            items={issues.filter(issue => issue.status === 'pending')}
            onIssueChangeStatus={onIssueChangeStatus}
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
