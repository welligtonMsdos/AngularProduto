export class ProdutoModel{
    constructor(
        public id: number = 0,
        public descricao: string = '',
        public preco: number = 0,
        public estoque: number = 0,
        public departamentoId: number = 0,  
        public departamento: string = '',            
    ){}
}