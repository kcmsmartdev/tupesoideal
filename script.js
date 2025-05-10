function functionCalcular() {
    const opcionSexo = document.getElementById("dato-Sexo").value;
    const opcionAltura = document.getElementById("dato_Altura").value;
    const opcionResultado = document.getElementById("dato-Resultado");
    let dato_Resultado = 0;
    
    if (isNaN(opcionAltura) || opcionAltura <= 0) {
        alert("Por favor ingresa una altura válida o escoge tu sexo.");
        return;
      }
    
    
     if(opcionSexo === "hombre"){
        //Datos para hombre
         let PB = 50;
         let DP = 2.3;
         let AR = 152.4;
         let CCA = 2.54
    
       //50 + 2.3 × (altura − 152.4) / 2.54
    
        // 1.Sacamos la diferencia de altura con AR
         _DA = opcionAltura - AR
        
         // 2.Convertirmos centimetro a pulgadas
         _CP = _DA / CCA;
         _CP2 = DP * _CP;
         // 3 Samos el resultdo
         dato_Resultado = PB + _CP2;
         if(opcionAltura <= 100){
            opcionResultado.textContent = "Busca ayuda médica";
        }else{
            opcionResultado.textContent = Math.ceil(dato_Resultado);
        }
    
     }else if(opcionSexo === "mujer" ){
        //Datos para hombre
        let PB = 45.5;
        let DP = 2.3;
        let AR = 152.4;
        let CCA = 2.54
    
      //50 + 2.3 × (altura − 152.4) / 2.54
    
       // 1.Sacamos la diferencia de altura con AR
        _DA = opcionAltura - AR
       
        // 2.Convertirmos centimetro a pulgadas
        _CP = _DA / CCA;
        _CP2 = DP * _CP;
        // 3 Samos el resultdo
        dato_Resultado = PB + _CP2;
        if(opcionAltura <= 100){
            opcionResultado.textContent = "Busca ayuda médica";
        }else{
            opcionResultado.textContent = Math.ceil(dato_Resultado);
        }
        
     }else{
        alert("Ingrese un sexo válido");
     }
    
    };