import {EIssueStatus} from './../issueTracker/types';
import express from 'express'
const router = express.Router()
import {getAllIssues, getIssueById, createIssue} from '../issueTracker/controller';


/**
* @route         GET     /issues
* @description           GET all issues
*/
router.get('/issues', async (req, res) => {
  // TODO - remove redundant code and create more common solution for handling success/error responses
  res.json({
    success: true,
    data: getAllIssues()
  });
});

/**
* @route         GET     /issues/:issueId
* @description           GET single issue by it's ID
*/
router.get('/issues/:issueId', async (req, res) => {
  const {issueId} = req.params;
  const issue = getIssueById(issueId);

  if (!issue) {
    return res.status(404).json({
      success: false,
      msg: `Issue with id ${issueId} not found!`
    });
  };

  res.json({
    success: true,
    data: issue
  });
});


/**
* @route         POST     /issues
* @description            Create new issue
*/
router.post('/issues', async (req, res) => {
  const {title, description} = req.body;

  if (!title || !description) {
    return res.status(400).json({
      success: false,
      msg: 'Title or description is not set'
    })
  }

  const createdIssue = createIssue(title, description)
  res.json({
    success: true,
    data: createdIssue
  });
});

/**
* @route         PUT      /issues/:issueId
* @description            Update issue
*/
router.put('/issues/:issueId', async (req, res) => {
  const {issueId} = req.params
  const {title, description, status: newStatus} = req.body;

  const issue = getIssueById(issueId);

  if (!issue || !issueId) {
    return res.status(400).json({
      success: false,
      msg: `Issue with id ${issueId} not found!`
    })
  }

  if (newStatus) {
    const {OPEN, PENDING, CLOSED} = EIssueStatus;
    
    // Check that the status is correct
    if (!Object.values(EIssueStatus).includes(newStatus)) {
      return res.status(400).json({
        success: false,
        msg: `Incorrect status ${newStatus}!`
      })
    }

    // Check if status can be changed
    const statusCanBechanged = issue.status === OPEN || (issue.status === PENDING && newStatus !== OPEN) || (issue.status === CLOSED && newStatus !== OPEN && newStatus !== PENDING)
    if (!statusCanBechanged) {
      return res.status(400).json({
        success: false,
        msg: `Cannot change status to ${newStatus}!`
      })
    }

    // TODO - Antipattern - modification of the issue parameters should take place in the controller!!!
    issue.status = newStatus;
  }

  // Modify the rest of the parameters, if they are sent
  // TODO - Antipattern - modification of the issue parameters should take place in the controller!!!
  if (title) {
    issue.title = title;
  }
  if (description) {
    issue.description = description;
  }

  res.json({
    success: true,
    data: issue
  });
});

export default router;