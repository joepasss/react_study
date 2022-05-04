export interface feedback {
  id: string;
  rating: number;
  text: string;
}

export interface newFeedback {
  rating: number;
  text: string;
}

export interface feedbacks extends Array<feedback> {}

export const FeedbackData: feedbacks = [
  {
    id: '1',
    rating: 10,
    text: 'Lorem ipsum dolor sit amet consectur adipisicing elit.',
  },
  {
    id: '2',
    rating: 4,
    text: 'Lorem ipsum dolor sit amet consectur adipisicing elit.',
  },
  {
    id: '3',
    rating: 6,
    text: 'Lorem ipsum dolor sit amet consectur adipisicing elit.',
  },
  {
    id: '4',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet consectur adipisicing elit.',
  },
  {
    id: '5',
    rating: 8,
    text: 'Lorem ipsum dolor sit amet consectur adipisicing elit.',
  },
];
