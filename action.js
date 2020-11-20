/* ASSIGNMENT
Tramite l'API https://flynn.boolean.careers/exercises/api/random/mail
generare una lista di 10 indirizzi email
e stamparle in pagina con vue.
Dopo date sfogo alla vostra creatività per rendere più accattivante la grafica della pagina.
*/

// ------------------------------ VUE JS ------------------------------

let app = new Vue({
  el: '#root',
  data: {
    title: 'Vue Email List',
    users_quantity: 10,
    users_list: []
  },  // Closing data
  mounted: function() {
    // Keyword "this" cannot be used in axios ".then" unless creating an arrow function
    const self = this;
    // Generating the random emails
    for (let i = 0; i < self.users_quantity; i++) {
      // AJAX call
      axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function(ajax_call) {
        // Accessing the email value in the AJAX object
        let user_email = ajax_call.data.response;
        let is_included = false;
        // Scrolling the users_list array (of objects) to check if the random email generated is a duplicate
        for (let j = 0; j < self.users_list.length && !is_included; j++) {
          if (self.users_list[j].email.includes(user_email)) {
            is_included = true;
          } else {
            is_included = false;
          };
        }
        // If it is not a duplicate, then it can be pushed in the array
        if (!is_included) {
          // Creating the user-name
          let user_name = user_email.split('@')[0];
          // Creating the object to be pushed in the users_list array
          let member_details = {
            name: user_name,
            email: user_email,
          };
          self.users_list.push(member_details);
        }
      });
    }
    console.log(self.users_list);
  },  // Closing mounted
});
