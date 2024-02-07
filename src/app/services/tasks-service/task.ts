export interface Task {
  id : string;
  name: string;
  description: string;
  priority: number;
  tags: string[];
  year: number;
  spanType: number;
  spanValue: number;
  done: boolean;
}
