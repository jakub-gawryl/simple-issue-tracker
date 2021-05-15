import React from 'react'
import {Header} from 'semantic-ui-react'
import Issue from './../Issue/Issue'

const IssueGroup = ({title = '', color = '', items = []}) => {
  return (
    <>
      <Header as='h3' color={color} >{title}</Header>
      {items.map(issue => (
        <Issue
          key={issue.id}
          title={issue.title}
          description={issue.description}
          color={color}
        />
      ))}
    </>
  )
}

export default IssueGroup
