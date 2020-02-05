Vue.component('goal_template', {
    props: ['goal_title', 'goal_description', 'goal_dateSet'],
    
    
    template: '<div class="goal_container"><h3>{{goal_title}}</h3><p>{{goal_description}}</p><p>{{goal_dateSet}}</p></div>'
    })


const app = new Vue({
    el: '#app',
    data: {
        list: [
        ],

        // blank list for the list input to be added
        listItem: {
            title: '',
            des: '',
            date: null
        }
    }, 

})