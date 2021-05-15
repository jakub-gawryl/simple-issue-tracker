import express from 'express'
const router = express.Router()
import {getAllIssues} from '../issueTracker/controller';


/**
* @route         GET     /issues
* @description           GET all issues
*/
router.get('/issues', async (req, res) => {
  res.json({
    success: true,
    data: getAllIssues()
  })
})

export default router;