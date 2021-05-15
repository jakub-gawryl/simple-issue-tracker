import express from 'express'
const router = express.Router()
import {getAllIssues, createIssue} from '../issueTracker/controller';


/**
* @route         GET     /issues
* @description           GET all issues
*/
router.get('/issues', async (req, res) => {
  res.json({
    success: true,
    data: getAllIssues()
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

export default router;