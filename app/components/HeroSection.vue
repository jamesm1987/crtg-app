<script setup>

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const stats = [
  { label: 'Budget', value: '£125M', highlight: true },
  { label: 'Teams', value: '10', highlight: false },
  { label: 'Leagues', value: '5', highlight: false },
];
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 bg-[#020617]">
    <div class="absolute inset-0 hero-gradient opacity-40" />
    
    <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
    <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px]" />

    <div 
      class="absolute inset-0 opacity-[0.15]"
      :style="{
        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
        '-webkit-mask-image': 'radial-gradient(circle at center, black, transparent 80%)'
      }"
    />

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-5xl mx-auto text-center">
        
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(var(--primary),0.1)] animate-in fade-in slide-in-from-top-4 duration-700">
          <Zap class="w-3.5 h-3.5 text-primary fill-primary" />
          <span class="text-xs font-bold uppercase tracking-widest text-primary-foreground/80">Season 2025/26 Live</span>
        </div>

        <h1 class="font-black italic text-5xl md:text-8xl lg:text-9xl tracking-tighter mb-6 leading-[0.9] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          <span class="text-white drop-shadow-sm">COVID ROAD</span><br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/50">TO GLORY</span>
        </h1>

        <p class="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 [text-wrap:balance] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          The ultimate European fantasy league. Draft 10 elite clubs, manage your 
          <span class="text-foreground font-semibold">£125M budget</span>, and dominate the continental standings.
        </p>

        <div class="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div 
            v-for="(stat, i) in stats" 
            :key="i"
            class="group p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            <div 
              class="font-display text-3xl md:text-5xl mb-1"
              :class="stat.highlight ? 'text-primary' : 'text-white'"
            >
              {{ stat.value }}
            </div>
            <p class="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-bold group-hover:text-primary transition-colors">
              {{ stat.label }}
            </p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
          <button 
            @click="scrollToId('select')"
            class="h-14 px-8 text-lg font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Trophy class="w-5 h-5" />
            Start Your Journey
          </button>
          
          <button 
            @click="scrollToId('rules')"
            class="h-14 px-8 text-lg font-bold rounded-full text-white bg-transparent border border-white/10 hover:bg-white/5 w-full sm:w-auto flex items-center justify-center gap-2 transition-all"
          >
            <Calendar class="w-5 h-5" />
            Game Rules
            <ArrowRight class="w-4 h-4 opacity-50" />
          </button>
        </div>
      </div>
    </div>

    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block animate-bounce opacity-50">
      <ChevronDown class="w-6 h-6 text-white" />
    </div>
  </section>
</template>
