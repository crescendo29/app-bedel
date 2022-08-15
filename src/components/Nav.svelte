<script>

  let menuShow = false

  function toggleNavbar() {
    menuShow = !menuShow
  }
</script>

<div class="fixed w-full h-20 shadow-xl z-[100] bg-navBg">
  <div class="flex justify-between items-center w-full h-full px-2 2xl:px-16">
    <a href="/"><img src="/images/logo.png" class="w-[75px] rounded-full" alt="didier bedel"></a>
    <div class="">
      <ul class="hidden md:flex text-link">
        <li class="ml-10 text-sm uppercase hover:border-b hover:border-link"><a href="/">Accueil</a></li>
        <li class="ml-10 text-sm uppercase hover:border-b hover:border-link"><a href="/votreKine">Votre Kiné</a></li>
        <li class="ml-10 text-sm uppercase hover:border-b hover:border-link"><a href="/kineDuSport">Kiné du Sport</a></li>
        <li class="ml-10 text-sm uppercase hover:border-b hover:border-link"><a href="/materiel">Matériel</a></li>
        <li class="ml-10 text-sm uppercase hover:border-b hover:border-link"><a href="/">Prendre rdv</a></li>
        <li class="ml-10 text-sm uppercase hover:border-b hover:border-link"><a href="/contact">Contact</a></li>
      </ul>
      <div on:click={toggleNavbar} class="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-7 h-7 stroke-link"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>      
      </div>
    </div>
  </div>
  <div class={menuShow ? "md:hidden left-0 top-0 w-full h-screen bg-black/70" : ""}>
    <div class={menuShow ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-navBg p-10 ease-in duration-500"
    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
      <div>
        <div class="flex w-full items-center justify-between">
            <a href="/"><img src="/images/logo.png" class="w-[75px] rounded-full" alt="didier bedel"></a>
            <div on:click={toggleNavbar} class="rounded-full shadow-lg shadow-gray-400 px-4 py-2 text-2xl cursor-pointer">
              X
            </div>
        </div>
        <div class="py-4 flex flex-col">
          <ul class="uppercase text-link">
            <li on:click={toggleNavbar} class="py-4 text-sm"><a href="/">Accueil</a></li>
            <li on:click={toggleNavbar} class="py-4 text-sm"><a href="/votreKine">Votre Kiné</a></li>
            <li on:click={toggleNavbar} class="py-4 text-sm"><a href="/kineDuSport">Kiné du Sport</a></li>
            <li on:click={toggleNavbar} class="py-4 text-sm"><a href="/materiel">Matériel</a></li>
            <li on:click={toggleNavbar} class="py-4 text-sm"><a href="/">Prendre rdv</a></li>
            <li on:click={toggleNavbar} class="py-4 text-sm"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>