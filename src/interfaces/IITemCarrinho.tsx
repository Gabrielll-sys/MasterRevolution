

export default interface IItemCarrinho {

    quantidade:number,
    id?:number,
    categoria: string
    codigoFabricante: string
    corrente:string,
    descricao: string
    marca: string,
    precoVenda?: number,
    tensao: string,
    unidade: string,
    urlImage?:string | null,


}