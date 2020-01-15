# React Year Picker

A simple Yearpicker component for React

## Installation

The package can be installed via NPM and YARN:

```
npm install rc-year-picker --save
```
	Or

```
yarn add rc-year-picker
```

```js
import React from "react";
import YearPicker from "react-year-picker";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    console.log(date);
  }

  render() {
    return <YearPicker onChange={this.handleChange} placeholder="Birth year" thisYearLabel='Current year' />;
  }
}
```
