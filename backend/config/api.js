module.exports = {
    check: function(api) {
        if(api==process.env.API_KEY){
            return true;
        }else{
            return false;
        }
    }
}