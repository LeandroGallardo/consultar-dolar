<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout :wrap="true">
          <v-flex xs12>
            <v-card>
               <v-date-picker 
                v-model="fecha"
                full-width
                locale="es-cl"
                :min="minimo"
                :max="maximo"
                @change="getDolar(fecha)"
               >
               </v-date-picker>
            </v-card>
           <v-card color="error" dark>
             <v-card-text class="display-1 text-xs-center text-lg-center text-md-center">
                {{valor}}
             </v-card-text>
           </v-card>
          </v-flex>
        </v-layout> 
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import axios from "axios";
import VueMultianalytics from "vue-multianalytics";

export default {
  name: 'App',

  components: {
   
  },

  data: () => ({
    fecha : new Date().toISOString().substr(0, 10),
    minimo:'1984',
    maximo: new Date().toISOString().substr(0, 10),
    valor:null,
  }),
  methods:{
   
    async getDolar(dia){
      VueMultianalytics.trackEvent({action: 'inicio_simulacion'} )
      let arrayFecha = dia.split('-')
      console.log(arrayFecha)
      let ddmmyy = arrayFecha[2]+'-'+arrayFecha[1]+'-'+arrayFecha[0];
      let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)
        try {
          if( datos.data.serie.length > '0'){
            this.valor = await datos.data.serie[0].valor
          }
          else{
            this.valor='sin resultados'
          }
        }catch(error){
          console.log(error);
        }
    
    

    }
  },
  created(){
    this.getDolar('10-03-2020');
  }
};
</script>
