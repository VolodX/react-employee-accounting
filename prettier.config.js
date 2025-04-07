module.exports = {
  singleQuote: true, // Одинарні лапки для JS
  arrowParens: 'avoid', // Не обгортати одинокі аргументи в дужки; or always
  tabWidth: 2, // Використовувати 2 пробіли для відступів
  useTabs: false, // Використовувати пробіли, а не таби
  bracketSpacing: false, // Без пробілів між фігурними дужками
  // bracketSameLine: true,
  trailingComma: 'none', // Без ком
  printWidth: 80, // Максимальна ширина рядка 120 символів
  overrides: [
    {
      files: ['*.css', '*.html'],
      options: {
        singleQuote: false, // Подвійні лапки для CSS і HTML
        bracketSpacing: true, // Пробіли між дужками в CSS і HTML
        printWidth: 120
      }
    }
  ]
};
