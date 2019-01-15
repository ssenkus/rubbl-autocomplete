import staticOptions from '../data/staticOptions';

const optionsFilter = (inputValue) => {
  if (inputValue) {
    return staticOptions.filter(i =>
        i.label.toLowerCase().indexOf(inputValue.toLowerCase()) === 0
    );
  }
  return staticOptions;
};

const optionsLoader = (inputValue, callback) => {
  callback(optionsFilter(inputValue));
};

export default optionsLoader;
