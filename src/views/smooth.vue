<template>
   <div id="inbox_chat">
        <div class="chat_list active_chat" style="border-top:solid black 2px;" v-for="smoothie in smoothies" :key="smoothie.id">
            <i class="material-icons" @click="deleteSmoothie(smoothie.id)">delete</i>
            <div class="chat_people">
                <div class="chat_ib">
                    <h5>{{ smoothie.title }}</h5>
                    <p> ingredients {{ smoothie.slug }}</p>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    name: 'smooth',
    data () {
        return{
            smoothies:[
            {title: 'ninja' , slug: 'ninja-brow', ingredients: ['bananas','apple','pære'], id:'1'},
            {title: 'bish' , slug: 'bash-brow', ingredients: ['løve','tige','eple'], id:'2'}
        ]
        }
    },
    methods: {
        deleteSmoothie(id){
            this.smoothies = this.smoothies.filter(smoothie=>{
                return smoothie.id != id;
            })
        }
    }
}
</script>

<style>

</style>