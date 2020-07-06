import funcUtils from '../utils/funcUtils';

const Token = {

    PostDataLogin (data){
        
        localStorage.setItem('iacces', funcUtils.cripto(data.token));
        localStorage.setItem('icodemp', funcUtils.cripto(String(data.codigo)));
        localStorage.setItem('idoc', funcUtils.cripto(data.documento));
        localStorage.setItem('inome', funcUtils.cripto(data.nome));
        localStorage.setItem('inivel', funcUtils.cripto(String(data.nivel)));
    },
    
    GetToken (){
    
        const isLogged = !!localStorage.getItem('iacces');  
        
        if (isLogged){
            const cryptoToken = localStorage.getItem('iacces');
            const token = funcUtils.descripto(cryptoToken);
            return token;
        }
    
        return '';
    },
    
    GetCodEmpresa (){
    
        const isLogged = !!localStorage.getItem('iacces');  
        
        if (isLogged){
            const cryptCodEmpresa = localStorage.getItem('icodemp');
            const codEmpresa = funcUtils.descripto(cryptCodEmpresa);
            return codEmpresa;
        }
    
        return '';
    }
        
    // PostToken (token){
       
    //     const cryptToken = funcUtils.cripto(token);
    //     localStorage.setItem('iacces', cryptToken);
    // },
};

export default Token;