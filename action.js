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
    emails_quantity: 10,
    emails_list: []
  },  // Closing data
  mounted: function() {
    const self = this;
    for (let i = 0; i < self.emails_quantity; i++) {
      axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function(ajax_call) {
        console.log(ajax_call);
        let email = ajax_call.data.response;
        self.emails_list.push(email);
      });
    }
  },  // Closing mounted
  methods: {

  },  // Closing methods
});
