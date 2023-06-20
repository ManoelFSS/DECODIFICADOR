import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    height: 100vh;
    align-items: center;

   

 
    section_Left{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    areaTitle{
        display: flex;
        align-items:center;
        width: 100%;
        gap: 60px;
        padding: 50px;
        h2{
            text-transform: uppercase;
            font-weight: bolder;
            font-size: 20px;
        }
    }

    div{

     
        
        h3{
            margin-left:30px ;
            color: red
        }

        textarea{
           font-size: 18px;
           border: none;
           padding: 10px;
          
        }

        textarea:focus {
            outline: none;
            
        }
        
        textarea::placeholder{
            font-size: 30px;
            color: black;
            padding-left: 20px;
            line-height:22px;
        }

    }

    areaButton{

        display: flex;
        align-items: center;
        height:100px;
        gap: 50px;

        button:nth-child(1) {
            width: 340px;
            height: 60px;
            border-radius: 20px;
            border: none;
            background: #0A3899;
            transition: all 0.3s;
            color: #fff;
            &:hover{
                background: #0A3871;
                transform: scale(1.1);
            }
        }
        button:nth-child(2){
            width: 340px;
            height: 60px;
            border-radius: 20px;
            transition: all 0.3s;
            border: solid 2px#0A3899;
            &:hover{
               transform: scale(1.1);
            }
        }
    }
       



    section_Right{
      display:flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
       width: 420px;
     

       section{
            display:flex;
            justify-content: center;
            width: 90%;
            height: 90%;
            box-shadow: 0px 2px 10px rgba(85, 85, 85, 0.788);
            padding: 10px;
            border-radius: 20px;
            position: relative;
            background: url(https://www.eboxdigital.com.br/assets/img/seguranca-informacao-cadeado.png) no-repeat center/ 200px 200px;

        }
    }

  




`;

export const  Textcripto = styled.div`
     display: ${props => props.cription };
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
     height: 100% !important;
     width: 100%;


    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        width: 100%;
  
    }
    div::-webkit-scrollbar {
         width: 3px; /* Largura da barra de rolagem */
    }
    div::-webkit-scrollbar-thumb {
        background-color: #666; /* Cor do polegar da barra de rolagem */
    }
   
     div p {
       
            display:block;
            width: 300px;
            height: auto;
            text-align: center;
            box-shadow: 0px 0px 4px  rgba(85, 85, 85, 0.788);
            margin-top: 10px;
            padding: 10px;
            overflow-wrap:break-word;
            border-radius: 10px;
            color: #fff;
            background: rgba(17, 50, 92, 0.788);
       
     }

     button{
            width: 340px;
            height: 60px;
            border-radius: 20px;
            transition: all 0.3s;
            border: solid 2px#0A3899;
            &:hover{
               transform: scale(1.1);
            }
        }
`;

export const Div = styled.div`

   display: ${props => props.section };
   height: 15vh !important;
   flex-direction: column;
   align-items: center;
   position: absolute;
   bottom:100px;
   gap: 15px;
  
   

   h3 {
        width: 200px;
        text-align: center;
    }
    p{
        width: 200px;
    }

`

export const Footer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 5vh;
    background: #001;
    color: #fff;
    
    ul {
        display: flex;
        gap: 50px;
    }

`;
  
  
