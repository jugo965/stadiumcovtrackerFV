<template>
  <div id="appstyle">
    <div class="row">
      <div class="col">
      </div>
      <div class="col">
        <form @submit.prevent="unesigledatelje">
          <div class="form-group">
            <label >Ime</label>
            <input v-model="ime" class="form-control" placeholder="Unesite ime">
            
          </div>
          <div class="form-group">
            <label>Prezime</label>
            <input v-model="prezime" class="form-control" placeholder="Unesite prezime">
          </div>
          <div class="form-group">
            <label >Broj telefona</label>
            <input v-model="telefon" class="form-control" placeholder="Unesite broj telefona">
          </div>
          
          <div class="form-group">
          <label for="Stadion">Stadion:</label>
<select v-model="stadion" name="stadion" id="stadion" class="form-select">
  <option value="Maksimir">Maksimir</option>
  <option value="Poljud">Poljud</option>
  <option value="Rujevica">Rujevica</option>
  <option value="Aldo Drosina">Aldo Drosina</option>
  <option value="Gradski vrt">Gradski vrt</option>
  <option value="Kantrida">Kantrida</option>
</select>
</div>
          <div class="form-group">
          <label for="tribine">Tribine: </label>
<select v-model="tribine" name="Tribine" class="form-select">
  <option value="Sjever">Sjever</option>
  <option value="Istok">Istok</option>
  <option value="Zapad">Zapad</option>
  <option value="Jug">Jug</option>
</select>
</div>
<div class="form-group">
          <label for="Sektor">Sektor: </label>
<select v-model="sektor" name="Sektor" id="Sektor" class="form-select">
  <option value="A">A</option>
  <option value="B">B</option>
</select>
</div>

          <button type="submit" class="btn btn-primary mt-5">Potvrdi</button>
        </form>
      </div>
      <div class="col">
      </div>
    </div>
</div>
</template>

<script>
import store from "@/store.js";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "@/firebase.js" 

export default {
  data() {
    return store;
  },
methods:{
unesigledatelje(){
 setDoc(doc(db, "Gledatelji", this.userEmail),{
  Ime: this.ime,
  Prezime: this.prezime,
  Telefon: this.telefon,
  Stadion: this.stadion,
  Tribine: this.tribine,
  Sektor: this.sektor
}).then(alert("Uspješno dodano"))
}
}
};
</script>

<style>
#appstyle{
padding-top:50px;
padding-left:50px;
}
</style>