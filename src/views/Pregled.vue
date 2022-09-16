<template>
  <div id="appstyle">
    <div class="container">
  <div class="row">
    <kartica :key="osoba.id" :gledatelj="osoba" v-for="osoba in Gledatelji" />
</div>
</div>
<div class="get">
<button @click="refreshget" class=" btn btn-primary">Update list</button>
</div>
</div>
</template>

<script>
import kartica from '@/components/card.vue'
import store from "@/store.js";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase.js" 

export default {
  data() {
    return store;
  },
  components: {
    kartica
  },
  name: "home",
 async mounted(){
  if(this.Gledatelji.some(gledatelj => gledatelj.id === doc.data().id)==false){
    const colRef = collection(db, "Gledatelji");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach(doc => {
    let gledatelj=doc.data()
    gledatelj.id = doc.id
    this.Gledatelji.push(gledatelj);
})
  }
},
methods: {
async refreshget(){
window.location.reload();
}
}
};
</script>

<style>
#appstyle{
padding-top:50px;
padding-left:50px;
}
.get{
  margin-left: 12%;
}
</style>