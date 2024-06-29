<template>
  <div class="container mx-auto p-4 flex gap-2 justify-end">
    <div
      v-for="property in properties"
      :key="property.id"
      class="property-card border rounded-lg mb-4"
    >
      <div class="header border-b p-3 flex justify-between items-center">
        <img src="/img/icons/options.png" alt="options" class="w-6 h-6" />
        <span class="text-black font-bold">{{ property.name }}</span>
      </div>
      <div
        class="content flex flex-wrap justify-between items-center text-right gap-1 p-3"
      >
        <div class="w-full md:w-1/3 flex justify-end gap-1">
          <span class="text-black font-bold">{{ property.location }}</span>
          <img src="/img/icons/location.png" alt="location" class="w-5 h-5" />
        </div>
        <div class="w-full md:w-1/3">
          <span class="text-gray-500">نوع العقار:</span>
          <span class="text-black font-bold px-2">{{ property.type }}</span>
        </div>
        <div class="client-status w-full md:w-auto">
          <span class="text-gray-500">حالة العميل:</span>
          <span
            v-if="property.clientStatus === 'مالك'"
            class="status text-blue-600 px-2"
            >{{ property.clientStatus }}</span
          >
          <span
            v-if="property.clientStatus === 'مستأجر'"
            class="status text-yellow-300 px-2 c"
            >{{ property.clientStatus }}</span
          ><span
            v-if="property.clientStatus === 'مدير عقار'"
            class="status text-green-400 px-2"
            >{{ property.clientStatus }}</span
          >
        </div>

        <div class="w-full md:w-1/2">
          <span class="text-gray-500">تصنيف العقار:</span>
          <span class="text-black font-bold px-2">{{
            property.classification
          }}</span>
        </div>
        <div
          class="w-full flex justify-between py-2 flex-col md:flex-row"
          dir="rtl"
        >
          <div class="flex items-center gap-1">
            <img src="/img/icons/Frame.png" alt="area" class="w-5 h-5" />
            <span class="text-gray-500"> المساحة: </span>
            <span>{{ property.area }}</span>
          </div>
          <div class="flex items-center gap-1">
            <img src="/img/icons/building-4.png" alt="floor" class="w-5 h-5" />
            <span class="text-gray-500">{{ property.floor }}</span>
          </div>
          <div class="flex items-center gap-1">
            <img src="/img/icons/Path 6669.png" alt="rooms" class="w-5 h-5" />
            <span class="text-gray-500">غرف:</span>
            <span>{{ property.rooms }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropertyCard",
  data() {
    return {
      properties: [
        {
          id: 11325,
          name: "اسم العقار - 11325",
          location: "الرياض",
          clientStatus: "مالك",
          type: "شقة",
          classification: "سكني",
          area: "115 م²",
          floor: "الدور الأرضي",
          rooms: 3,
        },
        {
          id: 11325,
          name: "اسم العقار - 11325",
          location: "الرياض",
          clientStatus: "مستأجر",
          type: "شقة",
          classification: "سكني",
          area: "115 م²",
          floor: "الدور الأرضي",
          rooms: 3,
        },
      ],
    };
  },
};
</script>
<style scoped>
.property-card {
  max-width: 400px;
  font-family: Arial, sans-serif;
}

.header {
  font-size: 14px;
}

.content {
  font-size: 14px;
}
</style>
