<template>
    <Header/>
    <div class="row p-5 mb-5 card-background">
        <!-- Back to list button -->
        <div class="col-12 go-back">
        <router-link :to="{ name: 'Home' }">
            <p>&lt; Back to list</p>
        </router-link>
        </div>

        <!-- Character info -->
        <div class="col-12" v-for="char in character">
            <div class="row">
                <!-- Image -->
                <div class="col-4 p-2 m-0">
                    <img :src="url" alt="character image" class=img-fluid>
                </div>
                <!-- Info -->
                <div class="col-8 p-2 m-0 character-info">
                    <div class="title">
                        <h1>{{char.name}}</h1>
                    </div>

                    <div class="description">
                        <p>Last modified | {{char.modified}}</p>
                        <hr/>
                        <div class="sub-title">This character is :</div>
                        
                        <div class="no-description" v-if="!char.description">
                            // TOP SECRET //
                        </div>
                        <div v-else>{{char.description}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script> 
import {public_key} from '../marvel'
import axios from 'axios'
import Header from './Header.vue'
import Footer from './Footer.vue'


export default {
    name: 'Detail',

    components: {
    Header,
    Footer
    },

    data () {
        return {
            character:[],
            url:'',
            size:'standard_incredible'
        }
    },

    mounted () {
        this.getCharacter()    
    },

    methods: {
        getCharacter: function() {
            var characterId = this.$route.params.id
            axios.get(`http://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${public_key}`)
            .then((result) => {
                //console.log(result)
                result.data.data.results.forEach((item) => {
                    this.character.push(item)
                    console.log(this.character)
                    this.url = `${item.thumbnail.path}/${this.size}.jpg`
                })
             })
            .catch((error) => {
                console.log(error)
            }
            )
        }
    }
}
</script>

<style scoped>
.card-background{
    background-color: #4B0908;
    width: 100vw;
    min-height: 100vh;
}

.go-back{
    padding-top:10vh;
    padding-bottom: 0vh;
    margin-bottom: 0;
}

a{
    color:#FBCA03;
    text-decoration: none;
}

.character-info{
    vertical-align: middle;
}

.title{
    color:#AA0505;
}

.sub-title{
    color:#FBCA03;
}

.no-description{
    border-style:solid;
    border-color: #FBCA03 ;
    text-align: center;
    font-size: x-large;
    color:#FBCA03;
    margin-top:10px;
    margin-bottom:10px;
    background-color: #171717;

}
</style>