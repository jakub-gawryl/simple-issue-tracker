import IssueModel from './model';
import {Issue} from './types'

const model = new IssueModel();

export const getAllIssues = (): Issue[] => {
  return model.issues;
}