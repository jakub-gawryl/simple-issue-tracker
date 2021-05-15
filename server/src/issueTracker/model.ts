import {v4 as uuidv4} from 'uuid';
import {Issue, EIssueStatus} from './types'

const Issues: Issue[] = [
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
]

export default Issues;