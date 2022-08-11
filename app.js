const navbar = document.querySelector("nav");  //index.html deki bir kısmı çağırmış oluyoruz

function animation() {
    var controller = new ScrollMagic.Controller();
  
    const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  
    t1.fromTo(navbar, 1, { y: "-10rem" }, { y: 0 });
    t1.fromTo(
        ".banner-text",
        0.5,
        {x:"-2rem",opacity:0},
        {x:0,opacity:1},
        "-=0.6"   //animasyonların aynı anda gelmesi için zaman ayarı
    );
    t1.fromTo(
        ".banner-img",
        0.5,
        { x: "5rem", opacity: 0 },
        { x: 0, opacity: 1 }
      );
    t1.fromTo(
        ".banner-img img",
        0.5,
        {scale:1.5},{scale:1}   //resmin boyutunu değiştirmemize yarıyor.sonra eski haline gelmiş oluyor resim
    );


//about part

const t2 = gsap.timeline({ defaults: { ease: Expo.InOut } });
t2.fromTo(
    ".about-text",
    0.5,
    {x:"-2rem",opacity:0},
    {x:0,opacity:1},
      //animasyonların aynı anda gelmesi için zaman ayarı
);
t2.fromTo(".about-img", 0.5, { x: "5rem", opacity: 0 }, { x: 0, opacity: 1 });

t2.fromTo(
    ".about-img img",
    0.5,
    {scale:1.5},{scale:1}   //resmin boyutunu değiştirmemize yarıyor.sonra eski haline gelmiş oluyor resim
);

new ScrollMagic.Scene({
    triggerElement: "#about",
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(t2)
    .addTo(controller);

    //card animation

    const t3 = gsap.timeline({ defaults: { ease: Expo.InOut } });

    t3.fromTo(
        ".card",
        1,
        {y:"-3rem",opacity:0},
        {y:0,opacity:1, stagger:0.3}
          //animasyonların aynı anda gelmesi için zaman ayarı
    );
    t3.set(".card", { clearProps: "all" });
    t3.fromTo(
        ".video",
        0.3,
        {scale:1.5},{scale:1}   //resmin boyutunu değiştirmemize yarıyor.sonra eski haline gelmiş oluyor resim
    );

  new ScrollMagic.Scene({
    triggerElement: "#vid",
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(t3)
    .addTo(controller);

}
animation();