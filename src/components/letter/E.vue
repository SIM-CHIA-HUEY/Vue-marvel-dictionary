<template>
    <Header/>

    <!-- Character : search by name first letter -->
    <div class="row alphabet">
        <div class="col-2 fixed-top letters-menu">
            <router-link :to="{ name: 'A' }"><p class="letter">A</p></router-link>
            <router-link :to="{ name: 'B' }"><p class="letter">B</p></router-link>
            <router-link :to="{ name: 'C' }"><p class="letter">C</p></router-link>
            <router-link :to="{ name: 'D' }"><p class="letter">D</p></router-link>
            <p class="selected-letter">E</p>
            <router-link :to="{ name: 'F' }"><p class="letter">F</p></router-link>
            <router-link :to="{ name: 'G' }"><p class="letter">G</p></router-link>
            <router-link :to="{ name: 'H' }"><p class="letter">H</p></router-link>
            <router-link :to="{ name: 'I' }"><p class="letter">I</p></router-link>
            <router-link :to="{ name: 'J' }"><p class="letter">J</p></router-link>
            <router-link :to="{ name: 'K' }"><p class="letter">K</p></router-link>
            <router-link :to="{ name: 'L' }"><p class="letter">L</p></router-link>
            <router-link :to="{ name: 'M' }"><p class="letter">M</p></router-link>
            <router-link :to="{ name: 'N' }"><p class="letter">N</p></router-link>
            <router-link :to="{ name: 'O' }"><p class="letter">O</p></router-link>
            <router-link :to="{ name: 'P' }"><p class="letter">P</p></router-link>
            <router-link :to="{ name: 'Q' }"><p class="letter">Q</p></router-link>
            <router-link :to="{ name: 'R' }"><p class="letter">R</p></router-link>
            <router-link :to="{ name: 'S' }"><p class="letter">S</p></router-link>
            <router-link :to="{ name: 'T' }"><p class="letter">T</p></router-link>
            <router-link :to="{ name: 'U' }"><p class="letter">U</p></router-link>
            <router-link :to="{ name: 'V' }"><p class="letter">V</p></router-link>
            <router-link :to="{ name: 'W' }"><p class="letter">W</p></router-link>
            <router-link :to="{ name: 'X' }"><p class="letter">X</p></router-link>
            <router-link :to="{ name: 'Y' }"><p class="letter">Y</p></router-link>
            <router-link :to="{ name: 'Z' }"><p class="letter">Z</p></router-link>
        </div>

        <!-- Characters : E -->
        <div class="col-3">
                
        </div>
        <div class="col-9">
            <div class="row cards-title">
                <p class="p-0 m-0">E</p>
            </div>
            <div class="row cards">
                <div class="col-md-9 col-lg-3 card" v-for="character in characters">
                    <router-link :to="{ name: 'detail', params: { id: character.id } }">
                        <div class="row">
                        <div class="col-4"><img :src="`${character.thumbnail.path}/standard_medium.jpg`"  alt="character image" class="img-fluid"></div>
                        <div class="col-8 p-0 m-0">{{character.name}}</div>
                        </div>
                    </router-link>
                    </div>
                </div>
        </div>
    </div>

    <Footer />
</template>

<script> 
import {public_key, secret_key} from './../../marvel'
import axios from 'axios'
import Header from '../Header.vue'
import Footer from '../Footer.vue'

export default {
    name: 'E',

    components: {
    Header,
    Footer
    },
    
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
            .get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=e&apikey=${public_key}`)
            .then(response => (this.characters = response.data.data.results))    
            .catch((error) => {
                console.log(error)
                }
            )
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

.letters-menu{
    margin-top: 20vh;
    margin-left: 5vw;
    padding: 20px;
    overflow-y: auto;
    max-height: 60vh;
    box-shadow: inset 0px -3px 13px -2px rgba(83,0,0,0.8)

}

.letter{
    font-family: "Special Elite";
    font-size: xx-large;
    color: #FBCA03;
}

.selected-letter{
    font-family: "Special Elite";
    font-size: xx-large;
    color: #FBCA03;
    opacity: 0.5;
}

.cards-title{
    margin-left:10px;
    margin-bottom: 20px;
    padding-top:5px;
    font-family: "Special Elite";
    font-size: xx-large;
    color: #4B0908;
    text-align: center;
    border-style: solid;
    border-width: 3px;
    border-color:#4B0908;
    width: 50px;

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