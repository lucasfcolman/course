const productos = [
    {
      id :"1",
      name : "Key",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cra pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
      stock: 10,
      img : "https://i.imgur.com/K2ITVJu.jpeg", 
    },
    {
      id :"2",
      name : "Guitar",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cra pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
      stock: 2,
      img : "https://i.imgur.com/4BvASBo.jpeg",
    },
    {
      id :"3",
      name : "Snare",
      description :  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cra pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", 
      stock: 5,
      img : "https://i.imgur.com/XK6QMms.jpeg",
    },
  ];
  
    export const productList = new Promise ((resolve)=>
    setTimeout(()=>{
    resolve(productos);
    }, 3000 )
    );


    export default productos;