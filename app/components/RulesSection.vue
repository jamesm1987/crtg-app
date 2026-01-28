<script setup lang="ts">

const pointsRules = [
  { category: 'Result Points', items: [
      { label: 'Win', points: '3 pts' },
      { label: 'Draw', points: '1 pt' },
  ]},
  { category: 'Score Bonus', items: [
      { label: 'Home win by 3+ goals', points: '+1 pt' },
      { label: 'Away win by 3+ goals', points: '+2 pts' },
      { label: 'Home defeat by 3+ goals', points: '-2 pts' },
      { label: 'Away defeat by 3+ goals', points: '-1 pt' },
  ]},
  { category: 'Top Scorer Bonus', items: [
      { label: 'League\'s highest scorer', points: '15 pts' },
      { label: 'League\'s 2nd highest', points: '10 pts' },
      { label: 'League\'s 3rd highest', points: '5 pts' },
  ]},
];

const trophyBonuses = [
  { trophy: 'Champions League', points: 40, icon: '🏆' },
  { trophy: 'Domestic League', points: 20, icon: '🥇' },
  { trophy: 'Europa League', points: 15, icon: '🥈' },
  { trophy: 'Conference League', points: 10, icon: '🥉' },
  { trophy: 'Domestic Cup', points: 10, icon: '🏅' },
];
</script>

<template>
  <section id="how-to-play" class="py-24 relative">
    <div class="absolute inset-0 bg-linear-to-b from-background via-card/30 to-background"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="font-display text-5xl md:text-6xl tracking-tight mb-4">
          HOW TO <span class="text-gradient">PLAY</span>
        </h2>
        <p class="text-muted-foreground max-w-xl mx-auto">
          Simple Rules, maximum strategy. Every match counts.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div class="card-gradient rounded-2xl p-6 border border-border/50 shadow-card">
          <div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
            <UIcon name="i-lucide-list-todo" class="w-6 h-6 text-accent" />
          </div>
          <h3 class="font-display text-2xl mb-2">PICK YOUR TEAMS</h3>
          <p class="text-muted-foreground text-sm">
            Select 10 teams across Europe's Top 5 leagues. You must pick exactly 2 teams from each league.
          </p>
        </div>

        <div class="card-gradient rounded-2xl p-6 border border-border/50 shadow-card">
          <div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
            <UIcon name="i-lucide-badge-pound-sterling" class="w-6 h-6 text-accent" />
          </div>
          <h3 class="font-display text-2xl mb-2">BUDGET: £125M</h3>
          <p class="text-muted-foreground text-sm">
            Each team has a price. Your total spend cannot exceed £125m
          </p>
        </div>

        <div class="card-gradient rounded-2xl p-6 border border-border/50 shadow-card">
          <div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
            <UIcon name="i-lucide-calendar-1" class="w-6 h-6 text-accent" />
          </div>
          <h3 class="font-display text-2xl mb-2">FULL SEASON</h3>
          <p class="text-muted-foreground text-sm">
            Game runs the entire domestic season, culminating with the Champions League final.
          </p>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 mb-16">
        <div class="card-gradient rounded-2xl p-8 border border-border/50 shadow-card">
          <div class="flex items-center gap-3 mb-6">
            <Award class="w-6 h-6 text-primary" />
            <h3 class="font-display text-2xl">POINTS BREAKDOWN</h3>
          </div>
          
          <div class="space-y-6">
            <div v-for="section in pointsRules" :key="section.category">
              <h4 class="text-sm font-semibold text-accent mb-3">{{ section.category }}</h4>
              <div class="space-y-2">
                <div v-for="item in section.items" :key="item.label" class="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                  <span class="text-muted-foreground text-sm">{{ item.label }}</span>
                  <span class="font-mono font-semibold text-foreground">{{ item.points }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-gradient rounded-2xl p-8 border border-border/50 shadow-card">
          <div class="flex items-center gap-3 mb-6">
            <Trophy class="w-6 h-6 text-accent" />
            <h3 class="font-display text-2xl">TROPHY BONUSES</h3>
          </div>
          <div class="space-y-4">
            <div v-for="bonus in trophyBonuses" :key="bonus.trophy" class="flex items-center justify-between py-3 px-4 rounded-xl bg-secondary/50 hover:bg-secondary/80 transition-colors">
              <div class="flex items-center gap-3">
                <span class="text-2xl">{{ bonus.icon }}</span>
                <span class="text-foreground">{{ bonus.trophy }}</span>
              </div>
              <span class="font-display text-xl text-gradient">+{{ bonus.points }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card-gradient rounded-2xl p-8 border border-primary/30 shadow-card shadow-glow max-w-2xl mx-auto">
        <div class="flex items-center gap-3 mb-4">
          <ArrowRightLeft class="w-6 h-6 text-primary" />
          <h3 class="font-display text-2xl">TRANSFER WINDOW</h3>
        </div>
        <p class="text-muted-foreground">
          Between <span class="text-foreground font-semibold">1st - 11th September</span>, you can swap up to 2 teams. 
          New picks must fit your budget and league restrictions. Points from original picks are kept, 
          and new team points count from September 11th onwards.
        </p>
      </div>
    </div>
  </section>
</template>