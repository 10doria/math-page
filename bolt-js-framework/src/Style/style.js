const Style = `
  <style>
  body {
    background-image: linear-gradient(#000000, #021c3d);
    color: white;
    font-family: Arial, sans-serif; 

  }

  .body {
    background-image: linear-gradient(#021c3d, #000000);
    display: flex;
    justify-content: center;
    margin: 2px;
    margin-top: 20px;
  }
  

    .footer img{
      height: 40px;
      widht: 40px;
      
      bottom: 0;
    }
    .navbar {
      background-color: #000;
    }

    .navbar-brand img {
      filter: invert(1);
    }

    .fade-in {
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }

    .fade-in.active {
      opacity: 1;
    }

    .carousel-item img {
      border-radius: 10px;
      margin: 20px auto;
      display: block;
      width: 80%;
      max-width: 400px;
    }

    .carousel-caption {
      text-align: center;
    }


      .bolt-button {
        border: none;
        padding: 10px 20px;
        background-color: chocolate; 
        color: white;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        outline: none;
      }
      
      .img {
        max-widht: 186px;
        max-height: 186px;
      }
      .result {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: large;
        
    }

      .bolt-button2 {
        border: none;
        padding: 10px 20px;
        color: white;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        outline: none;
      }
      
      .bolt-button:hover {
        background-color: #8b4513; 
      }

      .bolt-center {
        display: flex;
        justify-content: center;
        color: white;
      }  
    .navbar {
      background-color: #000;
    }
  
    .navbar-brand img {
      filter: invert(1);
    }
  
    .fade-in {
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
  
    .fade-in.active {
      opacity: 1;
    }
  
    .carousel-item img {
      border-radius: 10px;
      margin: 20px auto;
      display: block;
      width: 80%;
      max-width: 400px;
    }
  
    .carousel-caption {
      text-align: center;
    }
  
    footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        padding: 10px 0;
        background-color: #000;
        color: #fff;
      }
      
      .paragrafo {
        font-size: larger;
        font-family: Arial, Helvetica, sans-serif;
      }

      .text-center {
        color: white
      }

      .header img {
        text-align: right;
        border-radius: 50%;
        border: 5px solid chocolate;
      }

      .right {
        text-align: center;
      }
      .footer {
        background-image: #021c3d;
        text-decoration: none;
        color: inherit;
      }
      footer a {
        margin: 20px;
      }
      
      footer p {
        margin-top: 2px;
      }

      *{
        margin: 0;
        padding: 0;
    }
    .fundo{
     height: 100vh;   
     font-family: Arial, Helvetica, sans-serif;
     text-align: center;
    }
    .calculadora{
        position: absolute;
        background-color: rgba(0, 0, 0, 0.8);
        top: 50%;
        left: 50%;
        transform:translate(-50%,-50%);
        border-radius: 15px;
        padding: 15px;
    }
    .botao{
        width: 50px;
        height: 50px;
        font-size: 30px;
        cursor: pointer;
        background-color: rgb(31,31,31);
        border: none;
        color: #fff;
        margin: 2.5px;
    }
    .botao:hover{
        background-color: black;
    }
    #resultado{
        background-color: black;
        width: 210px;
        height: 30px;
        margin: 5px;
        color: white;
        font-size: 25px;
        text-align: right;
        padding: 5px;
    
    }
  </style>`;

  module.exports = Style;