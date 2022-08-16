<script>
  import { fly } from 'svelte/transition';
</script>

<div class="w-full pt-36 h-full flex flex-col md:flex-row">
  <img src="/images/sport.svg" alt="exercice physique">
  <ul class="list-disc p-8 flex mx-auto flex-col">
    <li class="p-4" in:fly={{ y:200, duration:500}}>Diplômé de l'IFK Rennes en 1985</li>
    <li class="p-4" in:fly={{ y:200, duration:500, delay:500}}>Spécialisation Kiné du sport à
      l'Hôpital Avicenne de Bobigny en 1986</li>
    <li class="p-4" in:fly={{ y:200, duration:500, delay:1000}}>Formation Kiné du sport à l'INSEP en
      1987</li>
    <li class="p-4" in:fly={{ y:200, duration:500, delay:1500}}>Kiné de l'A.J. Auxerre de 1986 à 1990</li>
    <li class="p-4" in:fly={{ y:200, duration:500, delay:2000}}>Kiné à l'Institut Louison Bobet du
      Sofitel de Quiberon(56) en 1990</li>
  </ul>
</div>
