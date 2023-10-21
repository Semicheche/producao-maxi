<template>
  <q-page padding>
    <div class="text-h6 text-center">
      {{ item.cliente }}
    </div>
    <div class="text-subtitle1 text-center">
       <q-badge  :color="status_color" rounded class=" q-mr-sm"></q-badge>{{ item.status }}
    </div>

    <q-separator class="q-mt-md"></q-separator>
    <div  class="row text-justify">
        <div class="col-xs-2 col-md-2">
          <div class="text-subtitle2 "> Inicio: </div>
        </div>
        <div class="col-xs-4 col-md-3">
          <div class="text-subtitle2 ">{{  dataInicioImpressao != null ? formatDate(dataInicioImpressao) : '' }}</div>
        </div>
        <q-separator vertical class="q-mx-sm"></q-separator>
        <div class="col-xs-2 col-md-2">
          <div class="text-subtitle2 "> Fim: </div>
        </div>
        <div class="col-xs-3 col-md-3">
          <div class="text-subtitle2 "> {{ tempoFinalizado != null ? formatDate(tempoFinalizado) : '' }} </div>
        </div>
    </div>
    <q-separator class="q-mb-md"></q-separator>
    <div  class="row justify-center q-mx-md">
      <div class="col-xs-12 col-md-6">
          <div class="text-subtitle2 text-justfy"> Quantidade Total projetado </div>
          <div class="text-subtitle1 text-justfy"> 1000 </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <q-input v-model="qtde_produzido" :rules="[ val => val != null && done || 'Por favor Insira a quantidade Total Produzido']" label="Quantidade Total Produzido"></q-input>
      </div>
      <div class="col-xs-12 col-md-6">
            <div class="text-subtitle2 text-justfy"> Quantidade Impresso projetado </div>
            <div class="text-subtitle1 text-justfy"> 900 </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <q-input v-model="qtde_impresso"  :rules="[ val => val != null && done || 'Por favor Insira um Valor em Metros']" label="Metros Impresso"></q-input>
      </div>
    </div>
    <q-separator class="q-my-md"></q-separator>
    <q-card class="my-card">
      <q-card-section  horizontal>
        <q-img
          class="col-5 q-ma-md"
          src="src/assets/sem-img.gif"
          style="max-height: 80vh; max-width: 50vh;"
        ></q-img>

        <div  class="row justify-center">
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle2 text-justify"> Tamanho: </div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle2 text-justify">{{ item.tamanho }}</div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle2 text-justify">Tecido: </div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle2 text-justify"> {{ item.tecido }}</div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle2 text-justify">Capa: </div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle2 text-justify">{{ item.capa}}</div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle2 text-justify">Valvula:  </div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle2 text-justify">N/A</div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle2 text-justify">Snafona:  </div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle2 text-justify">N/A</div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle2 text-justify">Data: </div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle2 text-justify"> {{ item.dataInicio }}</div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle2 text-justify">Quantidade: </div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle2 text-justify">{{ item.qtde }} </div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle1 text-justify"> Impresso: </div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="text-subtitle1 text-justify">{{ item.tamanho_impresso }}</div>
          </div>
        </div>
      </q-card-section>
      <q-separator></q-separator>

      <q-card-actions>
        <div class="q-gutter-xl">
          <q-btn push v-if="item.status == 'pendente' || item.status == 'pausado'" :disable="item.status == 'concluido'" color="deep-orange" icon="play_arrow" @click="startProducao()">Iniciar</q-btn>
          <q-btn push v-else color="deep-orange" :disable="item.status == 'concluido'" icon="pause" @click="pauseProducao()">Pausar</q-btn>

          <q-btn push class="" color="green" :disable="item.status == 'pendente' || item.status == 'concluido' || item.status == 'pausado'" icon="check" @click="finalizarPorducao()">
            Concluir
          </q-btn>

        </div>
      </q-card-actions>
    </q-card>
    <q-btn v-if="item.status == 'concluido'" class="full-width q-ma-md" @click="enviarProducao()" color="green">Finalizar</q-btn>
    <div class="q-pt-md">
    <q-table
      title="Historico"
      :rows="historico"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-acao="props">
        <q-td :props="props">

          <div class="my-table-details">
            <q-icon v-if="props.value != 'green'"  :color="props.value" :name=" props.value == 'blue' ? 'play_arrow' : 'pause'" />
            <q-icon v-else  :color="props.value" name="check" />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>

  <q-dialog v-model="obs" persistent transition-show="scale" transition-hide="scale">
      <q-card  style="width: 400px">
        <q-card-section>
          <div class="text-h6">Observação</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Qual o motivo da parada da produção?
          <q-separator></q-separator>
          <q-input outlined v-model="observacao" label="Observação" color="deep-orange" @keyup.enter="setObservacao()"></q-input>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-deep-orange">
          <q-btn flat label="OK" :disabled="observacao == null" @click="setObservacao()" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="dialogConclui" persistent transition-show="scale" transition-hide="scale">
      <q-card  style="width: 400px">
        <q-card-section class="bg-red" >
          <div class=" text-h6">Atenção</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-ma-md">
          Por favor Adicione as quantidade produzida antes de Finalizar a produção
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-deep-orange">
          <q-btn flat label="OK" :disabled="observacao == null"  @click="dialogConclui = !dialogConclui" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>
