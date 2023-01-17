     //! TEXT INGRESADO USUARIO 

     let   textoUsuario    = document.getElementById('textoIngresado');

     //! ANTES DE ESCRIBIR LA ENCRIPTACION
     let   imagenInicio       = document.querySelector('.imagen-muñeco-Alura');
     let   parrafoInicio      = document.querySelector('.sinEncriptar');
     let   textAreaEncriptado = document.querySelector('.textareaEncriptado');
     let   copiarEncriptado   = document.querySelector('.btn-copiar');
     
     //!  MODELOS DE ENCRIPTACION PARA EL USO DEL PROGRAMA  
     let vocales = {
               a:'ai',
               e:'enter',
               i:'imes',
               o:'ober',
               u:'ufat',
          }
     
     const encriptar = () => {    
          //! CREACION DE CADENA TOMADA POR EL USUARIO
          let cadenas = Array.from(textoUsuario.value);
     
          //!Eliminacion del codigo 
          eliminarBloque();
          
          //! LOGICA PARA HACER EL ENCRIPTADOR     
          for(let elem = 0; elem <= cadenas.length; elem++){
               if(cadenas[elem] === "a"){
                    cadenas[elem] = vocales.a;
               }else if(cadenas[elem] === "e"){
                    cadenas[elem] = vocales.e; 
               }else if(cadenas[elem] === "i"){
                    cadenas[elem] = vocales.i;
               }else if(cadenas[elem] === 'o'){
                    cadenas[elem] = vocales.o
               }else if(cadenas[elem] === 'u'){
                    cadenas[elem] = vocales.u;
               }
          };
          //!Convertir Cadenas en String y creacion del textArea
          let cadena = cadenas.join(""); 
     
          if(cadena == ''){
               eliminarTextArea()
          }else{
               crearTextArea(cadena);
          }
     
     };
     
     const desEncriptar = () => {
          //! CREACION DE CADENA TOMADA POR EL USUARIO
     
          let cadenas = textoUsuario.value;
          
          //!Eliminacion del codigo 
          
         eliminarBloque();
     
          //! LOGICA PARA HACER EL ENCRIPTADOR
          
          for(let i = 0; i <= cadenas.length-1; i++){
               if(cadenas.includes('ai') == true){
                    cadenas = cadenas.replace('ai','a');
               }else if(cadenas.includes('enter') == true){
                    cadenas = cadenas.replace('enter','e');
               }else if(cadenas.includes('imes') == true){
                    cadenas = cadenas.replace('imes','i');
               }else if(cadenas.includes('ober') == true){
                    cadenas = cadenas.replace('ober','o');
               }else if(cadenas.includes('ufat') ==true){
                    cadenas = cadenas.replace('ufat','u');
               }
          }
     
          //! CREACION DE CADENA Y FUNCION CREAR TEXT AREA
          let cadena = cadenas ;
     
          if(cadena == ''){
               eliminarTextArea()
          }else{
               crearTextArea(cadena);
          }
          
          textoUsuario.value = ''
     
     }
     
     //! Copiar Texto
     const copiarTexto = () => {
          let texto = document.getElementById('texto');
          texto.select();
          texto.setSelectionRange(0,99999);
          document.execCommand('copy');
     }
     
     
     //! crear Text Area y BTN
     const crearTextArea = (cadena)=>{
     //! TEXAREA
               textAreaEncriptado.value = cadena; 
               textAreaEncriptado.classList = 'mostrar textareaEncriptado';
     //!BOTON
               copiarEncriptado.classList = 'mostrar btn-copiar'
     }
     
     //! Eliminar contenido
     const eliminarBloque = ()=> {
          imagenInicio.classList = 'noMostrar imagen-muñeco-Alura';
          parrafoInicio.classList = 'noMostrar sinEncriptar';
     }
     
     //! Eliminar TexTarea
     const eliminarTextArea = () =>{
          parrafoInicio.classList =  'mostrar sinEncriptar';
          imagenInicio.classList =  'mostrar imagen-muñeco-Alura';  
          textAreaEncriptado.classList = 'noMostrar';
          copiarEncriptado.classList = 'noMostrar';
     
     }