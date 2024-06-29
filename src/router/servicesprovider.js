import ClientPage from "@/ServiceProvider/Clients/ClientPage.vue";
import AddClientService from "@/ServiceProvider/Clients/AddClient.vue";
import ClientUnits from "@/ServiceProvider/Clients/ClientUnits.vue";
import PaymentPage from "@/ServiceProvider/finance/payment/PaymentPage.vue";
import PaymentDetails from "@/ServiceProvider/finance/payment/PaymentDetails.vue";

const routes = [
  {
    path: "/client-page",
    name: "ClientPage",
    component: ClientPage,
  },
  {
    path: "/add-client-service",
    name: "AddClientService",
    component: AddClientService,
  },
  {
    path: "/client-units",
    name: "ClientUnits",
    component: ClientUnits,
  },
  {
    path: "/payment-page",
    name: "PaymentPage",
    component: PaymentPage,
  },
  {
    path: "/payment-details",
    name: "PaymentDetails",
    component: PaymentDetails,
  },
];
export default routes;
