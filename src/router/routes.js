const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/IndexPage.vue") },
      {
        name: "pedidos",
        path: "pedidos",
        component: () => import("pages/PedidosPage.vue"),
      },
      {
        name: "estoque",
        path: "estoque",
        component: () => import("pages/EstoquePage.vue"),
      },
      {
        name: "impressao",
        path: "impressao",
        component: () => import("pages/ImpressaoPage.vue"),
      },
      {
        name: "detalhe-impressao",
        path: "detalhe-impressao/:codigo",
        component: () => import("pages/DetalheImpressaoPage.vue"),
        props: true
      },
      {
        name: "corte-costura",
        path: "corte-costura",
        component: () => import("pages/CorteCosturaPage.vue"),
      },
      {
        name: "enfardamento",
        path: "enfardamento",
        component: () => import("pages/EnfardamentoPage.vue"),
      },
      {
        name: "valida-pedido",
        path: "valida-pedido/:codigo",
        component: () => import("pages/ValidaPedidoPage.vue"),
        props: true
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
