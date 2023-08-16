const productsList = [
    {id: '1', name: "lamapara1", category: "destacados", stock: 10, price: 6000, description: 'lorem asdkijshsduiondsanchjosaes uina', img: "https://i.pinimg.com/236x/a3/cf/2d/a3cf2da508b89d3e4c5cd6eef721ed4c.jpg"},
    {id: '2', name: "lampara2", category: "destacados", stock: 13, price: 8000, description: 'lorem asdkijshsduiondsanchjosaes uina', img: "https://i.pinimg.com/236x/48/89/94/4889941154a9e83d935b420c41431bff.jpg"},
    {id: '3', name: "lampara3", category: "nuevos", stock: 8, price: 6500, description: 'lorem asdkijshsduiondsanchjosaes uina', img: "https://i.pinimg.com/236x/f4/dd/9f/f4dd9f105db1d75f4055f51a58ef9cfe.jpg"},
    {id: '4', name: "lampara4", category: "nuevos", stock: 7, price: 9800, description: 'lorem asdkijshsduiondsanchjosaes uina', img: "https://i.pinimg.com/236x/09/80/55/0980555a038274ab6405b338dec91702.jpg"},
    {id: '5', name: "lampara4", category: "vendidos", stock: 4, price: 7000, description: 'lorem asdkijshsduiondsanchjosaes uina', img: "https://i.pinimg.com/236x/65/cd/ea/65cdea35bfc03aeb469c6553e2fbcfb8.jpg"}
]


export function getProducts(){
    return(
        new Promise((resolve, reject) => {
            let error = false
                if (error){
                    reject('no hay conexion con servidor')
                }else{
                    resolve(productsList)
                }
        })
    )
}

export const getItem = (id) => {
    return(
        new Promise((resolve) => {
            resolve(productsList.find((item) => item.id === id))
        })
    )
}