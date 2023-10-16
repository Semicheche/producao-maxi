<template>
  <q-page padding>
    <div class="q-pa-md">
      <span>Card</span>
      <q-toggle v-model="model"></q-toggle>
      <span>Lista</span>
    </div>
    <div v-if="model" class="q-pa-md">
      <q-table
        style="height: 85vh"
        flat
        bordered
        title="Pedidos 1"
        :rows="rows"
        :columns="columns"
        row-key="index"
        virtual-scroll
        v-model:pagination="pagination"
        :rows-per-page-options="[0]"
      >
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
        flat
        bordered
        grid
        title="Pedidos 2"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :filter="filter"
        hide-header
      >
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
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PagePedidos",
  setup() {
    return {
      model: ref(false),
      columns: [
        {
          name: "codigo",
          label: "#",
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
      ],
      rows: [
        {
          codigo: 1,
          cliente: "ABC-1",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 2,
          cliente: "ABC-2",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 3,
          cliente: "ABC-3",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 4,
          cliente: "ABC-4",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 5,
          cliente: "ABC-5",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 6,
          cliente: "ABC-6",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 7,
          cliente: "ABC-7",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 8,
          cliente: "ABC-8",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 1,
          cliente: "ABC-1",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 2,
          cliente: "ABC-2",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 3,
          cliente: "ABC-3",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 4,
          cliente: "ABC-4",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 5,
          cliente: "ABC-5",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 6,
          cliente: "ABC-6",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 7,
          cliente: "ABC-7",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 8,
          cliente: "ABC-8",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 1,
          cliente: "ABC-1",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 2,
          cliente: "ABC-2",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 3,
          cliente: "ABC-3",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 4,
          cliente: "ABC-4",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 5,
          cliente: "ABC-5",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 6,
          cliente: "ABC-6",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 7,
          cliente: "ABC-7",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
        {
          codigo: 8,
          cliente: "ABC-8",
          dataInicio: "10/10/2023",
          tamanho: "50X80",
          tecido: "convencional",
          capa: "impressa",
          qtde: 5000,
          qtde_produzido: 0,
          porcentagem: 0,
          status: "pendente",
        },
      ],
    };
  },
};
</script>
