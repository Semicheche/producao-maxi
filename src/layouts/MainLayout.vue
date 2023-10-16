<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="color: #25282a; background-color: #ff5600">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-bold"> MaxiRáfia </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Impressão",
    caption: "Etapa dos pedidos com impressão",
    icon: "print",
    link: "/impressao",
  },
  {
    title: "Corte e Costura",
    caption: "Corte e costura dos sacos de ráfia",
    icon: "engineering",
    link: "/corte-costura",
  },
  {
    title: "Enfardamento",
    caption: "Finalização da produção",
    icon: "pallet",
    link: "/enfardamento",
  },
  {
    title: "Estoque",
    caption: "Saldo no estoque e previsão de produção",
    icon: "warehouse",
    link: "/estoque",
  },
  {
    title: "Pedidos",
    caption: "Previsão de produção vs estoque",
    icon: "trolley",
    link: "/pedidos",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
