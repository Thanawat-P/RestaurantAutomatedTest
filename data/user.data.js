const customer = {
  valid: { username: 'JohnArbuckle', password: 'garfield40' },
  invalid: { username: 'Johnson', password: 'wong' },
};

const staff = {
  valid: { username: 'staff1', password: 'staffsmartstuff' },
  invalid: { username: 'staf1', password: 'staff' },
};

const admin = {
  valid: {username: 'admin1',password: 'admin123'},
  invalid: {username: 'admin',password: 'admin'}
}
const blankName =  {
  name:{ username : '',password: ''}
}
module.exports = { customer, staff ,admin };