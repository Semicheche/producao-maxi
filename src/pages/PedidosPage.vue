<template>
  <q-page>
    <div class="q-pa-md absolute-top-center" style="z-index: 2000;">
      <span>Card</span>
      <q-toggle
        v-model="model"
        checked-icon="list"
        unchecked-icon="space_dashboard"
        color="black"></q-toggle>
      <span>Lista</span>
    </div>
    <q-separator></q-separator>
    <div v-if="model" class="q-pa-md">
      <q-table
        flat
        bordered
        title="Pedidos"
        :rows="rows"
        :columns="columns"
        row-key="index"
        virtual-scroll
        separator="cell"
        v-model:pagination="pagination"
        :rows-per-page-options="[0]"
      >
        <template v-slot:body="props">
          <q-tr :props="props" @click="onRowClick(props.row)">
            <q-td key="codigo" :props="props">
              {{ props.row.codigo }}
            </q-td>
            <q-td key="cliente" :props="props">
              {{ props.row.cliente }}
            </q-td>
            <q-td key="dataInicio" :props="props">
              {{ props.row.dataInicio }}
            </q-td>
            <q-td key="tamanho" :props="props">
              {{ props.row.tamanho }}
            </q-td>
            <q-td key="tamanho_impresso" :props="props">
              {{ props.row.tamanho_impresso }}
            </q-td>
            <q-td key="tecido" :props="props">
              {{ props.row.tecido }}
            </q-td>
            <q-td key="capa" :props="props">
              {{ props.row.capa }}
            </q-td>
            <q-td key="qtde" :props="props">
              {{ props.row.qtde }}
            </q-td>
            <q-td key="qtde_produzido" :props="props">
              {{ props.row.qtde_produzido }}
            </q-td>
            <q-td key="porcentagem" :props="props">
              {{ props.row.porcentagem }}
            </q-td>
            <q-td key="status" :props="props">
              {{ props.row.status }}
            </q-td>
            <q-td key="observacao" :props="props">
              {{ props.row.observacao }}
            </q-td>
          </q-tr>
        </template>
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
    <div v-if="!model" class="q-pa-md">
      <q-table
        bordered
        grid
        title="Pedidos"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :filter="filter"
        hide-header
      >
      <template v-slot:item="props">
        <div  class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition" >
          <q-card @click="onRowClick(props.row)">
            <q-card-section class="text-center q-mb-sm">
            {{ props.row.cliente }}
            <p> {{ props.row.tecido }} {{ props.row.tamanho }}</p>
            </q-card-section>
            <q-separator></q-separator>
            <q-list dense>
              <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                <q-item-section>
                  <q-item-label>{{ col.label }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>{{ col.value }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </template>
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Buscar"
          >
            <template v-slot:append>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "PagePedidos",
  setup() {
    return {
      model: ref(false),
      checkPedido: ref(false),
      rowSelected: ref({}),
      columns: [
        {
          name: "codigo",
          label: "Codigo",
          field: "codigo",
        },
        {
          name: "cliente",
          required: true,
          label: "Cliente",
          align: "left",
          field: (row) => row.cliente,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "dataInicio",
          required: true,
          label: "Data Inicio",
          align: "left",
          field: (row) => row.dataInicio,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "tamanho",
          required: true,
          label: "Tamanho",
          align: "left",
          field: (row) => row.tamanho,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "tamanho_impresso",
          required: true,
          label: "Tamanho Impresso",
          align: "left",
          field: (row) => row.tamanho_impresso,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "tecido",
          required: true,
          label: "Tecido",
          align: "left",
          field: (row) => row.tecido,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "capa",
          required: true,
          label: "Capa",
          align: "left",
          field: (row) => row.capa,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "qtde",
          required: true,
          label: "Qtde Pedido",
          align: "left",
          field: (row) => row.qtde,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "qtde_produzido",
          required: true,
          label: "Qtde Produzido ",
          align: "left",
          field: (row) => row.qtde_produzido,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "porcentagem",
          required: true,
          label: "%",
          align: "left",
          field: (row) => row.porcentagem,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "status",
          required: true,
          label: "Status",
          align: "left",
          field: (row) => row.status,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "observacao",
          required: true,
          label: "Observacao",
          align: "left",
          field: (row) => row.observacao,
          format: (val) => `${val}`,
          sortable: true,
        }
      ],
      rows: [],
      seeds: [
      {
          codigo: 1,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 2,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 3,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 4,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 5,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 6,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 7,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 8,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 1,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 2,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 3,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 4,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 5,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 6,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 7,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 8,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 1,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 2,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 3,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 4,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 5,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 6,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 7,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
        {
          codigo: 8,
          cliente: "CLIENTE",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tamanho_impresso: "45X73",
          tecido: "convencional",
          capa: "impressa",
          qtde: 100,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
          observacao: "Observação"
        },
      ]
    };
  },
  mounted() {
    this.seedPedidos()
    this.rows = JSON.parse(localStorage.getItem('pedidos') != null ? localStorage.getItem('pedidos') : '[]')
    // alert(this.rows)
    console.log(this.rows)
  },
  watch: {
    rows (newRows) {
      this.rows = newRows
    }
  },
  methods: {
    onRowClick(row){
      this.checkPedido = !this.checkPedido
      this.rowSelected = row
      this.$router.push({path: `/valida-pedido/${row.codigo}`, params: { codigo: row.codigo } })
    },
    seedPedidos() {
      localStorage.removeItem('pedidos')
      this.seeds.forEach((val, idx) => {
          var id = idx+1

          val.cliente = val.cliente +'-'+ id
          val.codigo = id+1

          val.qtde = val.qtde * id
          val.dataInicio = id + '/10/2023'
          this.rows.push(val)
      })
      localStorage.setItem('pedidos', JSON.stringify(this.rows))
    },
  }
};
</script>
