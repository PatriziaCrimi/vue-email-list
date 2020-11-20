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
    const self = this;
    for (let i = 0; i < self.users_quantity; i++) {
      axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function(ajax_call) {
        let user_email = ajax_call.data.response;
        let user_name = user_email.split('@')[0];
        let email_object = {
          name: user_name,
          email: user_email,
        };
        self.users_list.push(email_object);
      });
    }
    console.log(self.users_list);
  },  // Closing mounted
  methods: {

  },  // Closing methods
});
