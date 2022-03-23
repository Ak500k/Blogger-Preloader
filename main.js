<!-- preloader JavaScript -->
  <b:if cond='data:view.isHomepage'>
    
  <script>
    const preloader = document.querySelector(&quot;.preloader&quot;);
const preloaderDuration = 200;
    const websiteContainer = document.querySelector(&#39;.website-container&#39;);

const hidePreloader = () =&gt; {
    setTimeout(() =&gt; {
        preloader.classList.add(&quot;hide&quot;);
    	websiteContainer.classList.remove(&#39;hide&#39;);
    }, preloaderDuration);
}

window.addEventListener(&quot;load&quot;, hidePreloader);
  </script>
    
  </b:if>
