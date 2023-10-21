<template>
  <q-page padding>
    <div class="q-gutter-sm" >
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-deep-orange"
          active-color="deep-orange"
          indicator-color="deep-orange"
          align="justify"
          narrow-indicator
        >
          <q-tab name="linha1" label="Linha de Produção" />
          <!-- <q-tab name="linha2" label="Linha 2" />
          <q-tab name="linha3" label="Linha 3" /> -->
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="linha1">
            <div v-if="pedidos.length == 0">
              <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label>Sem Pedidos </q-item-label>

                </q-item-section>
              </q-item>
            </q-list>
            </div>
            <q-list v-for="item in pedidos" :key="item.codigo">
              <q-item clickable v-ripple @click="detailImpressao(item)">
                <q-item-section>
                  <q-item-label>{{ item.cliente }}</q-item-label>
                  <q-item-label caption lines="2">Status: <q-badge color="grey" rounded class="q-mr-sm">{{ item.status }}</q-badge></q-item-label>
                  <q-item-label caption lines="2">
                  <q-item-label caption lines="2">Tecido: {{ item.tecido }}</q-item-label>
                  <q-item-label caption lines="2">Quantidade: {{ item.qtde }}</q-item-label>
                  <q-item-label caption lines="2">Cilindro: {{ item.cilindro }}</q-item-label>
                  <q-item-label caption lines="2">Pantone: {{ item.pantone }}</q-item-label>

                    <q-linear-progress size="17px" class="q-my-sm" rounded :value="progress1" color="deep-orange">
                      <div class="absolute-full flex flex-center">
                        <q-badge color="white" size="10px"  text-color="deep-orange" :label="progressLabel1"></q-badge>
                      </div>
                    </q-linear-progress>
                  </q-item-label>

                </q-item-section>

                <q-item-section side top>

                  <q-item-label caption>{{ item.prioridade }}</q-item-label>
                  <q-icon v-if="item.prioridade == 'Normal'" name="circle" color="green"></q-icon>
                  <q-icon v-else name="circle" :color="item.prioridade == 'Alta' ? 'red' : 'yellow'"></q-icon>
                  <q-item-label caption class="text-bold">{{ this.fromNow(item.dataEnvio)  }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator spaced inset></q-separator>
            </q-list>

          </q-tab-panel>

          <q-tab-panel name="linha2">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="linha3">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import moment from 'moment'
export default {
  // name: 'PageName',
  setup () {
    return {
      tab: ref('linha1'),
      pedidos: ref([]),
      progress1: ref(0.0),
      progressLabel1: ref((0.00 * 100) + '%')
    }
  },
  methods: {
    fromNow(date){
      moment.locale('pt-br')
      return moment(date).fromNow()
    },

    detailImpressao(item){
      this.$router.push({path: `/detalhe-impressao/${item.codigo}`, params: { codigo: item.codigo } })
    }
  },
  mounted() {
    this.pedidos = localStorage.getItem('linha') != null ? JSON.parse(localStorage.getItem('linha')) : []
    console.log(this.pedidos)
  },
};
</script>
