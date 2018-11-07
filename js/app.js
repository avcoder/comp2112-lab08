const money = [
  { level: '1', amount: '100' },
  { level: '2', amount: '200' },
  { level: '3', amount: '300' },
  { level: '4', amount: '500' },
  { level: '5', amount: '1,000' },
  { level: '6', amount: '2,000' },
  { level: '7', amount: '4,000' },
  { level: '8', amount: '8,000' },
  { level: '9', amount: '16,000' },
  { level: '10', amount: '25,000' },
  { level: '11', amount: '50,000' },
  { level: '12', amount: '100,000' },
  { level: '13', amount: '250,000' },
  { level: '14', amount: '500,000' },
  { level: '15', amount: '1,000,000' }
];

const app = new Vue({
  el: '#layout',
  mounted() {
    this.getTriviaQs();
  },
  data: {
    questions: [],
    index: 0,
    shuffledArray: [],
    items: money
  },
  methods: {
    currentQ() {
      return this.questions[this.index];
    },
    possibleAnswers(idx) {
      return this.shuffledArray[idx];
    },
    shuffle() {
      // we want to create an array that contains both correct and incorrect answers
      const tempArr = [
        this.currentQ().correct_answer,
        ...this.currentQ().incorrect_answers
      ];

      // we want to shuffle it.
      this.shuffledArray = _.shuffle(tempArr);
    },
    async getTriviaQs() {
      const response = await fetch('https://opentdb.com/api.php?amount=15');
      const data = await response.json();
      this.questions = data.results;
      this.shuffle();
    }
  }
});
