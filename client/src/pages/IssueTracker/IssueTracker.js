import React, {useState, useEffect} from 'react'
import {ENDPOINT_URI} from './../../config'
import {makeRequest} from '../../Helpers/Helpers'

import Header from './../../components/Header/Header'
import AddIssue from './components/AddIssue/AddIssue'
import IssuesWrapper from './components/IssuesWrapper/IssuesWrapper'

const Issues = () => {

  const [issues, setIssues] = useState([]);

  // Get data from server
  const getIssues = () => {
    makeRequest(`${ENDPOINT_URI}/issues`).then(response => {
      const fetchedIssues = response.data.map(item => {
        item.header = item.title;
        return item;
      });

      setIssues(fetchedIssues);
    })
  }

  // Get data on init
  useEffect(() => getIssues(), [])

  // Add new issue
  const onAddNewIssue = async (newIssue) => {
    await makeRequest(`${ENDPOINT_URI}/issues`, newIssue, 'POST')
    getIssues();
  }

  return (
    <>
      <Header />
      <IssuesWrapper issues={issues} />
      <AddIssue onAddNewIssue={onAddNewIssue}/>
    </>
  )
}

export default Issues;