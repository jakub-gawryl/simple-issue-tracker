import React from 'react'
import './Header.css'
import {Segment, Header as SUIHeader, Icon} from 'semantic-ui-react'

const Header = () => {
  return (
    <Segment placeholder>
      <SUIHeader as='h1' icon>
        <Icon name='calendar outline' />
        Issue Tracker App
      </SUIHeader>
    </Segment>
  )
}

export default Header
