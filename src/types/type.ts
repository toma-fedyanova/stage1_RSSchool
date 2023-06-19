export interface InfoTask{
  title: string,
  context: string,
  example?: string,
  task: string,
}

export type arrayString = Array<string[]>;

export enum LevelsCount {
  zero = 0,
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5, 
  six = 6,
  seven = 7,
  eight = 8,
  nine = 9,
  ten = 10
}
export enum Answers {
  one = '*',
  two = 'cat',
  three = '#bird',
  four = '.dog',
  five = 'cat > fish', 
  six = '[name="пушок"]',
  seven = '[name^="мар"]',
  eight = '[name$="акс"]',
  nine = 'cat:hover',
  ten = 'car :not(dog)'
}