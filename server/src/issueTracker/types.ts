export enum EIssueStatus {
  OPEN = 'open',
  PENDING = 'pending',
  CLOSED = 'closed',
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  status: EIssueStatus;
}