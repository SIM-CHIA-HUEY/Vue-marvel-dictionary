<template>
    <div class="col">
        Detail page
        <p>{{ this.$route.params.id }}</p>
    </div>
</template>

<script> 
import {public_key} from '../marvel'
import axios from 'axios'

export default {
    name: 'Detail',

    mounted () {
        this.getCharacter()
    },

    methods: {
        getCharacter: function(){

            var characterId = this.$route.params.id
            axios.get(`http://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${public_key}`)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            }

            )

            
        }

    }
}
</script>