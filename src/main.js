/**************************************************/
/* Document ready handler */
/**************************************************/
const onReady = () => {
  // Google Analytics consent banner
  $("#cookie-accept").on("click", () => {
    $("#cookie-banner").addClass("hidden");
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-VY0D6QW2LZ";
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-VY0D6QW2LZ');
    };
  });
  $("#cookie-decline").on("click", () => {
    $("#cookie-banner").addClass("hidden");
  });

  // Say hello to developer
  console.log("Hello Developer! 👋");
};

/**************************************************/
/* Initially call the onReady handler */
/**************************************************/
$(onReady);
