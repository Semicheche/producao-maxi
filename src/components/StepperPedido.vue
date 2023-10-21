<template>
  <h5 class="q-ma-sm text-center">{{ pedido.cliente }}</h5>

      <q-stepper
        v-model="step"
        ref="stepper"
        done-color="deep-orange"
        active-color="deep-orange"
        inactive-color="black"
        :vertical="vertical"
        animated
      >
        <q-step
          :name="1"
          title="Arte"
          caption="Validar Arte"
          icon="image"
          :done="step > 1"
        >
        <q-card class="text-center">
          <q-card-section  class="row justify-center">
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify"> Tamanho: </div>
            </div>
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify">{{ pedido.tamanho }}</div>
            </div>
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify">Tecido: </div>
            </div>
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify"> {{ pedido.tecido }}</div>
            </div>
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify">Capa: </div>
            </div>
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify">{{ pedido.capa}}</div>
            </div>
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify">Valvula:  </div>
            </div>
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify">N/A</div>
            </div>
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify">Snafona:  </div>
            </div>
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify">N/A</div>
            </div>
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify">Data: </div>
            </div>
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify"> {{ pedido.dataInicio }}</div>
            </div>
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify">Quantidade: </div>
            </div>
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify">{{ pedido.qtde }} </div>
            </div>
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify"> Impresso: </div>
            </div>
            <div class="col-xs-6 col-md-6">
              <div class="text-subtitle1 text-justify">{{ pedido.tamanho_impresso }}</div>
            </div>

          </q-card-section>
          <q-img
          :class="vertical ? q-ma-md : ''"
          :src="imagem != null ? imagem : 'src/assets/sem-img.gif'"
          style="max-height: 80vh; max-width: 50vh;">
          </q-img>

        </q-card>

        </q-step>

        <q-step
          :name="2"
          title="Check List"
          caption="Verificação Final"
          icon="checklist_rtl"
          :done="step > 2"
        >
      <div class="q-pa-md">
        <q-list>
          <q-item-section class="q-ml-sm">
            <q-input v-model="cilindro" type="number" label="Cilindro" color="deep-orange"></q-input>
          </q-item-section>

          <q-item-section>
            <q-input  v-model="largura" label="Largura" color="deep-orange"></q-input>
          </q-item-section>

          <q-item-section>
            <q-input  v-model="pantone"  label="Pantone" mask="###/###/###" color="deep-orange"></q-input>
          </q-item-section>

          <q-item-section>
            <q-input  v-model="tecido" label="Tipo tecido" color="deep-orange"></q-input>
          </q-item-section>
          <q-item-section>
            <q-select v-model="prioridade" :options="options" label="Prioridade" color="deep-orange">
              <template v-slot:prepend>
                <q-icon name="circle" :color="color"></q-icon>
              </template>
            </q-select>
          </q-item-section>
        </q-list>
      </div>
      </q-step>

        <q-step
          :name="3"
          title="Linha Produção"
          caption="Enviar para Linha de Produção"
          icon="engineering"
        >
        <q-item tag="label" v-ripple>
          <q-item-section avatar>
            <q-radio v-model="linha" val="1" color="deep-orange"></q-radio>
          </q-item-section>
          <q-item-section>
            <q-item-label>Linha de produção 1</q-item-label>
            <q-item-label caption>Parada</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator class="q-my-sm"></q-separator>
        <q-item tag="label" v-ripple>
          <q-item-section avatar>
            <q-radio v-model="linha" val="2" color="deep-orange"></q-radio>
          </q-item-section>
          <q-item-section>
            <q-item-label>Linha de produção 2</q-item-label>
            <q-item-label caption>Parada</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator class="q-my-sm"></q-separator>
        <q-item tag="label" v-ripple>
          <q-item-section avatar>
            <q-radio v-model="linha" val="3" color="deep-orange"></q-radio>
          </q-item-section>
          <q-item-section>
            <q-item-label>Linha de produção 3</q-item-label>
            <q-item-label caption>Em produção</q-item-label>
          </q-item-section>
        </q-item>
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation align="right">
            <q-btn v-if="step > 1" flat color="deep-orange" @click="$refs.stepper.previous()" label="Voltar" class="q-ml-sm"></q-btn>
            <q-btn v-if="step < 3" @click="$refs.stepper.next()"  color="deep-orange" :label=" 'Proximo'"></q-btn>
            <q-btn v-if="step === 3" @click="sendToProducao()"  color="deep-orange" :label=" `Enviar para Linha ${linha}`"></q-btn>

          </q-stepper-navigation>
        </template>
      </q-stepper>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "StepperPedido",
  setup () {
    return {
      step: ref(1),
      linha: ref(0),
      cilindro: ref(''),
      largura: ref(''),
      pantone: ref(''),
      tecido:  ref(''),
      imagem: ref(null),
      prioridade: ref('Normal'),
      color: 'green',
      options: ['Normal', 'Alta', 'Baixa'],
      result: ref({})
    }
  },
  mounted() {
    this.largura = ref(this.pedido.tamanho)
    this.tecido = ref(this.pedido.tecido)
  },
  props: {
    vertical: {
      type: Boolean,
    },
    pedido: {
      type: Object,
    },
  },
  watch: {
    prioridade (newValue) {
      if (newValue === "Alta"){
        this.color = ref('red')
      }else if (newValue === "Baixa"){
        this.color = ref('yellow')
      }else{
        this.color = ref('green')
      }
    }
  },
  methods: {
    sendToProducao(){
      console.log('enviado pra inha de producao ' + this.linha)
      console.log(this.pedido)
      this.result = { ...this.pedido, pantone: this.pantone, prioridade: this.prioridade, cilindro: this.cilindro, linha: this.linha, dataEnvio: new Date() }
      console.log(this.result)
      var storage_linha = localStorage.getItem('linha') != null ? JSON.parse(localStorage.getItem('linha')) : JSON.parse('[]')
      storage_linha.push(this.result)
      localStorage.setItem('linha', JSON.stringify(storage_linha))
    }
  }
});
</script>
