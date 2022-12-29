import { Timestamp } from 'firebase/firestore';

export interface Group {
  id: string;
  createAt: {
    seconds: number;
    nanoseconds: number;
  };
  groupName: string;
  groupImage: string;
  recentMessage: {
    messageText: string;
    toSee: number;
    readBy: {
      sentBy: string;
      sentAt: Timestamp;
    };
  };
  members: array<string>;
}
