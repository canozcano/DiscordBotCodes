module.exports = {
    name: 'kayıt',
    description: "kayıt",
    execute(message, args){
        
       if(message.member.roles.cache.has('754006033847812237')){
           message.channel.send('Yetkiniz Onaylanmıştır.')
        
        }else {message.channel.send("Kayıt Başarılı Bir Şekilde Gerçekleştirilmiştir.")
        message.member.roles.add('754006033847812237');
    }
            

            

            

    }
}
