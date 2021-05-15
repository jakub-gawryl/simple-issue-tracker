import issues from './model';
import {Issue} from './types'

export const getAllIssues = (): Issue[] => {
  return issues;
}