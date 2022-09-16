<template>

<div class="card">
      
      <div class="card-body">
        <div class="container">
          <div class="row">
        <a class="card-text mr-1">{{gledatelj.Ime}}</a>
        <a class="card-text mr-2">{{gledatelj.Prezime}}</a>
        <a class="card-text mr-2">Broj telefona: {{gledatelj.Telefon}}</a>
        <a class="card-text mr-2">Stadion: {{gledatelj.Stadion}}</a>
        <a class="card-text mr-2">Tribina: {{gledatelj.Tribine}}</a>
        <a class="card-text mr-2">Sektor: {{gledatelj.Sektor}}</a>
    </div>   
      </div>
    </div>
      </div>

</template>



<script>
  import store from "../store";

  export default {
      data() {
      return store;
    },
    props: [ "gledatelj" ],


      }
      
    
    
  </script>





<style>
  .card-header{
  background-color:black;
  color: white;
  }
  .card-footer{
  background-color:black;
  }
  .desc{
  padding-left: 20px;
  text-align: left;
  background-color:white;
  border-bottom: 1px solid rgba(0,0,0,.125);

  }
  .card {
    margin-bottom: 10px
  }
 


</style>