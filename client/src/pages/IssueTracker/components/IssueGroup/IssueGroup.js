import React from 'react'
import {Header} from 'semantic-ui-react'
import Issue from './../Issue/Issue'

const IssueGroup = (params) => {

  const {
    title = '',
    color = '',
    items = [],
    onIssueChangeStatus = () => {}
  } = params;

  return (
    <>
      <Header as='h3' color={color} >{title}</Header>
      {items.map(issue => (
        <Issue
          key={issue.id}
          id={issue.id}
          title={issue.title}
          description={issue.description}
          status={issue.status}
          color={color}
          onIssueChangeStatus={onIssueChangeStatus}
        />
      ))}
    </>
  )
}

export default IssueGroup
