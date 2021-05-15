import {describe, expect, test} from '@jest/globals';
import {createIssue, getIssueById} from './controller'
import {EIssueStatus} from './types';

const title = 'Example issue ttle';
const description = 'Example issue description %123';

// Some example tests
describe('Testing issues controller', () => {

  test('Create an issue', () => {
    const issue1 = createIssue(title, description, EIssueStatus.OPEN);

    expect(issue1.id).toHaveLength(36);
    expect(issue1.title).toBe(title);
    expect(issue1.status).toBe(EIssueStatus.OPEN);
  })

  test('Get an issue with non-existing ID', () => {
    const issue2 = getIssueById("some-non-existing-id");
    expect(issue2).toBeNull();
  })
});
