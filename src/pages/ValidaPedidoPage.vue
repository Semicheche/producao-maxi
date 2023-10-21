<template>
  <q-page padding>

    <div v-if="$q.platform.is.mobile" class="q-pa-md">
      <StepperPedido :vertical="true" :pedido="pedido" />
    </div>
    <div v-else class="q-pa-md">
      <StepperPedido :vertical="false" :pedido="pedido" />
    </div>
  </q-page>
</template>
<script>
import { ref } from "vue";
import StepperPedido from "src/components/StepperPedido.vue";
export default {
  name: 'PageValidaPedidos',
  props: ['codigo'],
  setup () {
    return {
      step: ref(1),
      linha: ref(0),
      pedido: ref(''),
      pedidos: []
    }
  },
  mounted() {
    this.pedidos = JSON.parse(localStorage.getItem('pedidos'))

    this.pedidos.forEach(element => {
      if (this.codigo == element.codigo){
        this.pedido = element
      }
    });
  },
  components: {
    StepperPedido
  }
}
</script>
