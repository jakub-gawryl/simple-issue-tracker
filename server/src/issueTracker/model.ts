import {v4 as uuidv4} from 'uuid';
import {Issue, EIssueStatus} from './types'

export default class IssuesModel {

  protected _issues: Issue[] = [];

  constructor () {
    // TODO Temporary add issues - make more persistent solution
    this._issues.push(
      {
        id: uuidv4(),
        title: 'First task to do',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
        status: EIssueStatus.OPEN
      },
      {
        id: uuidv4(),
        title: 'Second task - in progress',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        status: EIssueStatus.PENDING
      },
      {
        id: uuidv4(),
        title: 'Resolved task',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        status: EIssueStatus.CLOSED
      }
    )
  }

  /**
   * Returns all issues
   */
  get issues() {
    return this._issues;
  }

  /**
   * Add new issue
   * 
   * @param {Issue} newIssue  Issue to save
   * @returns {Issue}
   */
  public addIssue(newIssue: Issue): Issue {
    this._issues.push(newIssue)

    return newIssue;
  }

}