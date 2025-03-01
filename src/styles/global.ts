import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: 0;
        box-sizing: border-box;
        
    }
    
    body {

        color: ${(props) => props.theme.basetitle};
        background: ${(props) => props.theme.white};
       
    }
    body, div, a, span, input, header, button, h2, h5, strong{
        font-family: 'Roboto', sans-serif;
        line-height: 1.3;
        font-size: 1rem;
        font-weight: 400;
        color: ${(props) => props.theme.basetext};
        
    }
    strong {
        font-weight: 700;
    }

    header {
        font-family: 'baloo 2', sans-serif;
        font-size: 2rem;
        font-weight: 800;
        color: ${(props) => props.theme.basesubtitle};
    }
 
h1, h3, h4 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme.basesubtitle};
    font-weight: 800;
}

h3, h4 {
    font-size: 1.25rem;
    font-weight: 700;
   
}  
   h5 {
    font-size: 0.875rem; 
    
   }
  a {
    font-size: 0.625rem;
    color: ${(props) => props.theme.yellowdark};
    font-weight: 700;  

  } 
    p { 
        font-size: 1.25rem;
        font-weight: 400;
        color: ${(props) => props.theme.basesubtitle};
    }
   


    
`

/// title are  baloo2
// XL 48px  800
// L 32px  800
// M 24px  800
// S 20px  700
// xs 18px  700

// font-family: 'Baloo 2', cursive;

/// text tag button are roboto
// L 20px 400 and 700
// M 16px 400 and 700
// S 14px 400
// xs 12px 700

// Tag 10px 700
// Button G 14px 700
// Button M 12px 400
