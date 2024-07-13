import HomeView from "../views/HomeView.vue";
import Login from "../views/register/LoginPage.vue";
import Customerlist from "../views/users/Customer_list.vue";
import Potential_customers from "../views/users/Potential_customers.vue";
import projectsPage from "@/views/projects/projectsPage.vue";
import Add_customer from "../views/users/AddCustomer.vue";
import CustPrimaryData from "../views/users/CustPrimaryData.vue";
import certifiedCust from "@/views/users/certifiedCust.vue";
import Signup from "@/views/register/SignUp.vue";
import TheForgetPassword from "@/views/register/TheForgetPassword.vue";
import PotentialUnits from "../views/users/PotentialUnits.vue";
import AddProject from "@/views/projects/AddProject.vue";
import guarantees from "@/views/setting/GuaranteesPage.vue";
import GCompanyName from "@/views/setting/GCompanyName.vue";
import IconPage from "@/views/setting/IconsPage.vue";
import RolesPage from "@/views/setting/RolesPage.vue";

import DataSetting from "@/views/setting/DataSetting.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sign-up",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/guarantees",
    name: "guarantees-page",
    component: guarantees,
  },
  {
    path: "/company-name",
    name: "companyname",
    component: GCompanyName,
  },
  // setting
  {
    path: "/icons-page",
    name: "iconspage",
    component: IconPage,
  },
  {
    path: "/data-setting",
    name: "datasetting",
    component: DataSetting,
  },
  {
    path: "/roles-page",
    name: "RolesPages",
    component: RolesPage,
  },
  {
    path: "/customer-list",
    name: "Customerlist",
    component: Customerlist,
  },
  {
    path: "/potential-customers",
    name: "Potential_customers",
    component: Potential_customers,
  },
  {
    path: "/projects-list",
    name: "projects-list",
    component: projectsPage,
  },

  {
    path: "/test",
    name: "test",
    component: () => import("../components/SelectTest.vue"),
  },
  {
    path: "/adding-unit",
    name: "adding-unit",
    component: () => import("../views/users/AddingUnit.vue"),
  },

  {
    path: "/TheForgetPassword",
    name: "TheForgetPassword",
    component: TheForgetPassword,
  },
  {
    path: "/add-customer",
    name: "Add_customer",
    component: Add_customer,
    children: [
      {
        path: "primary-data",
        name: "CustPrimaryData",
        component: CustPrimaryData,
      },
      {
        path: "certified-customer",
        name: "certifiedCust",
        component: certifiedCust,
      },
      {
        path: "units",
        name: "cust-unit",
        component: () => import("../views/users/CustUntis.vue"),
      },
      {
        path: "potentail-units",
        name: "potentail-units",
        component: PotentialUnits,
      },
    ],
  },
  {
    path: "/rental",
    name: "rental-page",
    component: () => import("../views/Rental/RentalPage.vue"),
  },
  {
    path: "/add-project",
    name: "AddProject",
    component: AddProject,
    children: [
      {
        path: "project-data",
        name: "projectData",
        component: () => import("../views/projects/ProjectData.vue"),
      },
      {
        path: "building-data",
        name: "buildingData",
        component: () => import("../views/projects/BuildingData.vue"),
      },
      {
        path: "unties-data",
        name: "untiesData",
        component: () => import("../views/projects/UnitesData.vue"),
      },
      {
        path: "maintenance-data",
        name: "maintenanceData",
        component: () => import("../views/projects/MaintenanceData.vue"),
      },
      {
        path: "view-in-app",
        name: "viewInApp",
        component: () => import("../views/projects/ViewInApp.vue"),
      },
    ],
  },

  {
    path: "/maintenance",
    name: "maintenance",
    component: () => import("../views/maintenance/MaintanenacePage.vue"),
  },
  {
    path: "/add-rental",
    name: "add-rental-order",
    component: () => import("../views/Rental/CreateRentalRequest.vue"),
    children: [
      {
        path: "create-order-rental",
        name: "createRentalOrder",
        component: () => import("../views/Rental/CreateRequest.vue"),
      },
      {
        path: "rceive-order-rental",
        name: "receivingRentalOrder",
        component: () => import("../views/Rental/ReceivingRequest.vue"),
      },
      {
        path: "pay-bill-rental",
        name: "payBillRental",
        component: () => import("../views/Rental/PayBill.vue"),
      },
      {
        path: "complete-application-rental",
        name: "completeApplicationRental",
        component: () => import("../views/Rental/CompleteApplication.vue"),
      },
    ],
  },
  {
    path: "/add-maintenance-request",
    name: "add-maintenance-request",
    component: () =>
      import("../views/maintenance/CreateMaintenanceRequest.vue"),
    children: [
      {
        path: "create-order",
        name: "createOrder",
        component: () => import("../views/maintenance/CreateOrder.vue"),
      },
      {
        path: "rceive-order",
        name: "receivingOrder",
        component: () => import("../views/maintenance/ReceivingtOrder.vue"),
      },
      {
        path: "sending-technician",
        name: "sendingTechnician",
        component: () => import("../views/maintenance/SendingTechnician.vue"),
      },
      {
        path: "close-order",
        name: "closeOrder",
        component: () => import("../views/maintenance/CloseingOrder.vue"),
      },
      {
        path: "technical-report",
        name: "technicalReport",
        component: () => import("../views/maintenance/TechnicalReport.vue"),
      },
    ],
  },
  {
    path: "/rental",
    name: "rental-page",
    component: () => import("../views/Rental/RentalPage.vue"),
  },
  {
    path: "/user-profile-owner",
    name: "addFileUserOwner",
    component: () => import("../views/UserProfileOwner/UserProfileOwner.vue"),
  },
  {
    path: "/user-profile-manager",
    name: "addFileUserManager",
    component: () =>
      import("../views/UserProfileManager/UserProfileManager.vue"),
  },
  {
    path: "/service-provider",
    name: "serviceProvider",
    component: () => import("../views/ServiceProvider/ServiceProvider.vue"),
  },
  {
    path: "/real-estate-developer",
    name: "RealEstateDeveloper",
    component: () =>
      import("../views/RealEstateDeveloper/RealEstateDeveloper.vue"),
  },
  {
    path: "/form-builder",
    name: "formBuilder",
    component: () => import("../views/setting/formBuilder.vue"),
  },
  {
    path: "/data-editing",
    name: "dataEditing",
    component: () => import("../views/setting/datasetting/editPage.vue"),
  },
  {
    path: "/add-building",
    name: "addBuilding",
    component: () => import("../views/projects/addunits/AddBuilding.vue"),
  },
];
export default routes;