<style>
.my-table-details {
  font-size: 2em;
}
</style>
<script>
import { ref } from 'vue'
import moment from 'moment'

export default {
  // name: 'PageName',
  setup () {
    return {
      dialogConclui: ref(false),
      item: ref({}),
      linha: ref([]),
      qtde_produzido: ref(null),
      qtde_impresso: ref(null),
      dataInicioImpressao: ref(null),
      duracao: ref(null),
      pause: ref(false),
      start: ref(false),
      done: ref(false),
      obs: ref(false),

      tempoFinalizado: ref(null),
      tempoPausado: ref(null),
      status_color: ref('grey'),
      seconds: ref(0),
      interval: ref(0),
      observacao: ref(''),
      historico: ref([]),
      columns: [
      { name: 'acao', label: 'Ação', field: 'acao', sortable: false },
        {
          name: 'status',
          required: true,
          label: 'Status',
          align: 'left',
          field: row => row.status,
          format: val => `${val}`,
          sortable: false
        },
        { name: 'horario', align: 'center', label: 'Horario', field: 'horario', sortable: false },
        { name: 'observacao', label: 'Observação', field: 'observacao', sortable: false },

      ]
    }
  },
  props: ['codigo'],
  methods: {
    fromNow(date){
      moment.locale('pt-br')
      return moment(date).fromNow()
    },
    startProducao(){
      this.start = ref(!this.start)

      this.item.status = 'iniciado'
      this.status_color = 'blue'
      this.dataInicioImpressao = Date()
      this.historico.push({
        status: this.item.status,
        horario: this.formatDate(this.dataInicioImpressao),
        observacao: this.observacao,
        acao: this.status_color
      })

    },
    pauseProducao(){
      this.obs = true
    },
    setObservacao() {
      this.item.status = 'pausado'
      this.status_color = 'orange'
      this.pauseProducao = Date()

      this.historico.push({
        status: this.item.status,
        horario: this.formatDate(this.pauseProducao),
        observacao: this.observacao,
        acao: this.status_color
      })
      this.observacao = ref(null)
      this.obs = false
    },

    formatDate(date){
      return moment(date).format('DD/MM/YYYY HH:mm:ss')
    },
    finalizarPorducao(){
      this.item.status = 'concluido'
      this.status_color = 'green'
      this.done = true
      this.tempoFinalizado = Date()

      this.historico.push({
        status: this.item.status,
        horario: this.formatDate(this.tempoFinalizado),
        observacao: this.observacao,
        acao: this.status_color
      })
    },
    enviarProducao(){
      if (this.qtde_produzido == null || this.qtde_impresso == null) {
        this.dialogConclui = true

      }
      this.item.qtde_impresso = this.qtde_impresso
      this.item.qtde_produzido = this.qtde_produzido
      var producao = {
        item: this.item,
        historico: this.historico
      }
      this.removeItemImpressao(this.item)

      localStorage.setItem('costura', JSON.stringify(producao))
      this.$router.push('/impressao')
    },
    removeItemImpressao(item){

      this.linha.forEach((element, idx) => {
          if (this.codigo == element.codigo){
            this.linha = this.linha.splice(this.codigo)
          }
      })
      localStorage.setItem('linha', JSON.stringify(this.linha))
    }
  },

  mounted() {
    this.linha = JSON.parse(localStorage.getItem('linha'))

    this.linha.forEach(element => {
      if (this.codigo == element.codigo){
        this.item = element
      }
    });
  },
}
</script>
