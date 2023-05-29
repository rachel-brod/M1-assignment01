let steve = 'Steve is Steve'
let rashondra = 'Rashondra Smith'
let best = 'Best Friend'
let sally = 'Sally Sand'
let robin = 'Robin Banks'
let aaron = 'Aaron Laundry'
const ul = (
    <ul style={{'color': 'blue', 'fontSize':'24px'}}>
     <li>{steve}</li>
     <li>{rashondra}</li>
     <li>{best}</li>
     <li>{sally}</li>
     <li>{robin}</li>
     <li>{aaron}</li>
     </ul>
     )

ReactDOM.render(ul, document.getElementById('content'))