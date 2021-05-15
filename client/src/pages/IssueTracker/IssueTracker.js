import React, {useState, useEffect} from 'react'
import {ENDPOINT_URI} from './../../config'
import {makeRequest} from '../../Helpers/Helpers'

import Header from './../../components/Header/Header'
import AddIssue from './components/AddIssue/AddIssue'
import IssuesWrapper from './components/IssuesWrapper/IssuesWrapper'

const Issues = () => {

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
    <>
      <Header />
      <IssuesWrapper issues={issues} />
      <AddIssue />
    </>
  )
}

export default Issues;