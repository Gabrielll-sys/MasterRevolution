export default interface IProduto {
id?:number,
categoria: string
codigoFabricante: string
corrente:string,
dataEntradaNF? : Date,
descricao: string,
localizacao: string,
marca: string,
markup?: string| number | null ,
precoCusto?: number | string,
precoVenda?: number,
tensao: string,
unidade: string,
urlImage?:string | null,
}



