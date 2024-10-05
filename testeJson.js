//JSON - JavaScript Object Notation
// chave e valor com o objetivo de transferir dados
//Por Marcus Vinicius M. Banzatto - 05/out/2024
let invoice = {
	cliente: "Caldeiraria Almeida ",
    endereco: "Rua da Mata, 123 - Bairro Industrial - Sorocaba - SP" ,
    equipamentos: {
    	0: ["Samsung Inverter" , "12000BTU"],
        1: ["Springer Midea Inverter", "12000BTU"],
        2: ["Springer Carrier Fixo", "60000BTU"],
        3: ["LG Dual Inverter", "24000BTU"]
    },
    taxes: "98.90"
}

generateInvoice(invoice)

function generateInvoice(invoice){
	console.log(`O cliente é ${invoice.cliente}`)
    console.log(`o endereço é ${invoice.endereco}`)
    console.log("------------")
    
    for(let index in invoice.equipamentos){
    	let [equipamentosName, equipamentosCapacidade] = invoice.equipamentos[index]
        console.log(`- ${equipamentosName}: ${equipamentosCapacidade}`)
    }
    
    
}
