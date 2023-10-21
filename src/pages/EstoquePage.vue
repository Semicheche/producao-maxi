<template>
  <q-page >
    <div class="q-pa-md">
      <q-table
        flat
        bordered
        title="Estoque"
        :rows="rows"
        :columns="columns"
        row-key="name"
      >
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageEstoque',
  setup() {
    return {
      columns: [
        {
          name: "codigo",
          label: "Codigo",
          field: "codigo",
        },
        {
          name: "descricao",
          required: true,
          label: "Descrição",
          align: "left",
          field: (row) => row.descricao,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "quantidade",
          required: true,
          label: "Quantidade",
          align: "left",
          field: (row) => row.quantidade,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "reservado",
          required: true,
          label: "Reservado",
          align: "left",
          field: (row) => row.reservado,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "comprado",
          required: true,
          label: "Comprado",
          align: "left",
          field: (row) => row.comprado,
          format: (val) => `${val}`,
          sortable: true,
        },
      ],
      rows: [
        {
          codigo: 1010,
          descricao: 'descricao do produto',
          quantidade: 1000,
          reservado: 800,
          comprado: 500
        },
        {
          codigo: 1020,
          descricao: 'produto convencional',
          quantidade: 1500,
          reservado: 1000,
          comprado: 500
        }
      ]
    }
  }
};
</script>
