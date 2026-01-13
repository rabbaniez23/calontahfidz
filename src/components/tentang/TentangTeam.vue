<template>
  <section class="team-section py-16 px-8 gradient-soft">
    <div class="container mx-auto max-w-6xl">
      <SectionHeading
        title="Tim & Pengajar Kami"
        subtitle="Didukung oleh para asatidz berpengalaman lulusan pesantren & universitas terbaik"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TeamMemberCard
          v-for="(member, index) in teamMembers"
          :key="member.id"
          :name="member.name"
          :photo="member.photo"
          :role="member.role"
          :education="member.education"
          :bio="member.bio"
          :aos-delay="index * 100"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "@/components/common/SectionHeading.vue";
import TeamMemberCard from "@/components/common/TeamMemberCard.vue";
import { teamMembers } from "@/data/team";
</script>
