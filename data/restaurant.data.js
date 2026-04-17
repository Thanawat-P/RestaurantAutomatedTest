const reservation = {
  valid: { Date: '4-20-2026', Time: '18:42',guest:'4' },
  invalid: { Date: '30-2-20261', Time: '15:62',guest:'400' },
  past: { Date: '1-1-2024', Time: '03:00',guest:'-1' },
  empty: { Date: '', Time: '',guest:'' }
};
const table = {
    T01 :{ Pax : 'T-01 — 2 pax (available)'},
    T02 :{ Pax : 'T-02 — 4 pax (available)'},
    T03 :{ Pax : 'T-03 — 6 pax (available)'},
}
module.exports = { reservation,table };