class TokenService {
    setToken = (dtUsuario) => {
        localStorage.removeItem('TOKEN_PT_BALDECASH');
        localStorage.setItem('TOKEN_PT_BALDECASH',JSON.stringify(dtUsuario));
    }
    
    getToken = () => {
        return   JSON.parse(localStorage.getItem('TOKEN_PT_BALDECASH'));
    }

    deleteToken = () => {
        localStorage.removeItem('TOKEN_PT_BALDECASH');
    }

}

export default new TokenService();