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
  {
    path: "/calssification-page",
    name: "calssification-page",
    component: () =>
      import(
        "../ServiceProvider/services/Classification/ClassificationPage.vue"
      ),
  },
  {
    path: "/add-classification",
    name: "AddClassification",
    component: () =>
      import(
        "../ServiceProvider/services/Classification/AddClassification.vue"
      ),
  },
  {
    path: "/show-classification",
    name: "ShowClassification",
    component: () =>
      import(
        "../ServiceProvider/services/Classification/ShowClassification.vue"
      ),
  },
  {
    path: "/subclasses-page",
    name: "subclasses-page",
    component: () =>
      import("../ServiceProvider/services/Subclasses/SubclassesPage.vue"),
  },
  {
    path: "/add-subclasses",
    name: "AddSubclasses",
    component: () =>
      import("../ServiceProvider/services/Subclasses/AddSubclasses.vue"),
  },
  {
    path: "/show-subclasses",
    name: "ShowSubclasses",
    component: () =>
      import("../ServiceProvider/services/Subclasses/ShowSubclasses.vue"),
  },
  {
    path: "/sub-services-page",
    name: "subservicesPage",
    component: () =>
      import("../ServiceProvider/services/services/ServicesPage.vue"),
  },
  {
    path: "/add-services",
    name: "AddServices",
    component: () =>
      import("../ServiceProvider/services/services/AddServices.vue"),
  },
  {
    path: "/show-services",
    name: "ShowServices",
    component: () =>
      import("../ServiceProvider/services/services/ShowServices.vue"),
  },
  {
    path: "/spare-page",
    name: "SparePage",
    component: () => import("../ServiceProvider/services/spare/SparePage.vue"),
  },
  {
    path: "/add-spare",
    name: "AddSpare",
    component: () => import("../ServiceProvider/services/spare/AddSpare.vue"),
  },
  {
    path: "/show-spare",
    name: "ShowSpare",
    component: () => import("../ServiceProvider/services/spare/ShowSpare.vue"),
  },
  {
    path: "/offers-page",
    name: "OfferPage",
    component: () =>
      import("../ServiceProvider/services/OffersAndDiscounts/offersPage.vue"),
  },
  {
    path: "/add-offer",
    name: "AddOffer",
    component: () =>
      import("../ServiceProvider/services/OffersAndDiscounts/AddOffer.vue"),
  },
  {
    path: "/show-offers",
    name: "ShowOffer",
    component: () =>
      import("../ServiceProvider/services/OffersAndDiscounts/ShowOffer.vue"),
  },
  {
    path: "/servicescope-page",
    name: "ServiceScopePage",
    component: () =>
      import("../ServiceProvider/services/servicescope/ServiceScopePage.vue"),
  },
  {
    path: "/add-servicescope",
    name: "AddServiceScope",
    component: () =>
      import("../ServiceProvider/services/servicescope/AddServiceScope.vue"),
  },
  {
    path: "/show-servicescope",
    name: "ShowServiceScope",
    component: () =>
      import("../ServiceProvider/services/servicescope/ShowService Scope.vue"),
  },
  {
    path: "/additionalfees-page",
    name: "AdditionalFeesPage",
    component: () =>
      import(
        "../ServiceProvider/services/additionalfees/AdditionalFeesPage.vue"
      ),
  },
  {
    path: "/add-additionalfees",
    name: "AddAdditionalFees",
    component: () =>
      import(
        "../ServiceProvider/services/additionalfees/Add_AdditionalFees.vue"
      ),
  },
  {
    path: "/show-additionalfees",
    name: "ShowAdditionalFees",
    component: () =>
      import(
        "../ServiceProvider/services/additionalfees/ShowAdditionalFees.vue"
      ),
  },
];
export default routes;
