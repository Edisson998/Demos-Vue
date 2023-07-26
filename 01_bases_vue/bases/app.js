const app = Vue.createApp({
    // template: ` 
    // <h1>Hola mundo</h1> 
    // <p>{{  }} </p>
    // `
    data(){
        return{
            quote: "I'am batman",
            author: "Bruce wayne"
        }
    },
    methods: {
        changeQuote(){
            console.log("Hola mundo");
            this.author = "Edison Narváez"
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    },
    watch: {},

})

app.mount('#myApp')