<template>
    <div class="col">
        Detail page
        <p>{{ this.$route.params.id }}</p>
            
            <router-link :to="{ name: 'list' }">

<div> &lt; Back to list </div>
                    </router-link>

            <div v-for="char in character">
                <img :src="url" alt="character image">
                <br>
                {{char.name}}
                <br>
                {{char.description}}


            </div>
        
    </div>
</template>

<script> 
import {public_key} from '../marvel'
import axios from 'axios'

export default {
    name: 'Detail',

    data () {
        return {
            character:[],
            url:'',
            size:'standard_amazing'
        }
    },

    mounted () {
        this.getCharacter()
    },

    methods: {
        getCharacter: function(){

            var characterId = this.$route.params.id
            axios.get(`http://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${public_key}`)
            .then((result) => {
                console.log(result)
                result.data.data.results.forEach((item) => {
                    this.character.push(item)

                    this.url = `${item.thumbnail.path}/${this.size}.jpg`

                }

                )
             })
            .catch((error) => {
                console.log(error)
            }

            )

            
        }

    }
}
</script>