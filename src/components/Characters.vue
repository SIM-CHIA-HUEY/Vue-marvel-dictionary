<template>
    <div class="row alphabet">
        <div class="col-3">
                <p class="letter">A</p>
                <p class="letter">B</p>
                <p class="letter">C</p>
        </div>

        <div class="col-9">
            <div class="row cards">
                <div class="col-md-auto col-lg-3 card" v-for="character in characters">
                    <router-link :to="{ name: 'detail', params: { id: character.id } }">
                        <div class="row">
                            <div class="col-6">
                        <img :src="`${character.thumbnail.path}/standard_medium.jpg`"  alt="character image" class="img-fluid">
                            </div>
                            <div class="col-6 p-0 m-0">
                        <p>{{character.name}}</p>
                            </div>
                        </div>
                    </router-link>
                    
                </div>
            </div>

        </div>

        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
        ></b-pagination>
        
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
            .get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}&limit=100&offset=0&`)
            .then(response => (this.characters = response.data.data.results))    
            .catch((error) => {
                console.log(error)
                }
            )
        },
        setAltImg(event) { 
            event.target.src = "../assets/Marvel-Logo-Square.jpeg" 
        } 
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&family=Special+Elite&display=swap');

.alphabet{
    margin-top:20vh;
    margin-left:0;
    margin-right:0;
    margin-bottom:20vh;
    padding:10px;
}

.letter{
    font-family: "Special Elite";
    font-size: xx-large;
    color: #FBCA03;
}

.cards{
    margin:0;
    padding:0;

}

a{
    color:white;
    text-decoration: none;
}

.card{
    background-color: #9A0101;
    margin:10px;
    padding:0;
    border-style: none;
    box-shadow: 0px 6px 13px -2px rgba(48, 0, 0, 0.4);
}
.card:hover{
    background-color: #9A0101;
    margin:10px;
    padding:0;
    border-style: solid;
    border-width: 3px;
    border-color: #FBCA03;
}
</style>