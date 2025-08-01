export interface User {
  id: string;
  name: string;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  tags: string[];
  members: User[];
  campus: string;
  createdAt: string;
}

export interface GroupDetails {
  id: string;
  name: string;
  description: string;
  members: { id: string; name: string }[];
  chatMessages: { user: string; text: string; timestamp: string }[];
  resources: { name: string; url: string }[];
}