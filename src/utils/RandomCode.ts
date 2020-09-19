const GenerateRandomCode = (length: number): string =>{

    const values = 'ABCDEFGHIJKLMNOPQRSTUVXZabcdefghijklmnopqrstuvxz01234567890';
    let code: string = '';

    for(let i=0; i<length; i++){
        code += values.charAt(Math.floor(Math.random() * values.length));
    }

    return code;
}

export default GenerateRandomCode;