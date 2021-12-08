<template>
    <div class="col">

        <div v-for="character in characters">
            <p>{{character.name}}</p>
            <p>{{character.id}}</p>
            <p>{{character.thumbnail.path}}.jpg</p>
            <hr>
        </div>
        
    </div>
</template>

<script> 
import {public_key, secret_key} from '../marvel'
import axios from 'axios'

export default {
    name: 'Characters',

    data () {
        return {
            characters: []
        }
    },

    mounted () {
        this.getCharacters()
    },

    methods: {
        getCharacters: function(){
            axios
            .get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
            .then(response => (this.characters = response.data.data.results))    
            .catch((error) => {
                console.log(error)
                }
            )
        }
    }

}
</script>
