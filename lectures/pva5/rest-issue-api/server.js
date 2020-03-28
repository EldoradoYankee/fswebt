const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

const issues = [
  {
    id: 1, status: 'Open', owner: 'Michael',
    created: new Date('2019-08-15'), effort: 5, completionDate: undefined,
    title: 'Error in console when clicking Add',
  },
  {
    id: 2, status: 'Assigned', owner: 'Peter',
    created: new Date('2019-08-16'), effort: 14, completionDate: new Date('2019-08-30'),
    title: 'Missing bottom border on panel',
  },
];

//TODO GET /api/issues

//TODO POST /api/issues

app.listen(3000, () => {
  console.log('App started on port 3000');
});
