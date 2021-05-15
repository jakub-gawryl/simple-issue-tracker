import IssueModel from './model';
import {v4 as uuidv4} from 'uuid';
import {EIssueStatus, Issue} from './types';

const model = new IssueModel();

export const getAllIssues = (): Issue[] => {
  return model.issues;
}

export const getIssueById = (issueId: string): Issue | null => {
  const filtered = model.issues.filter((issue: Issue) => issue.id === issueId);
  return filtered[0] || null;
}

export const createIssue = (title: string, description: string, status: EIssueStatus = EIssueStatus.OPEN): Issue => {
  const newIssue: Issue = {
    id: uuidv4(),
    title,
    description,
    status
  };

  model.addIssue(newIssue);

  return newIssue;
}