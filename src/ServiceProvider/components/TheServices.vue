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
        class="content flex flex-col justify-end w-full items-center text-right gap-1 p-3"
      >
        <p class="text-right w-full text-gray-400">التصنيف الفرعي:</p>
        <p class="text-black font-semibold">
          اسم الخدمة، اسم الخدمة، اسم الخدمة، اسم الخدمة، اسم الخدمة
        </p>
        <p class="text-right text-gray-400 w-full">التصنيف الفرعي:</p>
        <p class="text-black font-semibold">
          اسم الخدمة، اسم الخدمة، اسم الخدمة، اسم الخدمة، اسم الخدمة
        </p>
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
          name: "التصنيف الرئيسي",
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
          name: "التصنيف الرئيسي",
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
